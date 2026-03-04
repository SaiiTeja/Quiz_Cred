import { useState, useRef, useEffect } from "react";
import "./EditProfileModal.css";

/* 
   OTP Input — 6 individual boxes
 */
function OtpInput({ value, onChange, disabled }) {
  const refs = useRef([]);
  const digits = (value + "      ").slice(0, 6).split("");

  const set = (i, v) => {
    const arr = digits.map(d => d.trim());
    arr[i] = v.replace(/\D/g, "").slice(-1);
    onChange(arr.join("").replace(/ /g, ""));
    if (v && i < 5) refs.current[i + 1]?.focus();
  };

  const onKey = (i, e) => {
    if (e.key === "Backspace" && !digits[i].trim() && i > 0)
      refs.current[i - 1]?.focus();
  };

  const onPaste = (e) => {
    const t = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    onChange(t);
    refs.current[Math.min(t.length, 5)]?.focus();
    e.preventDefault();
  };

  return (
    <div className="epm-otp-row">
      {digits.map((d, i) => (
        <input
          key={i}
          ref={el => (refs.current[i] = el)}
          className={`epm-otp-box${d.trim() ? " filled" : ""}`}
          value={d.trim()}
          maxLength={1}
          disabled={disabled}
          onChange={e => set(i, e.target.value)}
          onKeyDown={e => onKey(i, e)}
          onPaste={onPaste}
        />
      ))}
    </div>
  );
}

/* 
   Countdown Timer with Resend*/
function Timer({ seconds, onResend }) {
  const [t, setT] = useState(seconds);

  useEffect(() => {
    setT(seconds);
    if (!seconds) return;
    const id = setInterval(() => {
      setT(p => {
        if (p <= 1) { clearInterval(id); return 0; }
        return p - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [seconds]);

  return (
    <div className="epm-timer">
      {t > 0 ? (
        <>Resend OTP in <span>{t}s</span></>
      ) : (
        <button className="epm-resend" onClick={onResend}>Resend OTP</button>
      )}
    </div>
  );
}


function ProfileTab({ profileData, onClose, onSave }) {
  const originalName   = profileData?.name   || "";
  const originalEmail  = profileData?.email  || "";
  const originalAvatar = profileData?.avatar || "";

  const [step,    setStep]    = useState("form"); // form | otp | success
  const [name,    setName]    = useState(originalName);
  const [email,   setEmail]   = useState(originalEmail);
  const [avatar,  setAvatar]  = useState(originalAvatar);
  const [otp,     setOtp]     = useState("");
  const [timer,   setTimer]   = useState(0);
  const [loading, setLoading] = useState(false);
  const [err,     setErr]     = useState("");
  const fileRef = useRef(null);

  const emailChanged  = email.trim() !== originalEmail;
  const avatarChanged = avatar !== originalAvatar;

  /* Avatar handlers  */
  const handleImageClick  = () => fileRef.current?.click();

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) { setErr("Please select a valid image file."); return; }
    if (file.size > 5 * 1024 * 1024)    { setErr("Image must be under 5 MB."); return; }
    setErr("");
    const reader = new FileReader();
    reader.onload = (ev) => setAvatar(ev.target.result);
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = (e) => {
    e.stopPropagation();
    setAvatar("");
    if (fileRef.current) fileRef.current.value = "";
  };

  /* Save / OTP  */
  const handleSave = () => {
    setLoading(true);
    if (!emailChanged) {
      // Name / avatar — no OTP 
      setTimeout(() => {
        onSave({
          name: name.trim(),
          ...(avatarChanged && { avatar }),
        });
        setLoading(false);
        setStep("success");
      }, 600);
    } else {
      // Email changed — OTP required
      setTimeout(() => {
        setLoading(false);
        setStep("otp");
        setTimer(30);
        setOtp("");
        setErr("");
      }, 800);
    }
  };

  const verify = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (otp === "123456") {
        onSave({
          name:  name.trim(),
          email: email.trim(),
          ...(avatarChanged && { avatar }),
        });
        setStep("success");
      } else {
        setErr("Invalid OTP. Use 123456 for demo.");
      }
    }, 800);
  };

  /* Success  */
  if (step === "success") return (
    <div className="epm-success-box">
      <div className="epm-success-icon">✅</div>
      <h3 className="epm-success-title">Profile Updated!</h3>
      <p className="epm-success-text">
        {emailChanged
          ? "Your name, photo and email have been updated successfully."
          : "Your profile has been updated successfully."}
      </p>
      <button className="epm-btn" onClick={onClose}>Done</button>
    </div>
  );

  /* OTP Step (only when email changed)  */
  if (step === "otp") return (
    <>
      <div className="epm-otp-hint">
        Enter the 6-digit code sent to<br />
        <strong>{email}</strong>
      </div>
      <OtpInput
        value={otp}
        onChange={v => { setOtp(v); setErr(""); }}
        disabled={loading}
      />
      {err && <p className="epm-error" style={{ textAlign: "center" }}>{err}</p>}
      <Timer seconds={timer} onResend={() => { setTimer(30); setOtp(""); setErr(""); }} />
      <div className="epm-btn-row">
        <button className="epm-btn-ghost" onClick={() => setStep("form")}>← Back</button>
        <button
          className="epm-btn-primary"
          onClick={verify}
          disabled={otp.length < 6 || loading}
        >
          {loading ? "Verifying…" : "Confirm Email Change"}
        </button>
      </div>
      <p className="epm-demo-note">Demo OTP: 123456</p>
    </>
  );

  /* Form  */
  return (
    <>
      {/* Avatar picker */}
      <div className="epm-avatar-section">
        <div className="epm-avatar-wrap" onClick={handleImageClick}>
          {avatar ? (
            <img src={avatar} alt="Profile" className="epm-avatar-img" />
          ) : (
            <div className="epm-avatar-placeholder">
              {name ? name.charAt(0).toUpperCase() : "?"}
            </div>
          )}
          <div className="epm-avatar-overlay">
            <span className="epm-avatar-overlay-icon">📷</span>
            <span className="epm-avatar-overlay-text">Change</span>
          </div>
        </div>

        <div className="epm-avatar-actions">
          <button className="epm-avatar-btn-upload" onClick={handleImageClick}>
            Upload Photo
          </button>
          {avatar && (
            <button className="epm-avatar-btn-remove" onClick={handleRemoveImage}>
              Remove
            </button>
          )}
          <p className="epm-avatar-hint">JPG, PNG or GIF · Max 5 MB</p>
        </div>

        {/* Hidden file input */}
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
      </div>

      {err && <p className="epm-error" style={{ marginBottom: 16 }}>{err}</p>}

      <div className="epm-form-group">
        <label className="epm-label">Full Name</label>
        <input
          className="epm-input"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Your full name"
        />
      </div>

      <div className="epm-form-group">
        <label className="epm-label">Email Address</label>
        <input
          className="epm-input"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@email.com"
        />
        {emailChanged && (
          <p className="epm-email-warn">
            ⚠️ Changing your email requires OTP verification.
          </p>
        )}
      </div>

      <div className="epm-btn-row">
        <button className="epm-btn-ghost" onClick={onClose}>Cancel</button>
        <button
          className="epm-btn-primary"
          onClick={handleSave}
          disabled={!name.trim() || !email.trim() || loading}
        >
          {loading ? "Saving…" : emailChanged ? "Send OTP →" : "Save Changes"}
        </button>
      </div>
    </>
  );
}


function PasswordTab({ onClose }) {
  const [step,    setStep]    = useState("form"); // form | otp | success
  const [cur,     setCur]     = useState("");
  const [np,      setNp]      = useState("");
  const [conf,    setConf]    = useState("");
  const [otp,     setOtp]     = useState("");
  const [timer,   setTimer]   = useState(0);
  const [loading, setLoading] = useState(false);
  const [err,     setErr]     = useState("");
  const [showCur, setShowCur] = useState(false);
  const [showNew, setShowNew] = useState(false);

  const strength = np.length === 0 ? 0 : np.length < 6 ? 1 : np.length < 10 ? 2 : 3;
  const sColor   = ["#334155", "#ef4444", "#f59e0b", "#10b981"][strength];
  const sLabel   = ["", "Weak", "Fair", "Strong"][strength];
  const match    = np.length >= 8 && np === conf;

  const sendOtp = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("otp");
      setTimer(30);
      setOtp("");
      setErr("");
    }, 800);
  };

  const verify = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      otp === "123456"
        ? setStep("success")
        : setErr("Invalid OTP. Use 123456 for demo.");
    }, 800);
  };

  /* Successss*/
  if (step === "success") return (
    <div className="epm-success-box">
      <div className="epm-success-icon">🔒</div>
      <h3 className="epm-success-title">Password Changed!</h3>
      <p className="epm-success-text">Your account is now secured with the new password.</p>
      <button className="epm-btn" onClick={onClose}>Done</button>
    </div>
  );

  /* OTP Steppp */
  if (step === "otp") return (
    <>
      <div className="epm-otp-hint">
        Enter the 6-digit code sent to your<br />
        <strong>registered email address</strong>
      </div>
      <OtpInput
        value={otp}
        onChange={v => { setOtp(v); setErr(""); }}
        disabled={loading}
      />
      {err && <p className="epm-error" style={{ textAlign: "center" }}>{err}</p>}
      <Timer seconds={timer} onResend={() => { setTimer(30); setOtp(""); setErr(""); }} />
      <div className="epm-btn-row">
        <button className="epm-btn-ghost" onClick={() => setStep("form")}>← Back</button>
        <button
          className="epm-btn-primary"
          onClick={verify}
          disabled={otp.length < 6 || loading}
        >
          {loading ? "Verifying…" : "Change Password"}
        </button>
      </div>
      <p className="epm-demo-note">Demo OTP: 123456</p>
    </>
  );

  /* Formm */
  return (
    <>
      <div className="epm-form-group">
        <label className="epm-label">Current Password</label>
        <div className="epm-input-wrap">
          <input
            className="epm-input"
            type={showCur ? "text" : "password"}
            value={cur}
            onChange={e => setCur(e.target.value)}
            placeholder="Enter current password"
            style={{ paddingRight: 42 }}
          />
          <button className="epm-eye" onClick={() => setShowCur(!showCur)}>
            {showCur ? "🙈" : "👁️"}
          </button>
        </div>
      </div>

      <div className="epm-form-group">
        <label className="epm-label">New Password</label>
        <div className="epm-input-wrap">
          <input
            className="epm-input"
            type={showNew ? "text" : "password"}
            value={np}
            onChange={e => setNp(e.target.value)}
            placeholder="Min. 8 characters"
            style={{ paddingRight: 42 }}
          />
          <button className="epm-eye" onClick={() => setShowNew(!showNew)}>
            {showNew ? "🙈" : "👁️"}
          </button>
        </div>
        {np.length > 0 && (
          <div className="epm-strength-bars">
            {[1, 2, 3].map(i => (
              <div
                key={i}
                className="epm-strength-bar"
                style={{ background: i <= strength ? sColor : "rgba(99,102,241,0.1)" }}
              />
            ))}
            <span className="epm-strength-label" style={{ color: sColor }}>{sLabel}</span>
          </div>
        )}
      </div>

      <div className="epm-form-group">
        <label className="epm-label">Confirm New Password</label>
        <input
          className="epm-input"
          type="password"
          value={conf}
          onChange={e => setConf(e.target.value)}
          placeholder="Re-enter new password"
        />
        {conf && !match && (
          <p className="epm-error">Passwords don't match or are too short (min 8 chars)</p>
        )}
      </div>

      <div className="epm-btn-row">
        <button className="epm-btn-ghost" onClick={onClose}>Cancel</button>
        <button
          className="epm-btn-primary"
          onClick={sendOtp}
          disabled={!cur || !match || loading}
        >
          {loading ? "Sending OTP…" : "Send OTP →"}
        </button>
      </div>
    </>
  );
}


export default function EditProfileModal({ profileData, onClose, onSave }) {
  const [tab, setTab] = useState("profile");

  return (
    <div className="epm-overlay" onClick={onClose}>
      <div className="epm-modal" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="epm-header">
          <div className="epm-title-row">
            <h2 className="epm-title">Edit Profile</h2>
            <button className="epm-close" onClick={onClose}>×</button>
          </div>

          {/* Tabs */}
          <div className="epm-tabs">
            {[
              { id: "profile",  label: "Profile Info"    },
              { id: "password", label: "Change Password" },
            ].map(t => (
              <button
                key={t.id}
                className={`epm-tab${tab === t.id ? " active" : ""}`}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Body — key forces remount on tab switch, resetting inner state */}
        <div className="epm-body" key={tab}>
          {tab === "profile" ? (
            <ProfileTab
              profileData={profileData}
              onClose={onClose}
              onSave={onSave}
            />
          ) : (
            <PasswordTab onClose={onClose} />
          )}
        </div>

      </div>
    </div>
  );
}
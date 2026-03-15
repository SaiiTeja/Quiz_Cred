import { CONTACT_LINKS, QUICK_LINKS } from "../CONSTANT";
import useTheme from "../hooks/useTheme";
import { useNavigate } from "react-router-dom";




export default function Footer() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const isDarkMode = theme === "dark";

  

  const themeColor = {
    text: isDarkMode ? "#ffffff" : "#111827",
    subText: isDarkMode ? "#9ca3af" : "#374151",
    footerText: isDarkMode ? "#6b7280" : "#4b5563",
    primary: isDarkMode
      ? "linear-gradient(90deg, #2563eb, #1e3a8a)"
      : "#0095F6",
  };

  return (
    <footer
      // style={{
      //   marginTop: "auto",
      //   padding: "60px 40px 30px",
      //   borderTop: isDarkMode
      //     ? "1px solid rgba(255,255,255,0.1)"
      //     : "1px solid rgba(0,0,0,0.05)",
      // }}
      className={`${isDarkMode?"bg-[#0f172a]":"bg-[#f9fafb]"} px-8 `}
    >
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-10 py-12">
        {/* Brand Section */}
        <div className="max-w-sm">
          <h3 className={`mb-4 text-lg font-semibold ${isDarkMode?"text-[#ffffff]":"text-[#111827]"}`}>QuizCred</h3>
          <p style={{ color: themeColor.subText }}>
            Empowering learners to grow their skills through smart quizzes and
            competitive challenges.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex gap-16 flex-wrap">
          <div>
            <h4 className="text-[#0095F6]">Quick Links</h4>

            <ul className="space-y-2 list-none p-0 m-0 ">
              {QUICK_LINKS.map((item, i) => (
                <li key={i}>
                  <a
                    onClick={() => navigate(item.path)}
                    className="text-[#6b7280] no-underline hover:underline cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div >
            <h4 className="text-[#0095F6]">Connect</h4>

            <ul className="space-y-2 list-none p-0 m-0 ">
              {CONTACT_LINKS.map((item, i) => {
                
                return(
                <li key={i}>
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-[#6b7280] cursor-pointer mb-2  no-underline hover:underline flex items-center gap-2`}
                  >
                    <img src={item.icon} alt={`${item.label} icon`} className="w-4 h-4" />   
                    <span>{item.label}</span>
                  </a>
                </li>
              )})}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        // style={{
        //   textAlign: "center",
        //   paddingTop: "20px",
        //   marginTop: "40px",
        //   borderTop: isDarkMode
        //     ? "1px solid rgba(255,255,255,0.1)"
        //     : "1px solid rgba(0,0,0,0.05)",
        //   color: themeColor.footerText,
        //   fontSize: "14px",
        // }}
        className={`py-6 text-center ${isDarkMode?"text-[#6b7280]":"text-[#4b5563]"} text-sm border-t border-gray-900/20`}
      >
        © 2026 QuizCred. All Rights Reserved.
      </div>
    </footer>
  );
}

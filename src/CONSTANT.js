import { RiInstagramLine,RiLinkedinLine,RiTwitterXLine,RiAtLine } from "@remixicon/react";
export const QUICK_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Dashboard", path: "/dashboard" },
];

export const CONTACT_LINKS = [
  {
    label: "Instagram",
    url: "https://www.instagram.com/quiz.cred/",
    icon:RiInstagramLine
  },
  { label: "LinkedIn", url: "https://linkedin.com" ,icon:RiLinkedinLine},
  { label: "X", url: "https://x.com" ,icon:RiTwitterXLine},
  { label: "Email", url: "mailto:your@email.com", icon:RiAtLine},
];

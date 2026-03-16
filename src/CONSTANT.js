import iInstagram from './assets/icons/instagram.svg'
import iAtSign from './assets/icons/atSign.svg'
import iLinkedin from './assets/icons/linkedin.svg'
import iX from './assets/icons/x.svg'

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
    icon:iInstagram
  },
  { label: "LinkedIn", url: "https://linkedin.com" ,icon:iLinkedin},
  { label: "X", url: "https://x.com" ,icon:iX},
  { label: "Email", url: "mailto:your@email.com", icon:iAtSign},
];

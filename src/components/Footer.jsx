import { CONTACT_LINKS, QUICK_LINKS } from "../CONSTANT";
import useTheme from "../hooks/useTheme";
import { useNavigate } from "react-router-dom";




export default function Footer() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const isDarkMode = theme === "dark";

  return (
    <footer
    
      className={`bg-background px-8 border-t border-border`}
    >
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-10 py-12">
        {/* Brand Section */}
        <div className="max-w-sm">
          <h3 className={`mb-4 text-lg font-semibold `}>QuizCred</h3>
          <p >
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
                 const Icon = item.icon ;
                return(
                <li key={i}>
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-[#6b7280] cursor-pointer mb-2  no-underline hover:underline flex items-center gap-2`}
                  >
                    {/* <img src={item.icon} alt={`${item.label} icon`} className="w-4 h-4 text-foreground" onLoad="SVGInject(this)" />    */}
                    <Icon className="w-6 h-6 text-foreground  "/>
                  
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
               className={`py-6 text-center text-muted-foreground text-sm border-t ${isDarkMode?"border-border/40":"border-border/80 "}`}
      >
        © 2026 QuizCred. All Rights Reserved.
      </div>
    </footer>
  );
}

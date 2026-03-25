import { CONTACT_LINKS, QUICK_LINKS } from "../CONSTANT";
import useTheme from "../hooks/useTheme";
import { useNavigate } from "react-router-dom";




export default function Footer() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const isDarkMode = theme === "dark";

  return (
    <footer
    
      className={`bg-surface px-8 `}
    >
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-10 py-12">
        {/* Brand Section */}
        <div className="max-w-sm">
          <h3 className={`mb-4 text-lg font-semibold `}>QuizCred</h3>
          <p className="text-muted-foreground">
            Empowering learners to grow their skills through smart quizzes and
            competitive challenges.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex gap-16 flex-wrap">
          <div>
            <h4 className="text-primary mb-3 font-semibold">Quick Links</h4>

            <ul className="space-y-2 list-none p-0 m-0 ">
              {QUICK_LINKS.map((item, i) => (
                <li key={i}>
                  <a
                    onClick={() => navigate(item.path)}
                    className="text-muted-foreground no-underline hover:underline cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div >
            <h4 className="text-primary mb-3 font-semibold">Connect</h4>

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
                    className={`text-muted-foreground cursor-pointer mb-2  no-underline hover:underline flex items-center gap-2`}
                  >
                    {/* <img src={item.icon} alt={`${item.label} icon`} className="w-4 h-4 text-foreground" onLoad="SVGInject(this)" />    */}
                    <Icon className="w-5 h-5 text-foreground  "/>
                  
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

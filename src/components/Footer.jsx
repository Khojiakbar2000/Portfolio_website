import { Link } from "react-router-dom";

import { socialLinks } from "../constants";
import { useLanguage } from "../contexts/LanguageContext";
import { getTranslation } from "../translations";

const Footer = () => {
  const { language } = useLanguage();
  
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200 dark:border-slate-700' />

      <div className='footer-container'>
        <p className='text-black dark:text-gray-300'>
          {getTranslation(language, "footer.copyright")} <strong>John</strong>. {getTranslation(language, "footer.rights")}
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

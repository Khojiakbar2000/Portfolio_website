import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { getTranslation } from "../translations";

const CTA = () => {
  const { language } = useLanguage();
  
  return (
    <section className='cta'>
      <p className='cta-text dark:text-gray-200'>
        {getTranslation(language, "cta.text")} <br className='sm:block hidden' />
        {getTranslation(language, "cta.subtext")}
      </p>
      <Link to='/contact' className='btn'>
        {getTranslation(language, "cta.button")}
      </Link>
    </section>
  );
};

export default CTA;

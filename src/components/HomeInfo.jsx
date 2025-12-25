import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";
import { useLanguage } from "../contexts/LanguageContext";
import { getTranslation } from "../translations";

const HomeInfo = ({ currentStage }) => {
  const { language } = useLanguage();
  
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        {getTranslation(language, "home.greeting")}{" "}
        <span className='font-semibold mx-2 text-white'>{getTranslation(language, "home.name")}</span>
        👋
        <br />
        {getTranslation(language, "home.role")}
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          {getTranslation(language, "home.stage2.text")} <br /> {getTranslation(language, "home.stage2.subtext")}
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          {getTranslation(language, "home.stage2.button")}
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          {getTranslation(language, "home.stage3.text")} <br /> {getTranslation(language, "home.stage3.subtext")}
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          {getTranslation(language, "home.stage3.button")}
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        {getTranslation(language, "home.stage4.text")} <br/> {getTranslation(language, "home.stage4.subtext")}
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        {getTranslation(language, "home.stage4.button")}
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;

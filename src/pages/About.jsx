import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";
import { useLanguage } from "../contexts/LanguageContext";
import { getTranslation, translations } from "../translations";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  const { language } = useLanguage();
  
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        {getTranslation(language, "about.title")}{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          John
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500 dark:text-slate-400'>
        <p>
          {getTranslation(language, "about.description")}
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>{getTranslation(language, "about.skills")}</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>{getTranslation(language, "about.experience")}</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500 dark:text-slate-400'>
          <p>
            {getTranslation(language, "about.experienceDescription")}
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => {
              const expKey = experience.company_name === "Fintegra" ? "backend" : "frontend";
              const translatedExp = translations[language]?.about?.experiences?.[expKey];
              
              return (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  iconStyle={{ background: experience.iconBg }}
                  icon={null}
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className='text-black dark:text-gray-100 text-xl font-poppins font-semibold'>
                      {translatedExp?.title || experience.title}
                    </h3>
                    <p
                      className='text-gray-600 dark:text-gray-300 font-medium text-base'
                      style={{ margin: 0 }}
                    >
                      {translatedExp?.company || experience.company_name} {translatedExp?.location ? `· ${translatedExp.location}` : experience.location ? `· ${experience.location}` : ''}
                    </p>
                  </div>

                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {(translatedExp?.points || experience.points).map((point, pointIndex) => (
                      <li
                        key={`experience-point-${pointIndex}`}
                        className='text-gray-600 dark:text-gray-300 font-normal pl-1 text-sm'
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200 dark:border-slate-700' />

      <CTA />
    </section>
  );
};

export default About;

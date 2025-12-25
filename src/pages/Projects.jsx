import { useState } from "react";
import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import { artHaus, cafert } from "../assets/images";
import { useLanguage } from "../contexts/LanguageContext";
import { getTranslation } from "../translations";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState("arthaus");
  const { language } = useLanguage();

  return (
    <section className='max-container'>
      <h1 className='head-text'>
        {getTranslation(language, "projects.title")}{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          {getTranslation(language, "projects.titleHighlight")}
        </span>
      </h1>

      <p className='text-slate-500 dark:text-slate-400 mt-2 leading-relaxed'>
        {getTranslation(language, "projects.description")}
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold text-gray-900 dark:text-gray-100'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500 dark:text-slate-400'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  {getTranslation(language, "projects.liveLink")}
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Toggle Section */}
      <div className='my-20'>
        <hr className='border-slate-200 mb-12' />
        
        {/* Toggle Switch */}
        <div className='flex justify-center mb-12'>
          <div className='inline-flex bg-gray-100 dark:bg-slate-800 rounded-lg p-1 gap-1'>
            <button
              onClick={() => setSelectedProject("arthaus")}
              className={`px-6 py-2 rounded-md font-semibold transition-all ${
                selectedProject === "arthaus"
                  ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-md"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              }`}
            >
              ArtHaus
            </button>
            <button
              onClick={() => setSelectedProject("cafert")}
              className={`px-6 py-2 rounded-md font-semibold transition-all ${
                selectedProject === "cafert"
                  ? "bg-white dark:bg-slate-700 text-orange-600 dark:text-orange-400 shadow-md"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              }`}
            >
              Cafert
            </button>
          </div>
        </div>

        {/* ArtHaus Detailed Section */}
        {selectedProject === "arthaus" && (
          <div className='flex flex-col lg:flex-row gap-12 items-start'>
            <div className='lg:w-1/2 w-full'>
              <img
                src={artHaus}
                alt='ArtHaus Platform'
                className='w-full h-auto rounded-xl shadow-lg object-cover'
              />
            </div>
            
            <div className='lg:w-1/2 w-full flex flex-col gap-6'>
              <div>
                <h2 className='text-4xl font-poppins font-semibold mb-4 text-gray-900 dark:text-gray-100'>
                  <span className='blue-gradient_text'>ArtHaus</span>
                </h2>
              
              <div className='text-slate-500 dark:text-slate-400 leading-relaxed space-y-4'>
                <p>
                  {getTranslation(language, "projects.arthaus.description1")}
                </p>
                <p>
                  {getTranslation(language, "projects.arthaus.description2")}
                </p>
                <p>
                  {getTranslation(language, "projects.arthaus.description3")}
                </p>
                <p>
                  {getTranslation(language, "projects.arthaus.description4")}
                </p>
                <p>
                  {getTranslation(language, "projects.arthaus.description5")}
                </p>
              </div>
            </div>

            <div className='mt-6'>
              <h3 className='text-2xl font-poppins font-semibold mb-6 text-gray-900 dark:text-gray-100'>{getTranslation(language, "projects.techStack")}</h3>
              
              <div className='space-y-6'>
                <div>
                  <h4 className='text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3'>{getTranslation(language, "projects.frontend")}</h4>
                  <ul className='flex flex-wrap gap-2'>
                    <li className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm'>Next.js</li>
                    <li className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm'>TypeScript</li>
                    <li className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm'>SCSS</li>
                    <li className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm'>Redux</li>
                    <li className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm'>Axios</li>
                  </ul>
                </div>

                <div>
                  <h4 className='text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3'>{getTranslation(language, "projects.backend")}</h4>
                  <ul className='flex flex-wrap gap-2'>
                    <li className='px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm'>Node.js</li>
                    <li className='px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm'>NestJS</li>
                    <li className='px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm'>GraphQL (Apollo Server)</li>
                    <li className='px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm'>REST APIs</li>
                    <li className='px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm'>MongoDB (Mongoose)</li>
                    <li className='px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm'>JWT Authentication</li>
                  </ul>
                </div>

                <div>
                  <h4 className='text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3'>{getTranslation(language, "projects.infrastructure")}</h4>
                  <ul className='flex flex-wrap gap-2'>
                    <li className='px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm'>Docker</li>
                    <li className='px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm'>Nginx</li>
                    <li className='px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm'>PM2</li>
                    <li className='px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm'>Linux (Ubuntu VPS)</li>
                    <li className='px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm'>CI/CD with GitHub Actions</li>
                    <li className='px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm'>SSL / HTTPS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}

        {/* Cafert Detailed Section */}
        {selectedProject === "cafert" && (
          <div className='flex flex-col lg:flex-row gap-12 items-start'>
            <div className='lg:w-1/2 w-full'>
              <img
                src={cafert}
                alt='Cafert Platform'
                className='w-full h-auto rounded-xl shadow-lg object-cover'
              />
            </div>
            
            <div className='lg:w-1/2 w-full flex flex-col gap-6'>
              <div>
                <h2 className='text-4xl font-poppins font-semibold mb-4 text-gray-900 dark:text-gray-100'>
                  <span className='blue-gradient_text'>Cafert</span>
                </h2>
              
              <div className='text-slate-500 dark:text-slate-400 leading-relaxed space-y-4'>
                <p>
                  {getTranslation(language, "projects.cafert.description1")}
                </p>
                <p>
                  {getTranslation(language, "projects.cafert.description2")}
                </p>
                <p>
                  {getTranslation(language, "projects.cafert.description3")}
                </p>
              </div>
            </div>

            <div className='mt-6'>
              <h3 className='text-2xl font-poppins font-semibold mb-6 text-gray-900 dark:text-gray-100'>{getTranslation(language, "projects.techStack")}</h3>
              
              <div className='space-y-6'>
                <div>
                  <h4 className='text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3'>Frontend</h4>
                  <ul className='flex flex-wrap gap-2'>
                    <li className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm'>React.js</li>
                    <li className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm'>TypeScript</li>
                    <li className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm'>SCSS</li>
                    <li className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm'>Redux</li>
                    <li className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm'>Axios</li>
                  </ul>
                </div>

                <div>
                  <h4 className='text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3'>{getTranslation(language, "projects.backend")}</h4>
                  <ul className='flex flex-wrap gap-2'>
                    <li className='px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm'>Node.js</li>
                    <li className='px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm'>Express.js</li>
                    <li className='px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm'>REST APIs</li>
                    <li className='px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm'>MongoDB (Mongoose)</li>
                    <li className='px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm'>JWT Authentication</li>
                  </ul>
                </div>

                <div>
                  <h4 className='text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3'>{getTranslation(language, "projects.infrastructure")}</h4>
                  <ul className='flex flex-wrap gap-2'>
                    <li className='px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm'>Linux (Ubuntu VPS)</li>
                    <li className='px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm'>PM2</li>
                    <li className='px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm'>GitHub Actions (CI/CD)</li>
                    <li className='px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm'>SSL / HTTPS Configuration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>

      <hr className='border-slate-200 dark:border-slate-700' />

      <CTA />
    </section>
  );
};

export default Projects;

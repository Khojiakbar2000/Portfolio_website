import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { getTranslation } from "../translations";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { language, changeLanguage } = useLanguage();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const langMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setShowLangMenu(false);
      }
    };

    if (showLangMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLangMenu]);

  return (
    <header className='header dark:bg-slate-900/80'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='w-18 h-18 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium items-center'>
        <NavLink 
          to='/about' 
          className={({ isActive }) => 
            isActive 
              ? "text-blue-600 dark:text-blue-400" 
              : "text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          }
        >
          {getTranslation(language, "nav.about")}
        </NavLink>
        <NavLink 
          to='/projects' 
          className={({ isActive }) => 
            isActive 
              ? "text-blue-600 dark:text-blue-400" 
              : "text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          }
        >
          {getTranslation(language, "nav.projects")}
        </NavLink>
        
        {/* Language Switcher */}
        <div className='relative ml-4' ref={langMenuRef}>
          <button
            onClick={() => setShowLangMenu(!showLangMenu)}
            className='p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center gap-1'
            aria-label='Change language'
          >
            <svg className='w-5 h-5 text-gray-700 dark:text-gray-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129' />
            </svg>
            <span className='text-sm font-medium text-gray-700 dark:text-gray-300 uppercase'>{language}</span>
          </button>
          
          {showLangMenu && (
            <div className='absolute right-0 mt-2 w-32 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700 overflow-hidden z-50'>
              <button
                onClick={() => {
                  changeLanguage("en");
                  setShowLangMenu(false);
                }}
                className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors ${
                  language === "en" ? "bg-blue-50 dark:bg-slate-700 text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"
                }`}
              >
                English
              </button>
              <button
                onClick={() => {
                  changeLanguage("ko");
                  setShowLangMenu(false);
                }}
                className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors ${
                  language === "ko" ? "bg-blue-50 dark:bg-slate-700 text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"
                }`}
              >
                한국어
              </button>
            </div>
          )}
        </div>
        
        <button
          onClick={toggleTheme}
          className='ml-2 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'
          aria-label='Toggle dark mode'
        >
          {isDarkMode ? (
            <svg className='w-5 h-5 text-yellow-500' fill='currentColor' viewBox='0 0 20 20'>
              <path fillRule='evenodd' d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z' clipRule='evenodd' />
            </svg>
          ) : (
            <svg className='w-5 h-5 text-gray-700 dark:text-gray-300' fill='currentColor' viewBox='0 0 20 20'>
              <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
            </svg>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;

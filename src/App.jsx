import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <main className='bg-slate-300/20 dark:bg-slate-900 transition-colors duration-300'>
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route
                path='/*'
                element={
                  <>
                    <Routes>
                      <Route path='/about' element={<About />} />
                      <Route path='/projects' element={<Projects />} />
                      <Route path='/contact' element={<Contact />} />
                    </Routes>
                    <Footer />
                  </>
                }
              />
            </Routes>
          </Router>
        </main>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;

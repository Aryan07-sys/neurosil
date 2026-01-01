import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Folder, Mail, Wrench, Menu, X } from 'lucide-react';

/* ===================== TYPES ===================== */
type NavItem = {
  path: string;
  label: string;
  icon: React.ElementType;
};

export default function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /* ===================== THEME STATE ===================== */
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem('theme')
      ? localStorage.getItem('theme') === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  /* ===================== APPLY THEME ===================== */
  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  /* ===================== CLOSE MOBILE MENU ON ROUTE CHANGE ===================== */
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  /* ===================== PREVENT SCROLL WHEN MENU IS OPEN ===================== */
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  /* ===================== NAV ITEMS ===================== */
  const navItems: NavItem[] = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/Profiles', label: 'Profiles', icon: Users },
    { path: '/Projects', label: 'Projects', icon: Folder },
    { path: '/Contact', label: 'Contact', icon: Mail },
    { path: '/Services', label: 'Services', icon: Wrench },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="
        fixed top-0 left-0 right-0 z-50
        bg-white/90 dark:bg-gray-900/90
        backdrop-blur-md
        border-b border-gray-200 dark:border-gray-700
      ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-2">
              <div className="
                w-9 h-9 rounded-lg
                bg-gray-900 dark:bg-white
                text-white dark:text-gray-900
                flex items-center justify-center font-bold
              ">
                N
              </div>
              <span className="font-semibold text-gray-800 dark:text-gray-100 text-sm sm:text-base">
                Neurosil AI Techno
              </span>
            </Link>

            {/* DESKTOP NAV + TOGGLE */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`
                      flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition
                      ${
                        isActive(item.path)
                          ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }
                    `}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}

              {/* DARK / LIGHT SLIDER - DESKTOP */}
              <button
                onClick={() => setDarkMode((prev) => !prev)}
                className="
                  relative w-12 h-6 ml-3
                  rounded-full
                  bg-gray-200 dark:bg-gray-600
                  border border-gray-400 dark:border-gray-500
                  shadow-inner
                  transition-colors duration-300
                "
              >
                <span
                  className={`
                    absolute top-1 left-1
                    w-4 h-4 rounded-full
                    bg-white dark:bg-gray-900
                    shadow-md
                    transition-transform duration-300
                    ${darkMode ? 'translate-x-6' : ''}
                  `}
                />
              </button>
            </div>

            {/* MOBILE MENU BUTTON + THEME TOGGLE */}
            <div className="flex md:hidden items-center gap-3">
              {/* DARK / LIGHT SLIDER - MOBILE */}
              <button
                onClick={() => setDarkMode((prev) => !prev)}
                className="
                  relative w-12 h-6
                  rounded-full
                  bg-gray-200 dark:bg-gray-600
                  border border-gray-400 dark:border-gray-500
                  shadow-inner
                  transition-colors duration-300
                "
              >
                <span
                  className={`
                    absolute top-1 left-1
                    w-4 h-4 rounded-full
                    bg-white dark:bg-gray-900
                    shadow-md
                    transition-transform duration-300
                    ${darkMode ? 'translate-x-6' : ''}
                  `}
                />
              </button>

              {/* HAMBURGER BUTTON */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="
                  p-2 rounded-lg
                  text-gray-700 dark:text-gray-300
                  hover:bg-gray-100 dark:hover:bg-gray-800
                  transition
                "
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="
            md:hidden
            absolute top-16 left-0 right-0
            bg-white dark:bg-gray-900
            border-b border-gray-200 dark:border-gray-700
            shadow-lg
            animate-fade-in
          ">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg text-base transition
                      ${
                        isActive(item.path)
                          ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }
                    `}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
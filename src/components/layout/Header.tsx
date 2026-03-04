import { useEffect } from 'react';

import { classNames } from '@/helpers/classNames';
import type { NavLink } from '@/types';

type HeaderProps = {
  navLinks: NavLink[];
  resumeUrl: string;
  activeSection: string;
  mobileOpen: boolean;
  onOpenMobile: () => void;
  onCloseMobile: () => void;
};

export const Header = ({
  navLinks,
  resumeUrl,
  activeSection,
  mobileOpen,
  onOpenMobile,
  onCloseMobile
}: HeaderProps) => {
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <nav id="navbar">
        <a href="#home" className="nav-logo" data-text="<AS/>">
          &lt;AS/&gt;
        </a>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={classNames(activeSection === link.id && 'active')}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={resumeUrl} className="btn-outline" target="_blank" rel="noreferrer">
          Resume
        </a>

        <button className="hamburger" id="ham" aria-label="Menu" onClick={onOpenMobile}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div
        className={`overlay ${mobileOpen ? 'open' : ''}`}
        id="overlay"
        onClick={onCloseMobile}
      ></div>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} id="mobileMenu">
        <ul className="mobile-menu-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="mlink" onClick={onCloseMobile}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={resumeUrl}
          className="btn-outline mobile-resume-link"
          target="_blank"
          rel="noreferrer"
          onClick={onCloseMobile}
        >
          Resume
        </a>
      </div>
    </>
  );
};

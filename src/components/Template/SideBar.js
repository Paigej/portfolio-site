import React from 'react';
import { Link } from 'react-router-dom';
import ThemeBtn from './ThemeButton';
import { useTheme } from '../../utils/useTheme';
import '../../static/css/main.scss'; // All of our styles

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

function SideBar() {
  const theme = useTheme();
  return (
    <section id="sidebar">
      <section id="intro">
        <Link to="/" className="logo">
          <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
        </Link>
        <header>
          <h2>Paige Johnson</h2>
          <p><a href="mailto:paige.l.johns@gmail.com">paige.l.johns@gmail.com</a></p>
        </header>
        <div className={theme}>
          <ThemeBtn />
          <p className="secret">
            I also hate burning my eyes out!
          </p>
        </div>
      </section>
      <section className="blurb">
        <h2>About</h2>
        <p>Hi, I&apos;m Paige. I like building things. I am a Technical UX Designer for
          343 Industries where I design, build, and interate on features for Halo Infinite.
        </p>
        <ul className="actions">
          <li>
            {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
          </li>
        </ul>
      </section>
      <section id="footer">
        <ContactIcons />
        <p className="copyright">&copy; Paige Johnson <Link to="/">paigejohnson.me</Link>.</p>
      </section>
    </section>
  );
}

export default SideBar;

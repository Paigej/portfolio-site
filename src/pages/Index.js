import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Paige Johnson's personal website"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <div style={{ display: 'inline-flex', gap: '10px' }}>
            <img className="image inlineIcon" src="/images/Caution.svg" alt="alt text placeholder" />
            <h3 className="icon">Under Construction</h3>
          </div>
        </div>
      </header>
      <p> Welcome to my website. It&apos;s still a bit rough around the edges, and I&apos;m still working on it, but if you don&apos;t mind that, feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">some fun stats about me. </Link> {' '}
      </p>
      <p> If you have feedback about this site, or find a typo and it really really bothers you,
        I&apos;d love to hear about it! You can find the source code <a href="https://github.com/Paigej/portfolio-site">here.</a>
      </p>
    </article>
  </Main>
);

export default Index;

import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../../data/portfolio/halo.md');

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

// these should match the titles in halo.md
const sections = [
  'UX/UI Production',
  'Accessibility Lead',
  'UX Design',
];

const Halo = () => (

  <Main
    title="Halo Infinite"
    description="343 Industries"
  >
    <article className="post markdown" id="halo">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/portfolio/halo">Halo Infinite</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>
  </Main>
);

export default Halo;

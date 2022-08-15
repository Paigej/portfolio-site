import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../../data/portfolio/pedal.md');

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

// these should match the titles in pedals.md
const sections = [
  'Introduction',
  'The Process',
  'The Results',
  'Reflection',
];

const Pedal = () => (

  <Main
    title="Pedal"
    description="3D Printed Assistive Pedals for Xbox Copilot"
  >
    <article className="post markdown" id="pedal">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/portfolio/pedal">3D Printed Assistive Pedals for Xbox Copilot</Link></h2>
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

export default Pedal;

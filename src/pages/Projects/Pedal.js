import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../../data/pedal.md');

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Pedal = () => (
  <Main
    title="Pedal"
    description="3D Printed Assistive Pedals for Xbox Copilot"
  >
    <article className="post markdown" id="Pedal">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects/pedal">3D Printed Assitive Pedals for Xbox Copilot</Link></h2>
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

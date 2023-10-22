import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Portfolio/Cell';
import data from '../data/portfolio';

const Portfolio = () => (
  <Main
    title="Portfolio"
    description="Learn about Paige Cuthbertson's projects."
  >
    <article className="post" id="portfolio">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/portfolio">Portfolio</Link></h2>
          <p>A selection of projects from work, school, and just for fun.</p>
        </div>
      </header>
      {data.map((portfolio) => (
        <Cell
          data={portfolio}
          key={portfolio.title}
        />
      ))}
    </article>
  </Main>
);

export default Portfolio;

import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import useDarkMode from 'use-dark-mode';

const Cell = ({ data }) => {
  const darkMode = useDarkMode();
  const imageToDisplay = darkMode.value && data.image_dark ? data.image_dark : data.image;
  const date = data.year_start ? `${dayjs(data.year_start).format('YYYY')}-${dayjs(data.year_end).format('YYYY')}` : dayjs(data.year_end).format('YYYY');

  return (
    <div className="cell-container">
      <article className="mini-post">
        <a href={data.link}>
          <header>
            <h3 href={data.link}>{data.title}</h3>
            <p className="published">{date}</p>
          </header>
        </a>
        <a href={data.link} className="image">
          <img src={`${process.env.PUBLIC_URL}${imageToDisplay}`} alt={data.title} />
        </a>
        <div className="description">
          <a href={data.link}>
            <p>{data.desc}</p>
          </a>
        </div>
      </article>
    </div>
  );
};

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    image_dark: PropTypes.string.isRequired,
    year_start: PropTypes.string.isRequired,
    year_end: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;

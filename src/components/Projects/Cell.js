import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { useTheme } from '../../utils/useTheme';

const Cell = ({ data }) => {
  const theme = useTheme();
  return (
    <div className="cell-container">
      <article className="mini-post">
        <a href={data.link}>
          <header>
            <h3 href={data.link}>{data.title}</h3>
            <p className="published">{dayjs(data.date).format('MMMM, YYYY')}</p>
          </header>
        </a>
        <a href={data.link} className="image">
          {/* TODO fall back to light theme if dark is not defined */}
          {theme === 'dark-mode' ? <img src={`${process.env.PUBLIC_URL}${data.image_dark}`} alt={data.title} /> : <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />}
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
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;

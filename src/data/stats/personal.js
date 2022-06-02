import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2017-09-01T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Years in the Games Industry',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Titles Shipped',
    value: 2,
    link: '/projects',
  },
  {
    key: 'location',
    label: 'Current Location',
    value: 'Greater Seattle Area',
  },
];

export default data;

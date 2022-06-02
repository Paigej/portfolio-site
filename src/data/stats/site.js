import dayjs from 'dayjs';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/paigej/personal-site
 */
const data = [
  {
    label: '2021-2022 Ski Day Count',
    value: 23,
    link: '',
  },
  {
    label: 'Average Cups of Coffee Per Day',
    value: 2,
    link: '',
  },
  {
    label: 'Portfolio Last updated on',
    key: 'pushed_at',
    link: 'https://github.com/paigej/personal-site/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },

];

export default data;

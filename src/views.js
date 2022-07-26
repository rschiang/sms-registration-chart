import dataNCC from '../data/ncc.json';

export default {
  ncc: {
    datasets: ['ns', 'nd', 'cl', 'mr', 'mg', 'mt', 'mw'],
    embolden: ['ns', 'nd'],
    start: [2021, 5, 19],
    end: [2022, 1, 22],
    maxCase: 1000,
    onEnter: (chart) => chart.data.datasets[1].data = dataNCC.DELETED.slice(0, 7),
    onLeave: (chart) => chart.data.datasets[1].data = dataNCC.DELETED,
  },
  cdc: {
    datasets: ['cd', 'cl', 'mr', 'mg', 'mw'],
    embolden: ['cd'],
    start: [2021, 10, 20],
    end: [2022, 3, 19],
    maxCase: 300,
  },
  compare: {
    datasets: ['ns', 'cd', 'mr', 'mg', 'mt', 'mw'],
    embolden: ['ns', 'cd'],
    start: [2021, 10, 20],
    end: [2022, 2, 19],
    maxCase: 1000,
    onEnter: (chart) => chart.data.datasets[0].borderColor = 'rgba(80,135,236,.7)',
    onLeave: (chart) => chart.data.datasets[0].borderColor = '#5087ec',
  },
  req: {
    datasets: ['cr', 'cl', 't'],
    embolden: ['cr'],
    start: [2021, 11, 16],
    end: [2022, 3, 25],
    maxCase: 1000,
  },
  newNorm: {
    datasets: ['cr', 'cl', 't'],
    embolden: ['cr'],
    start: [2022, 3, 20],
    end: [2022, 5, 26],
    maxCase: 120000,
  },
  default: {
    datasets: ['ns', 'nd', 'cd', 'cr', 'cl', 't', 'mr', 'mg', 'mt', 'mw'],
    embolden: [],
    start: [2021, 5, 19],
    end: [2022, 5, 26],
    maxCase: 2000,
  },
};

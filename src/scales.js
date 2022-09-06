import { enUS } from 'date-fns/locale';

const toAbbreviatedTick = (v) => {
  if (v >= 1000000)
    return `${v/1000000}M`;
  else if (v >= 1000)
    return `${v/1000}K`;
  else
    return v;
}

export default {
  x: {
    type: 'time',
    min: '2021-05-19',
    max: '2022-05-26',
    adapters: {
      date: {
        locale: enUS
      }
    },
    time: {
      tooltipFormat: 'PPPP',
      unit: 'month'
    },
    ticks: {
      align: 'start',
      maxTicksLimit: 15
    },
    grid: {
      display: false
    }
  },
  ySMS: {
    beginAtZero: true,
    display: 'auto',
    title: {
      display: true,
      text: 'No. of SMS sent'
    },
    ticks: {
      callback: toAbbreviatedTick
    }
  },
  yReq: {
    beginAtZero: true,
    display: 'auto',
    title: {
      display: true,
      text: 'No. of data requests'
    },
    ticks: {
      callback: toAbbreviatedTick
    }
  },
  yCase: {
    type: 'linear',
    beginAtZero: true,
    max: 2000,
    position: 'right',
    display: 'auto',
    title: {
      display: true,
      text: 'Local cases'
    },
    grid: {
      display: false
    }
  },
  yTest: {
    beginAtZero: true,
    suggestedMax: 240000,
    position: 'right',
    display: 'auto',
    title: {
      display: true,
      text: 'No. of PCR tests'
    },
    grid: {
      display: false
    },
    ticks: {
      callback: toAbbreviatedTick
    }
  },
  yMobility: {
    suggestedMax: 200,
    suggestedMin: -100,
    position: 'right',
    display: 'auto',
    title: {
      display: true,
      text: 'Mobility trend compared to pre-pandemic standards'
    },
    grid: {
      display: false
    },
    ticks: {
      callback: (v) => `${v}%`
    }
  }
};

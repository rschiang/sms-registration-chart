import { zhTW } from 'date-fns/locale';

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
        locale: zhTW
      }
    },
    time: {
      tooltipFormat: 'PPPP',
      unit: 'month'
    },
    ticks: {
      align: 'start',
      maxTicksLimit: 15
    }
  },
  ySMS: {
    beginAtZero: true,
    display: 'auto',
    title: {
      display: true,
      text: '簡訊數量（則，M = 百萬）'
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
      text: '調閱數（筆，K = 千）'
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
      text: '確診人數（人）'
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
      text: '送驗數（件，K = 千）'
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
      text: '人流與全球疫情爆發前相較之增減（%）'
    },
    grid: {
      display: false
    },
    ticks: {
      callback: (v) => `${v}%`
    }
  }
};

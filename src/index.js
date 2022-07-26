import Chart from 'chart.js/auto';
import annotationPlugin from 'chartjs-plugin-annotation';
import { CrosshairPlugin } from 'chartjs-plugin-crosshair';
import 'chartjs-adapter-date-fns';

Chart.register(CrosshairPlugin);
Chart.register(annotationPlugin);

import dataNCC from '../data/ncc.json';
import dataCDC from '../data/cdc.json';
import dataEnv from '../data/env.json';

const ctx = document.getElementById("chart");
const chart = new Chart(ctx, {
  data: {
    datasets: [{
      type: 'line',
      label: '簡訊數（從 NCC 傳送總數推估）',
      borderColor: '#5087ec',
      backgroundColor: '#5087ec',
      data: dataNCC.SENT,
      yAxisID: 'ySMS',
      stepped: 'after',
      parsing: {
        yAxisKey: 'ns'
      }
    }, {
      type: 'line',
      label: '簡訊數（從 NCC 刪除總數推估）',
      borderColor: '#a9c2ef',
      backgroundColor: '#a9c2ef',
      data: dataNCC.DELETED,
      yAxisID: 'ySMS',
      stepped: 'after',
      parsing: {
        yAxisKey: 'nd'
      }
    }, {
      type: 'line',
      label: '簡訊數（從 1922 刪除總數推估）',
      borderColor: '#5087ec',
      backgroundColor: '#5087ec',
      data: dataCDC,
      yAxisID: 'ySMS',
      parsing: {
        yAxisKey: 'cd'
      }
    }, {
      type: 'line',
      label: '調閱數',
      borderColor: '#356dd3',
      backgroundColor: '#356dd3',
      data: dataCDC,
      yAxisID: 'yReq',
      parsing: {
        yAxisKey: 'cr'
      }
    }, {
      type: 'line',
      label: '新增確診數（本土）',
      borderColor: '#d95040',
      backgroundColor: '#d95040',
      data: dataEnv,
      yAxisID: 'yCase',
      parsing: {
        yAxisKey: 'cl'
      }
    }, {
      type: 'line',
      label: '總送驗數',
      borderColor: '#f2bd42',
      backgroundColor: '#f2bd42',
      data: dataEnv,
      yAxisID: 'yTest',
      parsing: {
        yAxisKey: 't'
      }
    }, {
      type: 'line',
      label: '零售店與休閒設施',
      unit: '%',
      borderColor: '#f2bd42',
      borderDash: [1.25, 1.25],
      borderWidth: 1.25,
      data: dataEnv,
      yAxisID: 'yMobility',
      parsing: {
        yAxisKey: 'mr'
      }
    }, {
      type: 'line',
      label: '雜貨店和藥局',
      unit: '%',
      borderColor: '#58a45c',
      borderDash: [1.25, 1.25],
      borderWidth: 1.25,
      data: dataEnv,
      yAxisID: 'yMobility',
      parsing: {
        yAxisKey: 'mg'
      }
    }, {
      type: 'line',
      label: '大眾運輸',
      unit: '%',
      borderColor: '#ee752f',
      borderDash: [1.25, 1.25],
      borderWidth: 1.25,
      data: dataEnv,
      yAxisID: 'yMobility',
      parsing: {
        yAxisKey: 'mt'
      }
    }, {
      type: 'line',
      label: '工作場所',
      unit: '%',
      borderColor: '#68bbc4',
      borderDash: [1.25, 1.25],
      borderWidth: 1.25,
      data: dataEnv,
      yAxisID: 'yMobility',
      parsing: {
        yAxisKey: 'mw'
      }
    }]
  },
  options: {
    normalized: true,
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        borderJoinStyle: 'round'
      },
      point: {
        pointRadius: 0,
        pointHitRadius: 4,
        pointHoverBackgroundColor: 'rgba(0,0,0,.1)'
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      includeInvisible: true,
      intersect: false
    },
    layout: {
      padding: {
        left: 16, right: 8
      }
    },
    plugins: {
      title: {
        display: true,
        align: 'start',
        text: '1922 簡訊實聯制使用趨勢',
        color: '#757575',
        font: {
          size: 18,
          weight: '500',
          family: 'Roboto, system-ui, sans-serif'
        },
        padding: {
          top: 14,
          bottom: 4
        }
      },
      subtitle: {
        display: true,
        align: 'start',
        text: '資料來源：衛生福利部疾病管制署、國家通訊傳播委員會、Google 社區人流報告',
        color: '#999',
        font: {
          size: 14
        },
        padding: {
          bottom: 8
        }
      },
      legend: {
        labels: {
          boxWidth: 16,
          boxHeight: 0,
          padding: 8
        }
      },
      tooltip: {
        position: 'nearest',
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,.25)',
        borderWidth: 1,
        titleColor: '#808080',
        bodyColor: '#808080',
        boxWidth: 10,
        boxHeight: 10,
        boxPadding: 5,
        padding: 10,
        callbacks: {
          label: (context) => `${context.dataset.label || ''}: ${context.parsed.y !== null ? context.formattedValue : 'N/A'}${context.dataset.unit || ''}`
        }
      },
      crosshair: {
        button: document.getElementById('resetZoomButton'),
        line: {
          color: 'rgba(127,127,127,.2)'
        },
        snapping: {
          enabled: true
        },
        zoom: {
          enabled: false
        }
      }
    },
    scales: {
      x: {
        type: 'time',
        min: '2021-05-19',
        max: '2022-05-26',
        time: {
          tooltipFormat: 'PPP',
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
          callback: (v) => `${Math.round(v/1000000)}M`
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
          callback: (v) => v >= 1000000 ? `${v/1000000}M` : `${Math.round(v/1000)}K`
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
          callback: (v) => `${v/1000}K`
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
    }
  }
});

document.getElementById('nccViewButton').addEventListener('click', () => {
  for (let i = 0; i < chart.data.datasets.length; i++)
     chart.setDatasetVisibility(i, (i !== 2 && i !== 3 && i !== 5));
  chart.data.datasets[1].data = dataNCC.DELETED.slice(0, 7);
  chart.options.scales.x.min = new Date(2021, 4, 19);
  chart.options.scales.x.max = new Date(2022, 0, 22);
  chart.options.scales.yCase.max = 1000;
  chart.update();
});

document.getElementById('cdcViewButton').addEventListener('click', () => {
  for (let i = 0; i < chart.data.datasets.length; i++)
     chart.setDatasetVisibility(i, (i >= 2 && i !== 3 && i !== 5));
  chart.options.scales.x.min = new Date(2021, 9, 20);
  chart.options.scales.x.max = new Date(2022, 2, 19);
  chart.options.scales.yCase.max = 300;
  chart.update();
});

document.getElementById('sourceCompareButton').addEventListener('click', () => {
  for (let i = 0; i < chart.data.datasets.length; i++)
     chart.setDatasetVisibility(i, (i !== 1 && (i < 3 || i > 5)));
  chart.options.scales.x.min = new Date(2021, 9, 20);
  chart.options.scales.x.max = new Date(2022, 0, 22);
  chart.options.scales.yCase.max = 1000;
  chart.update();
});

document.getElementById('reqViewButton').addEventListener('click', () => {
  for (let i = 0; i < chart.data.datasets.length; i++)
     chart.setDatasetVisibility(i, (i >= 3 && i <= 5));
  chart.options.scales.x.min = new Date(2021, 10, 16);
  chart.options.scales.x.max = new Date(2022, 2, 25);
  chart.options.scales.yCase.max = 1000;
  chart.update();
});

document.getElementById('newNormViewButton').addEventListener('click', () => {
  for (let i = 0; i < chart.data.datasets.length; i++)
     chart.setDatasetVisibility(i, (i >= 3 && i <= 5));
  chart.options.scales.x.min = new Date(2022, 2, 20);
  chart.options.scales.x.max = new Date(2022, 4, 26);
  chart.options.scales.yCase.max = 120000;
  chart.update();
});

document.getElementById('showAllButton').addEventListener('click', () => {
  for (let i = 0; i < chart.data.datasets.length; i++)
     chart.setDatasetVisibility(i, true);
  chart.data.datasets[1].data = dataNCC.DELETED;
  chart.options.scales.x.min = new Date(2021, 4, 19);
  chart.options.scales.x.max = new Date(2022, 4, 26);
  chart.options.scales.yCase.max = 1000;
  chart.update();
});

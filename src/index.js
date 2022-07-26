import { Chart, LineElement, PointElement, LineController, LinearScale, TimeScale, Legend, Title, Tooltip, SubTitle } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import { CrosshairPlugin } from 'chartjs-plugin-crosshair';
import 'chartjs-adapter-date-fns';

Chart.register(LineElement, PointElement, LineController, LinearScale, TimeScale, Legend, Title, Tooltip, SubTitle);
Chart.register(CrosshairPlugin);
Chart.register(annotationPlugin);

import datasets from './datasets';
import scales from './scales';
import dataNCC from '../data/ncc.json';

const ctx = document.getElementById("chart");
const chart = new Chart(ctx, {
  data: {
    datasets: datasets
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
    scales: scales,
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

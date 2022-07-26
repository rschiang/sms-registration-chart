import { Chart, LineElement, PointElement, LineController, LinearScale, TimeScale, Legend, Title, Tooltip, SubTitle } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import { CrosshairPlugin } from 'chartjs-plugin-crosshair';
import 'chartjs-adapter-date-fns';

Chart.register(LineElement, PointElement, LineController, LinearScale, TimeScale, Legend, Title, Tooltip, SubTitle);
Chart.register(CrosshairPlugin);
Chart.register(annotationPlugin);

import datasets from './datasets';
import scales from './scales';
import views from './views';
import annotations from './annotations';

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
      },
      annotation: {
        annotations: [{
          type: 'line',
          scaleID: 'x',
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,.12)',
          value: '2022-03-07',
          label: {
            color: '#757575',
            backgroundColor: 'transparent',
            textStrokeColor: '#fff',
            textStrokeWidth: 3,
            font: { size: 12, weight: 'normal' },
            padding: 2,
            rotation: 270,
            content: '縮短入境、機組員與密切接觸者隔離天數',
            enabled: true
          }
        }],
      }
    },
    scales: scales,
  }
});

let currentViewId = 'default';
const transitToView = (viewId) => {
  const current = views[currentViewId];
  const view = views[viewId];

  if (current.onLeave) current.onLeave(chart);

  chart.options.scales.x.min = new Date(view.start[0], view.start[1] - 1, view.start[2]);
  chart.options.scales.x.max = new Date(view.end[0], view.end[1] - 1, view.end[2]);
  chart.options.scales.yCase.max = view.maxCase;

  for (let i = 0; i < chart.data.datasets.length; i++)
    chart.setDatasetVisibility(i, view.datasets.includes(chart.data.datasets[i].parsing.yAxisKey));

  currentViewId = viewId;
  if (view.onEnter) view.onEnter(chart);

  chart.update();
};

document.querySelectorAll('button[data-view-id]').forEach((i) =>
  i.addEventListener('click', (e) => transitToView(e.target.dataset.viewId)));


import dataEvents from '../data/events.json';

const annotations = dataEvents.map((el) => (
  {
    type: 'line',
    scaleID: 'x',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.12)',
    value: el.x,
    label: {
      color: '#757575',
      backgroundColor: 'transparent',
      textStrokeColor: '#fff',
      textStrokeWidth: 3,
      font: { size: 12, weight: 'normal' },
      padding: 2,
      rotation: 270,
      content: el.text,
      enabled: true
    }
  }));

export default annotations;

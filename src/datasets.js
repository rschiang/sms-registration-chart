import dataNCC from '../data/ncc.json';
import dataCDC from '../data/cdc.json';
import dataEnv from '../data/env.json';

export default [{
  type: 'line',
  label: 'SMS sent (via NCC)',
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
  label: 'SMS sent (via NCC)**',
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
  label: 'SMS sent (via 1922)',
  borderColor: '#5087ec',
  backgroundColor: '#5087ec',
  data: dataCDC,
  yAxisID: 'ySMS',
  parsing: {
    yAxisKey: 'cd'
  }
}, {
  type: 'line',
  label: 'Data requests',
  borderColor: '#356dd3',
  backgroundColor: '#356dd3',
  data: dataCDC,
  yAxisID: 'yReq',
  parsing: {
    yAxisKey: 'cr'
  }
}, {
  type: 'line',
  label: 'New local cases',
  borderColor: '#d95040',
  backgroundColor: '#d95040',
  data: dataEnv,
  yAxisID: 'yCase',
  parsing: {
    yAxisKey: 'cl'
  }
}, {
  type: 'line',
  label: 'PCR tests',
  borderColor: '#f2bd42',
  backgroundColor: '#f2bd42',
  data: dataEnv,
  yAxisID: 'yTest',
  parsing: {
    yAxisKey: 't'
  }
}, {
  type: 'line',
  label: 'Grocery & pharmacy',
  unit: '%',
  borderColor: '#bdbdbd',
  borderDash: [1.25, 1.25],
  borderWidth: 1.25,
  data: dataEnv,
  yAxisID: 'yMobility',
  parsing: {
    yAxisKey: 'mg'
  }
}, {
  type: 'line',
  label: 'Workplace',
  unit: '%',
  borderColor: '#68bbc4',
  borderDash: [1.25, 1.25],
  borderWidth: 1.25,
  data: dataEnv,
  yAxisID: 'yMobility',
  parsing: {
    yAxisKey: 'mw'
  }
}, {
  type: 'line',
  label: 'Retail & recreation',
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
  label: 'Public transport',
  unit: '%',
  borderColor: '#ee752f',
  borderDash: [1.25, 1.25],
  borderWidth: 1.25,
  data: dataEnv,
  yAxisID: 'yMobility',
  parsing: {
    yAxisKey: 'mt'
  }
}];

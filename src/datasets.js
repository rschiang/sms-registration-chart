import dataNCC from '../data/ncc.json';
import dataCDC from '../data/cdc.json';
import dataEnv from '../data/env.json';

export default [{
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
    }];

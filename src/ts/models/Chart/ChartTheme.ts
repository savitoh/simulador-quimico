export const ChartTheme = {
  color: ['#26B99A', '#34495E', '#BDC3C7', '#3498DB', '#9B59B6', '#8abb6f', '#759c6a', '#bfd3b7'],
  title: {
    textStyle: {
      fontWeight: 'normal',
      color: '#408829',
    }
  },
  dataRange: {
    color: ['#1f610a', '#97b58d']
  },
  toolbox: {
    color: ['#408829', '#408829', '#408829', '#408829']
  },
  tooltip: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    axisPointer: {
      type: 'line',
      lineStyle: {
        color: '#408829',
        type: 'dashed'
      },
      crossStyle: {
        color: '#408829'
      },
      shadowStyle: {
        color: 'rgba(200, 200, 200, 0.3)'
      }
    }
  },
  categoryAxis: {
    axisLine: {
      lineStyle: {
        color: '#333'
      },
      splitLine: {
        lineStyle: {
          color: ['#eee']
        }
      }
    }
  },
  valueAxis: {
    axisLine: {
      lineStyle: {
        color: '#408829'
      },
    },
    splitArea: {
      show: true,
      areaStyle: {
        color: ['rgba(250, 250, 250, 0.1)', 'rgba(200, 200, 200, 0.1)']
      }
    },
    splitLine: {
      lineStyle: {
        color: ['#eee']
      }
    }
  },
  grid: {
    borderWidth: 0
  }
}
import Component from '@glimmer/component';
import { D3TimeSeriesConfig, LineConfig } from 'ember-d3-modifiers';
import { inject as service } from '@ember/service';

export default class TimeSeriesCustomLayoutDemoComponent extends Component {
  d3Config = new D3TimeSeriesConfig({
    dataConfig: {
      'Temperature A': {
        className: 'series-a-custom-styling',
        chartTypes: [
          new LineConfig({ lineWidth: 3 })
        ]
      },
      'Temperature B': {
        className: 'series-b-custom-styling',
        chartTypes: [
          new LineConfig({ lineWidth: 5 })
        ]
      }
    },
    layout: {
      height: 400,
      width: 600,
      margin: { top: 30, right: 40, bottom: 110, left: 60 }
    },
    axis: {
      x: {
        tickCount: 8
      }
    },
    legend: {
      placement: 'bottom'
    }
  });

  @service fakeDataGenerator;
  get chartData() {
    return this.fakeDataGenerator.generateFakeTimeSeriesData({
      fakeSeriesIds: ['Temperature A', 'Temperature B'],
      numberOfHoursAgo: 24
    });
  }
}

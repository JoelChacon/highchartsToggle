Vue.use(VueHighcharts);


var options = {
    title: {
        text: 'Monthly Average Temperature',
        x: -20 //center
    },
    subtitle: {
        text: 'Source: WorldClimate.com',
        x: -20
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ]
    },
    yAxis: {
        title: {
            text: 'Temperature (°C)'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
    }]
    },
    tooltip: {
        valueSuffix: '°C'
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    },
    series: [{
        name: 'Tokyo',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
  }, {
        name: 'New York',
        data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
  }, {
        name: 'Berlin',
        data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
  }, {
        name: 'London',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
  }]
};

var vm = new Vue({
    el: '#app',
    data: {
        options: options,
        towns: ['Tokyo', 'New York', 'Berlin', 'London']
    },
    methods: {
        // updateSeries() {
        //     let chart = this.$refs.highcharts.chart;
        //     chart.series[0].setData([2, 0.7, 2.5, 8.1, 13.5, 15.0, 19.6, 20.9, 14, 7.0, 3.6, -1.0], true);
        // }
        toggleCountry(C) {
            let city = this.towns;
            let chart = this.$refs.highcharts.chart;

            for(let i = 0; i < city.length; i++) {
                if(city[i] === C) {
                    city.splice(i, 1)
                    for(let j = 0; j < chart.series.length; j++) {
                        if(C === chart.series[j].name) {
                            chart.series[j].hide();
                            return;
                        }
                    }
                } 
            }
            if(city.indexOf(C) === -1){
                city.push(C)
                for(let j = 0; j < chart.series.length; j++) {
                    if(C === chart.series[j].name) {
                        chart.series[j].show();
                        return;
                    }
                }
            }
        }
    }
});
const ages = [
    ['1920s', 835],
    ['1930s', 7691],
    ['1940s', 19294],
    ['1950s', 38017],
    ['1960s', 50814],
    ['1970s', 52456],    
    ['1980s', 55080],
    ['1990s', 71156],
    ['2000s', 114382],
    ['2010s', 8716]]

const lichess_data = [
    ['Jan 2013', 121332],
    ['Feb 2013', 123961],
    ['Mar 2013', 158635],
    ['April 2013', 157871],
    ['May 2013', 179550],
    ['June 2013', 224679],
    ['July 2013', 293459],
    ['Aug 2013', 325525],
    ['Sept 2013', 325098],
    ['Oct 2013', 411039],
    ['Nov 2013', 487012],
    ['Dec 2013', 578262],
    ['Jan 2014', 697600],
    ['Feb 2014', 692394],
    ['Mar 2014', 795173],
    ['April 2014', 810463],
    ['May 2014', 905374],
    ['June 2014', 961868],
    ['July 2014', 1048440],
    ['Aug 2014', 1013294],
    ['Sept 2014', 1000056],
    ['Oct 2014', 1111302],
    ['Nov 2014', 1209291],
    ['Dec 2014', 1350176],
    ['Jan 2015', 1497237],
    ['Feb 2015', 1495553],
    ['Mar 2015', 1742733],
    ['April 2015', 1785418],
    ['May 2015', 2137557],
    ['June 2015', 2324106],
    ['July 2015', 2455141],
    ['Aug 2015', 2621861],
    ['Sept 2015', 2844677],
    ['Oct 2015', 3400418],
    ['Nov 2015', 3595776],
    ['Dec 2015', 4161162],
    ['Jan 2016', 4770357],
    ['Feb 2016', 5015361],
    ['Mar 2016', 5801234],
    ['April 2016', 5922667],
    ['May 2016', 6225957],
    ['June 2016', 6136419],
    ['July 2016', 6275933],
    ['Aug 2016', 6483257],
    ['Sept 2016', 6813113],
    ['Oct 2016', 7599868],
    ['Nov 2016', 8021509],
    ['Dec 2016', 9433412],
    ['Jan 2017', 10680708],
    ['Feb 2017', 10194939],
    ['March 2017', 11346745],
    ['April 2017', 11348506],
    ['May 2017', 11693919],
    ['June 2017', 11512600],
    ['July 2017', 12080314],
    ['Aug 2017', 12458761],
    ['Sept 2017', 12564109],
    ['Oct 2017', 13703878],
    ['Nov 2017', 14306375],
    ['Dec 2017', 16232215],
    ['Jan 2018', 17945784],
    ['Feb 2018', 17383410],
    ['March 2018', 20036271],
    ['April 2018', 19881929],
    ['May 2018', 21442600],
    ['June 2018', 20273737],
    ['July 2018', 21070917],
    ['Aug 2018', 22635642],
    ['Sept 2018', 22971939],
    ['Oct 2018', 24784600],
    ['Nov 2018', 26136657],
    ['Dec 2018', 31179146],
    ['Jan 2019', 33886899],
    ['Feb 2019', 31023718],
    ['March 2019', 34869171],
    ['April 2019', 33565536],
    ['May 2019', 35236588],
    ['June 2019', 33935786],
    ['July 2019', 35728182],
    ['Aug 2019', 36745427],
    ['Sept 2019', 36996010],
    ['Oct 2019', 40440254],
    ['Nov 2019', 40357832],
    ['Dec 2019', 44055757],
    ['Jan 2020', 46800709],
    ['Feb 2020', 44004185],
    ['March 2020', 55544817],
    ['April 2020', 73224608],
    ['May 2020', 75628855]]

const winner_stats = [
    ['White', 0.5],
    ['Black', 0.45],
    ['Draw', 0.05]
]


Highcharts.setOptions({
	lang: {
  	thousandsSep: ','
  }
})

var myChart = Highcharts.chart('pc', {
    chart: {
        type: 'pie',
        backgroundColor: 'White'
    },
    title: {
        useHTML: true,
        text: '2012 Chess Playerbase Statistics (FIDE)',
        style: {
            'background-color': 'white',
            'font-family': 'Monteserrat, sans-serif',
            'text-align': 'center',
            'font-weight': 'bold',
            'font-size': '1.5em'
        }
    },
    subtitle: {
        text: '<a id="source" href="https://www.fide.com/images/stories/NEWS_2012/FIDE/120806_YouGovPressRelease.pdf">Source: YouGov Press Release</a>'
    },
    dataLabels: {
        enabled: true,
    },
    tooltip: {
        pointFormat: 'Playerbase: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>'
            }
        }
    },  
    series: [{
        data: [{
            name: 'Regular Player, Household Income > $120,000',
            y: 78,
            dataLabels: {
                rotation: 0
            }
        }, {
            name: 'Regular Player',
            y: 21,
            color: 'lightblue'
        }, {
            name: 'Other',
            y: 1,
            color: 'grey',
        }]
    }]
})

var myChart2 = Highcharts.chart('cc', {
    chart: {
        type: 'column',
        backgroundColor: 'White'
    },
    title: {
        useHTML: true,
        text: 'Unique Members By Decade of Birth, May 2020 (FIDE)',
        style: {
            'background-color': 'white',
            'font-family': 'Monteserrat, sans-serif',
            'text-align': 'center',
            'font-weight': 'bold',
            'font-size': '1.5em'
        }
    },
    subtitle: {
        text: '<a id="source" href="https://ratings.fide.com/download_lists.phtml">Source: FIDE Website</a>'
    },
    legend: {
        enabled: false
    },  
    dataLabels: {
        enabled: true,
    },
    tooltip: {
        pointFormat: 'Users: {point.y}'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    credits: {
        enabled: false
    },
    xAxis: {
        labels: {
            enabled: true,
            formatter: function() { return ages[this.value][0];},
        }
    },
    yAxis: {
        title: {
            enabled: false
        },
        labels: {
            formatter: function() { return Highcharts.numberFormat(this.value, 0, '', ',')}
        }
    },
    series: [{
        data: ages,
        name: 'Ages'
    }],
})


var myChart3 = Highcharts.chart('lichess_lc', {
    title: {
        useHTML: true,
        text: 'Games Played Per Month (Lichess)',
        style: {
            'background-color': 'white',
            'font-family': 'Monteserrat, sans-serif',
            'text-align': 'center',
            'font-weight': 'bold',
            'font-size': '1.5em'
        }
    },
    subtitle: {
        text: '<a id="source" href="https://database.lichess.org/">Source: Lichess Database</a>'
    },
    legend: {
        enabled: false
    },  
    dataLabels: {
        enabled: true,
    },
    tooltip: {
        pointFormat: 'Games: {point.y}'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    credits: {
        enabled: false
    },
    xAxis: {
        labels: {
            enabled: true,
            formatter: function() { return lichess_data[this.value][0];},
        }
    },
    yAxis: {
        title: {
            enabled: false
        },
        labels: {
            formatter: function() { return Highcharts.numberFormat(this.value, 0, '', ',')}
        }
    },
    series: [{
        data: lichess_data,
        name: 'Ages'
    }],
})

var myChart4 = Highcharts.chart('winners_pc', {
    chart: {
        type: 'pie',
        backgroundColor: 'White'
    },
    title: {
        useHTML: true,
        text: 'Winner Statistics (Lichess)',
        style: {
            'background-color': 'white',
            'font-family': 'Monteserrat, sans-serif',
            'text-align': 'center',
            'font-weight': 'bold',
            'font-size': '1.5em'
        }
    },
    subtitle: {
        text: '<a id="source" href="https://www.kaggle.com/datasnaek/chess">Source: Lichess Dataset (20,000 rows) </a>'
    },
    dataLabels: {
        enabled: true,
    },
    tooltip: {
        pointFormat: 'Winning: {point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>'
            }
        }
    },  
    series: [{
        data: winner_stats,
        colors: ['beige', 'black', 'grey']
    }]
})

var myChart5 = Highcharts.chart('lichess_cc', {
    chart: {
        type: 'column',
        backgroundColor: 'White'
    },
    title: {
        useHTML: true,
        text: '5 Most Common Starts (Lichess)',
        style: {
            'background-color': 'white',
            'font-family': 'Monteserrat, sans-serif',
            'text-align': 'center',
            'font-weight': 'bold',
            'font-size': '1.5em'
        }
    },
    subtitle: {
        text: '<a id="source" href="https://www.kaggle.com/datasnaek/chess">Source: Lichess Dataset (20,000 rows) </a>'
    },
    legend: {
        enabled: false
    },  
    dataLabels: {
        enabled: true,
    },
    tooltip: {
        pointFormat: '{point.y} <br> <p>Click me to see what I look like!</p>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    credits: {
        enabled: false
    },
    xAxis: {
        labels: {
            enabled: true,
        },
        categories: ['e4', 'd4', 'Nf3', 'c4', 'e3']
    },
    yAxis: {
        title: {
            enabled: false
        },
        labels: {
            formatter: function() { return Highcharts.numberFormat(this.value, 0, '', ',')}
        }
    },
    plotOptions: {
        series: {
            cursor: 'pointer',
            point: {
                events: {
                    click: function () {
                        window.open(this.options.url, '_blank');
                    }
                }
            }
        }
    },
    series: [{
        data: [{
            name: 'e4',
            y: 12586,
            url: "https://github.com/gatran/gatran.github.io/blob/master/images/e4.PNG"
        }, {
            name: 'd4',
            y: 4519,
            url: 'https://github.com/gatran/gatran.github.io/blob/master/images/d4.PNG'
        }, {
            name: 'Nf3',
            y: 725,
            url: 'https://github.com/gatran/gatran.github.io/blob/master/images/Nf3.PNG'
        }, {
            name: 'c4',
            y: 716,
            url: 'https://github.com/gatran/gatran.github.io/blob/master/images/c4.PNG'
        }, {
            name: 'e3',
            y: 416,
            url: 'https://github.com/gatran/gatran.github.io/blob/master/images/e3.PNG'
        }]
    }]
})

var myChart6 = Highcharts.chart('twitch_metrics', {
    chart: {
        type: 'area',
        backgroundColor: 'White'
    },
    title: {
        useHTML: true,
        text: 'Chess Stream Viewer Statistics (Twitch)',
        style: {
            'background-color': 'white',
            'font-family': 'Monteserrat, sans-serif',
            'text-align': 'center',
            'font-weight': 'bold',
            'font-size': '1.5em'
        }
    },
    subtitle: {
        text: '<a id="source" href="https://twitchtracker.com/games/743">Source: Twitchtracker </a>'
    },
    legend: {
        align: 'center',
        floating: false,
        verticalAlign: 'top'
    },  
    dataLabels: {
        enabled: true,
    },
    credits: {
        enabled: false
    },
    xAxis: {
        categories: ['3 Years Ago', '2 Years Ago', '1 Year Ago', 'Current'],
        labels: {
            enabled: true,
        },
    },
    yAxis: {
        title: {
            enabled: false,
        },
        labels: {
            formatter: function () {
                return this.value;
            }
        }
    },
    series: [{
        name: 'Peak Viewers',
        data: [1542, 6382, 21781, 129422]
    }, {
        name: 'Average Viewers',
        data: [170, 577, 2497, 20931]
    }]
})

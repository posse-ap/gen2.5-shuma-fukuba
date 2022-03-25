let target = document.getElementById('languages-target').getContext("2d")
let content = new Chart(target, {
    type: 'doughnut',
    data: {
        datasets: [{
            backgroundColor: [
                'rgb(3, 69, 236)',
                'rgb(15, 113, 189)',
                'rgb(32, 189, 222)',
                'rgb(60, 206, 254)',
                'rgb(178, 158, 243)',
                'rgb(109, 70, 236)',
                'rgb(74, 23, 239)',
                'rgb(49, 5, 192)',
            ],
            data: [42, 18, 10, 6, 6, 6, 6, 6],
        }],
    },
    options: {
        responsive: true,
        plugins: {
            datalabels: {
                color: '#fff',
                formatter: (value, target) => {
                    if (value < 10) return ''
                    return value + '%';
                },
            }
        }
    },

})


target = document.getElementById('contents-target');
content = new Chart(target, {
    type: 'doughnut',
    data: {
        datasets: [{
            backgroundColor: [
                'rgb(3, 69, 236)',
                'rgb(15, 113, 189)',
                'rgb(32, 189, 222)',
            ],
            data: [42, 33, 25],
        }],
    },
    options: {
        responsive: true,
        plugins: {
            datalabels: {
                color: '#fff',
                formatter: (value, target) => {
                    return value + '%';
                },
            }
        }
    },
});

const samples = [...Array(30)].map((_, i) => (i + 1) % 3 + 1)
const startDate = new Date('2022-3-1')
const endDate = new Date('2022-3-31')
const dateList = new Array()

for (let d = startDate; d < endDate; d.setDate(d.getDate() + 1)) {
    var formatDate = Number(d.getDate())
    if (formatDate % 2 !== 0) {
        formatDate = ''
    }
    dateList.push(formatDate)
}

target = document.getElementById('bar-graph')
let ctx = target.getContext('2d')
let gradient = ctx.createLinearGradient(0, 0, 0, 1000)
gradient.addColorStop(0, 'rgb(59, 204, 254)')
gradient.addColorStop(1, 'rgb(17, 117, 191)')

content = new Chart(target, {
    type: 'bar',
    data: {
        labels: dateList,
        datasets: [{
            data: samples,
            backgroundColor: gradient,
            borderRadious: '99999px',
            fill: false,
        }],
    },

    options: {
        plugins: {
            datalabels: {
                display: false,
            },
        },
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    fontSize: 16
                },
                gridLines: {
                    display: false,
                },
                ticks: {
                    display: true,
                    suggestedMin: 0,
                    suggestedMax: 8,
                    stepSize: 2,
                    callback: (tick) => {
                        return tick.toString() + 'h'
                    }
                },
            }],
            xAxes: [{
                display: true,
                barPercentage: 0.5,
                categoryPercentage: 0.5,
                gridLines: {
                    display: false,
                },
                ticks: {
                    display: true,
                    min: 1,
                    max: 31,
                    stepSize: 2,
                }
            }],
        },
    },

})

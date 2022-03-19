let target = document.getElementById('languages-target');
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
    },
});

const samples = [...Array(30)].map((_, i) => i + 1)
const startDate = new Date('2022-3-1')
const endDate = new Date('2022-3-31')
const dateList = new Array()

for (let d = startDate; d < endDate; d.setDate(d.getDate()+1)) {
    var formatDate = d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate()
    dateList.push(formatDate)
}

const datas = []
for (let i = 0; i < samples.length; i++) {
    let data = { x: dateList[i], y: samples[i]}
    datas.push(data)
}

target = document.getElementById('bar-graph')
let ctx = target.getContext('2d')
let gradient = ctx.createLinearGradient(0, 0, 0, 1000)
gradient.addColorStop(0, 'rgb(59, 204, 254)')
gradient.addColorStop(1, 'rgb(17, 117, 191)')

content = new Chart(target, {
    type: 'bar',
    data: {
        datasets: [{
            data: datas,
            backgroundColor: gradient,
            borderRadious: '99999px',
            fill: false,
        }],
    },

    options: {
        plugins: {
            legend: {
                display: false,
            },
        },
    },
    scales: {                          //軸設定
        yAxes: [{                      //y軸設定
            display: true,             //表示設定
            scaleLabel: {              //軸ラベル設定
               display: true,          //表示設定
               labelString: '縦軸ラベル',  //ラベル
               fontSize: 18               //フォントサイズ
            },
            ticks: {                      //最大値最小値設定
                min: 0,                   //最小値
                max: 30,                  //最大値
                fontSize: 18,             //フォントサイズ
                stepSize: 5               //軸間隔
            },
        }],
        xAxes: [{                         //x軸設定
            display: true,                //表示設定
            barPercentage: 0.4,           //棒グラフ幅
            categoryPercentage: 0.4,      //棒グラフ幅
            scaleLabel: {                 //軸ラベル設定
               display: true,             //表示設定
               labelString: '横軸ラベル',  //ラベル
               fontSize: 18               //フォントサイズ
            },
            ticks: {
                fontSize: 18             //フォントサイズ
            },
        }],
    },
})

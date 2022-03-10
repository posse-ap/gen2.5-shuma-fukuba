window.onload = () => {
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

}

// (function () {
//     function drawChart() {
//         const languages = [
//             { language: 'JavaScript', num: 42 },
//             { language: 'CSS', num: 18 },
//             { language: 'PHP', num: 10 },
//             { language: 'HTML', num: 6 },
//             { language: 'Laravel', num: 6 },
//             { language: 'SQL', num: 6 },
//             { language: 'SHELL', num: 6 },
//             { language: '情報システム基礎知識', num: 6 }
//         ]
//         const learningContents = [
//             { contents: 'ドットインストール', num: 42 },
//             { contents: 'N予備校', num: 33 },
//             { contents: 'POSSE課題', num: 25 }
//         ]
//         var data = new google.visualization.DataTable()
//         data.addColumn('string', 'language')
//         data.addColumn('number', 'percentage')
//         languages.forEach((element) => {
//             data.addRow([element.language, element.num])
//         })
//         var options = {
//             width: 300,
//             height: 300
//         }

//         var chart = new google.visualization.PieChart(document.getElementById('languages-target'))
//         chart.draw(data, options)
//     }

//     google.charts.load('current', { packages: ['corechart'] })
//     google.charts.setOnLoadCallback(drawChart)


// })()

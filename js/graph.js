const languageData = [42, 18, 10, 6, 6, 6, 6, 6]
const contentData = [42, 33, 25]

const drawcircle = (id, data) => {

}

window.onload = () => {
    let target = document.getElementById('languages-target')
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
                data: languageData,
            }],
        },
        options: {
            responsive: true,
        },
    })

    target = document.getElementById('contents-target')
    content = new Chart(target, {
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
                data: contentData,
            }],
        },
        options: {
            responsive: true,
        },
    })
}

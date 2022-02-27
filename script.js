questions = new Array()
questions.push(['たかなわ', 'たかわ', 'こうわ'])
questions.push(['かめいど', 'かめと', 'かめど'])
questions.push(['こうじまち', 'おかとまち', 'かゆまち'])

const check = (question_id, selection_id, valid_id) => {
    // クリック無効化
    console.log(`.question_${String(question_id)}`)
    let selections = document.getElementsByClassName(`question_${String(question_id)}`)
    for (var i = 0; i < selections.length; i++) {
        selections[i].classList.add('disabled')
    }
    // おされた選択肢を赤に上書き
    let selected = document.getElementById(`${String(question_id) + "-" + String(selection_id)}`)
    selected.classList.add('incorrect')

    let answerbox = document.getElementById(`answerbox_${String(question_id)}`)
    let answertext = document.getElementById(`answertext_${String(question_id)}`)
    // 正解だったら青に上書き
    if (selection_id == valid_id) {
        selected.classList.remove('incorrect')
        selected.classList.add('correct')
        answertext.classList.add('quiz-result-successed')
        answertext.innerHTML = '正解!'
    } else {
        answertext.classList.add('quiz-result-failed')
        answertext.innerHTML = '不正解!'
    }
    answerbox.style.display = 'block'
}

// 問題のHTMLを作る
const createQuestion = (question_id, selections, valid_id) => {
    let contents = `

    <div class="quiz">
            <h1>${question_id}. この地名はなんて読む?</h1>
            <img src="./img/quizes/${question_id}.png">
            <div class="choices">
    `
    selections.forEach((selection, index) => {
        contents += `
        <div class="choice question_${String(question_id)}" id="${String(question_id) + "-" + String(index+1)}" onclick="check('${String(question_id)}', '${String(index + 1)}', '${valid_id}')">${selection}</div>`
    });

    contents += `
            </div>
            <div class="quiz-result" id="answerbox_${String(question_id)}">
                <div class="quiz-result-title" id="answertext_${String(question_id)}"></div>
                <div class="quiz-result-description">
                    正解は「${selections[valid_id - 1]}」です!                </div>
            </div>
        </div>`
    document.getElementById('main').insertAdjacentHTML('beforeend', contents)
}


// すべてのHTMLを作る
const createHTML = () => {
    questions.forEach((question, index) => {
        let answer = question[0]
        // 選択肢をシャッフル
        for (var i = question.length - 1; i > 0; i--) {
            var r = Math.floor(Math.random() * (i + 1))
            var temp = question[i]
            question[i] = question[r]
            question[r] = temp
        }
        createQuestion(index + 1, question, question.indexOf(answer) + 1)
    });
}

window.onload = createHTML()

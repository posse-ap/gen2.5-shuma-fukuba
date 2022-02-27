questions = new Array()
questions.push(['たかなわ', 'たかわ', 'こうわ'])
questions.push(['かめいど', 'かめと', 'かめど'])
questions.push(['こうじまち', 'おかとまち', 'かゆまち'])

const crick = (question_id, selection_id, valid_id) => {
    // クリック無効化

    // おされた選択肢を赤に上書き

    // 正解だったら青に上書き
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
        <div class="choice" id="${String(question_id) + "-" + String(index+1)}" onclick="check("${String(question_id)}", "${String(index + 1)}", "${valid_id}")">${selection}</div>`
    });

    contents += `
            </div>
            <div class="quiz-result">
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
        for (let i = question.length - 1; i > 0; i--) {
            let r = Math.floor(Math.random() * (i + 1))
            let temp = question[i]
            question[i] = question[r]
            question[r] = temp
        }
        createQuestion(index + 1, question, question.indexOf(answer))
    });
}

window.onload = createHTML()

const languages = ['JavaScript', 'CSS', 'PHP', 'HTML', 'Laravel', 'SQL', 'SHELL', '情報システム基礎知識']
const learningContents = ['ドットインストール', 'N予備校', 'POSSE課題']

const LANGUAGES_TAGS_TARGET = 'languages-tags'
const CONTENTS_TAGS_TARGET = 'contents-tags'

const createChartTags = (id, contents) => {
    const target = document.getElementById(id)
    let text = ``
    contents.forEach((content, index) => {
        text += ` <span><span class="tag color-${index + 1}">${content}</span></span>`
    })
    target.insertAdjacentHTML('beforeend', text)
}

const drawFormCheckbox = (id, contents, name) => {
    let target = document.getElementById(id)
    contents.forEach((element, index) => {
        let text = `
        <input type="checkbox" name="${name}[]" id="${name}-${index}" class="form-checkbox">
        <label for="${name}-${index}" class="modal-form-input-mini label-text">
            <span class="check"></span>
            <span>${element}</span>
        </label>
        `
        target.insertAdjacentHTML('beforeend', text)
    });
}

window.onload = () => {
    createChartTags(LANGUAGES_TAGS_TARGET, languages)
    createChartTags(CONTENTS_TAGS_TARGET, learningContents)
    drawFormCheckbox('modal-form-contents', learningContents, 'contents')
    drawFormCheckbox('modal-form-languages', languages, 'languages')
}


const loading = async() => {
    await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())
    .then(json => console.log(json))
}

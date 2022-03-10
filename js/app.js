const languages = ['JavaScript', 'CSS', 'PHP', 'HTML', 'Laravel', 'SQL', 'SHELL', '情報システム基礎知識']
const learningContents = ['ドットインストール', 'N予備校', 'POSSE課題']

const LANGUAGES_TAGS_TARGET = 'languages-tags'
const CONTENTS_TAGS_TARGET = 'contents-tags'

const createChartTags = (id, contents) => {
    const target = document.getElementById(id)
    let text = ``
    contents.forEach((content, index) => {
        text += ` <li><span class="tag color-${index + 1}">${content}</span></li>`
    })
    target.insertAdjacentHTML('beforeend', text)
}

const openModal = () => {
    let modal = document.getElementById('my-modal')
    modal.style.display = 'block'
}

const closeModal = () => {
    let modal = document.getElementById('my-modal')
    modal.style.display = 'none'
}


window.onload = () => {
    // createChartTags(LANGUAGES_TAGS_TARGET, languages)
    // createChartTags(CONTENTS_TAGS_TARGET, learningContents)

}

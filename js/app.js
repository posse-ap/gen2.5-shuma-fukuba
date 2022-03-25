

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


const submit = async () => {
    const toggle = (fadeOut, fadeIn) => {
        fadeOut.style.display = 'none'
        fadeIn.style.display = 'flex'
    }
    let loader = document.getElementById('loader')
    let awesome = document.getElementById('awesome')
    let form = document.getElementById('form-container')
    const toggleLoader = () => {
        loader.style.display = 'none'
        awesome.style.display = 'flex'
    }
    const closeAwesome = () => {
        awesome.style.display = 'none'
        form.style.display = 'block'
    }
    const shareTweet = () => {
        let share = document.getElementById("share")
        if (share.checked) {
            let baseUrl = 'https://twitter.com/intent/tweet'
            baseUrl += '?text=' + encodeURIComponent(document.getElementById('twitter-comment').value)
            window.open(baseUrl)
        }
    }
    toggle(form, loader)
    await myPromise(toggleLoader, 3000)
    await myPromise(shareTweet, 0)
    await myPromise(closeAwesome, 3000)
}

const myPromise = (func, time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(func())
        }, time)
    })
}

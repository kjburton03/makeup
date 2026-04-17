export const renderEyeToDOM = (eyeeHtml) => {
    const eyeList = document.getElementById('eyeList')

    if (eyeList) {
        eyeList.innerHTML = eyeeHtml;
    } else {
        console.error('could not find element with id "eye list"')
    }
}
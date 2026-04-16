export const renderFaceToDOM = (faceeHTML) => {
    const faceList = document.getElementById('faceList')

    if (faceList) {
        faceList.innerHTML = faceeHTML;
    } else {
        console.error('could not find element with id "face list" ')
    }
    };

export const renderFriendToDOM = (frandHTML) => {
    const friendList = document.getElementById('friendList')

    if (friendList) {
        friendList.innerHTML = frandHTML;
    } else {
        console.error('could not find element with id "friendList" ')
    }
}
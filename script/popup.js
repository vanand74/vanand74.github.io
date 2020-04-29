function init() {
    var popup = document.getElementById("popup");
}

function showPopup(content) {
    popup.style.display = 'block';
    document.getElementById('popup-content').innerHTML = content;
}
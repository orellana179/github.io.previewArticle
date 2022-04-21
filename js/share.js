var btn = document.getElementById('btn-share');
var share = document.getElementById('active-share');
var btnClose = document.getElementById('share-close');

btn.addEventListener('click', mostraShare);
btnClose.addEventListener('click', closeShare);

function mostraShare() {
    share.classList.add('active');
}
function closeShare() {
    share.classList.remove('active');
}
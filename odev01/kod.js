var hak = 2;
var randomPos = Math.floor(Math.random() * 3) + 1;
var cards = new Array();
var cards = [
    'cat.jpg',
    'dog.jpg'
];
var tagsToClick = new Array();
var tagsToClick = [
    'img0',
    'img1',
    'img2'
];

function Basildi(id) {
    if (randomPos == 1) {
        if (id == 'img0') {
            document.getElementById(id).src = cards[0];
        }
        if (id == 'img1') {
            document.getElementById(id).src = cards[1];
        }
        if (id == 'img2') {
            document.getElementById(id).src = cards[1];
        }
    }
    if (randomPos == 2) {
        if (id == 'img0') {
            document.getElementById(id).src = cards[1];
        }
        if (id == 'img1') {
            document.getElementById(id).src = cards[0];
        }
        if (id == 'img2') {
            document.getElementById(id).src = cards[1];
        }
    }
    if (randomPos == 3) {
        if (id == 'img0') {
            document.getElementById(id).src = cards[1];
        }
        if (id == 'img1') {
            document.getElementById(id).src = cards[1];
        }
        if (id == 'img2') {
            document.getElementById(id).src = cards[0];
        }
    }
    if (hak == 0) {
        $('#alanId').css('display', 'none');
        $('#yenildiId').css('display', 'block');
        var imgs = document.getElementsByTagName('img');
        for (var i = 0; i < imgs.length; i++)
            imgs[i].onclick = null;
    }
    var cat = document.getElementById(id);
    if ((cat.src.indexOf('cat') != -1) & (hak > 0)) {
        $('#alanId').css('display', 'none');
        $('#kazandiId').css('display', 'block');
        tagsToClick = tagsToClick.filter(item => item !== id)
        for (var i = 0; i < tagsToClick.length; i++) {
            document.getElementById(tagsToClick[i]).src = cards[1];
        }
        var imgs = document.getElementsByTagName('img');
        for (var i = 0; i < imgs.length; i++)
            imgs[i].onclick = null;
    }
    hak--;
};
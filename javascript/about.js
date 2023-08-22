
//FAQ SECTION
function toggleAnswer(id) {
    var answerElement = document.getElementById('answer' + id);
    answerElement.classList.toggle('visible');
}

AOS.init();
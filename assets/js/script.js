// Questions dictionary
var questions = [
    {
        q: '1. What is JavaScript?',
        a1: 'a) JavaScript is a scripting language used to make the website interactive',
        a2: 'b) JavaScript is an assembly language used to make the website interactive',
        a3: 'c) JavaScript is a compiled language used to make the website interactive',
        a4: 'd) None of the mentioned  ',
        ca: 'a1'
    },
    {
        q: '2. Which of the following is correct about JavaScript?',
        a1: 'a) JavaScript is an Object-Based language',
        a2: 'b) JavaScript is Assembly-language',
        a3: 'c) JavaScript is an Object-Oriented language ',
        a4: 'd) JavaScript is a High-level language',
        ca: 'a1'
    },
    {
        q: '3. Among the given statements, which statement defines closures in JavaScript? ',
        a1: 'a) JavaScript is a function that is enclosed with references to its inner function scope',
        a2: 'b) JavaScript is a function that is enclosed with references to its lexical environment',
        a3: 'c) JavaScript is a function that is enclosed with the object to its inner function scope',
        a4: 'd) None of the mentioned now',
        ca: 'a2'
    },
    {
        q: '4. Arrays in JavaScript are defined by which of the following statements?',
        a1: 'a) It is an ordered list of values',
        a2: 'b) It is an ordered list of objects',
        a3: 'c) It is an ordered list of string',
        a4: 'd) It is an ordered list of functions',
        ca: 'a2'
    }
]
var q = document.getElementById("question")
var a1 = document.getElementById('a1')
var a2 = document.getElementById('a2')
var a3 = document.getElementById('a3')
var a4 = document.getElementById('a4')
var qnum = 0;
var ca = null
var startpage = document.getElementById('startpage')
var startbtn = document.getElementById('startbtn')
var highscorebtn = document.getElementById('highscorebtn')
var quiz = document.getElementById('quiz')
var gameover = document.getElementById('gameover')
var highscore = document.getElementById('highscore')
var score = ''
var home = document.getElementById('home')
// getting timer element from html
var timer = document.getElementById('timer')

// timer
function timerStart(timerObject) {
    if (timerObject.textContent > 0) {
        timerObject.textContent = timerObject.textContent - 1;
    } else {
        endGame()
    }
}

// checks if answer is correct, if it is wrong takes time off the timer
function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer != correctAnswer) {
        timer.textContent = timer.textContent - 5
        if (timer.textContent < -1) {
            endGame()
        }
    }

    if (qnum < questions.length) {
        loadQuestion(qnum)
    } else {
        endGame()

    }
}
// after a question is answered it loads the next question 
function loadQuestion(questionNum) {

    q.textContent = questions[questionNum]['q'];

    a1.textContent = questions[questionNum]['a1']
    a2.textContent = questions[questionNum]['a2']
    a3.textContent = questions[questionNum]['a3']
    a4.textContent = questions[questionNum]['a4']
    qnum = qnum + 1
    ca = questions[questionNum]['ca']
}
var myTimerid;
function startQuiz() {
    // remove class of hidden from quiz section
    quiz.className = ''
    // set class of start page to hidden
    startpage.className = 'hidden'
    timer.textContent = '60'
    qnum = 0
    // start timer
    myTimerid = setInterval(function () { timerStart(timer) }, 1000)
    // load the first question
    loadQuestion(0)


}

function endGame() {
    clearInterval(myTimerid)

    // set quiz class to hidden 
    quiz.className = 'hidden'
    // set gameover to visible
    gameover.className = ''
    // save timer as game score
    score = timer.textContent
    console.log(score)
}

let highscores = JSON.parse(localStorage.getItem('highscores'))
if (highscores === null) {
    highscores = []
}

function saveScore() {
    var username = document.getElementById('username').value

    // save score to local storage with name
    highscores.push({
        nameVal: username,
        scoreVal: score
    })

    localStorage.setItem('highscores', JSON.stringify(highscores))
    // show highscore page
    gameover.className = 'hidden'
    highscore.className = ''
    console.log(highscores)
    printScores()
}
// var highscoreListItem = highscores[i]["nameVal"] + ": " + highscores[i]["scoreVal"]
var highscoreList = document.getElementById('highscorelist')
function printScores() {
    highscoreList.innerHTML = ''
    for (i = 0; i < highscores.length; i++) {
        var highscoreListItem = highscores[i]["nameVal"] + ": " + highscores[i]["scoreVal"]
        let li = document.createElement('li')
        li.innerText = highscoreListItem
        highscoreList.appendChild(li)
    };



}

savebtn.addEventListener('click', function () {
    saveScore()

    username.value = ''

})

home.addEventListener('click', function () {
    highscore.className = 'hidden'
    startpage.className = ''

})

highscorebtn.addEventListener('click', function () {
    printScores()
    startpage.className = 'hidden'
    highscore.className = ''
})

startbtn.addEventListener('click', function () {
    startQuiz()
})

a1.addEventListener('click', function () {
    checkAnswer('a1', ca)
})
a2.addEventListener('click', function () {
    checkAnswer('a2', ca)
})
a3.addEventListener('click', function () {
    checkAnswer('a3', ca)
})
a4.addEventListener('click', function () {
    checkAnswer('a4', ca)
})





// highscores = [{
//     score: '50',
//     name: 'jim'
// }, score, score]








// event lisetenter for highscore button
// funtion to show highscores on page
// new questions
//
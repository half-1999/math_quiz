let timer = document.querySelector('.timer')
let score = document.querySelector('.score')
let ques = document.querySelector('.ques')
let box = document.querySelectorAll('.box')
let main = document.querySelector('.main')
let testButton = document.querySelector('.test')

let increment
var timerId
let num1 = 0
let num2 = 0
let plus
var sum

// const toggleButton = document.getElementById('toggle-button');
// const toggleElement = document.getElementById('toggle-element');

// toggleButton.addEventListener('click', () => {
//   if (toggleElement.style.display === 'none') {
//     toggleElement.style.display = 'block';
//   } else {
//     toggleElement.style.display = 'none';
//   }
// });





timer.addEventListener('click' , () => {
    let dialer = document.querySelector('.main')
    let seconds = 60 
    let result = 0
    let input

    function stopQues() {
        clearTimeout(setTimeout)
        sum() 

       
        
    }
    stopQues()

    main.addEventListener('click' , (e)=>{
         input = e.target.textContent
         console.log(input);
         console.log(plus);
         if (input == plus) {
            console.log('yess!! you won')
            sum()
            function score(){
                result++
            }
            score()
            clearTimeout(set)
         } else {
            sum()
            function score(){
                result--
            }
            score()
            clearTimeout(set)
         }
    })


    function sum() {
        num1 = Math.floor(Math.random() * 4) + 1;
        num2 = Math.floor(Math.random() * 5) + 1;
        plus = num1 + num2
        ques.textContent = `The Sum of ${num1} + ${num2} = __?`            // user k input dena h underscore ki jgh
    }


function countDown() {
    if (seconds > 0) {
        seconds--;
        timer.textContent = `${seconds}`
        score.textContent = `Your Score is ${result}`
        let set = setTimeout(countDown, 1000);
    } 
    else if (seconds == 0){
    alert(`         Game Over !!!
                    Your Score is ${result}
          `)

        console.log("Time's up!");
        timer.textContent = `Time's Up!!!!`
    }
    else  {
        console.log("Time's up!");
        timer.textContent = `Time's Up!!!!`
        
  }
}

countDown();
})
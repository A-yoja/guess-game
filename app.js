
let winAudio = new Audio("win.mp3");
let failAudio = new Audio("fail.mp3");
let nearFail = new Audio("nearFail.mp3");
var count = 0;

 let secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
 const checkBtn = document.querySelector('.check');
 checkBtn.addEventListener('click', function(){
    count++;
    const guessNumber = Number(document.querySelector('.guess').value);
    if (!guessNumber) {
        document.querySelector('.message').textContent = 'no number!';
    }
    else if (guessNumber !== secretNumber){
        document.querySelector('.message').textContent = guessNumber > secretNumber ? 'too high' : 'too low';
        document.querySelector(".guess").value = '';
        if (count ===4) {
            nearFail.play();
        } else if (count ===5) {
            failAudio.play();
            document.querySelector('.message').immerHTML = '<h4> no attemet left to try </h4>'
            checkBtn.disabled = true;
            checkBtn.style.backgroundColor = "rgba(220, 220, 220, 0.677)";
            checkBtn.style.cursore = "mover";
        }
    } else if (count === 5 && guessNumber === secretNumber) {
        winAudio.play();
        document.querySelector('.message').textContent = 'correct number';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.body').style.backgroundColor = "green";
        document.querySelector('.number').style.width = '15rem';
        checkBtn.style.backgroundColor = "rgba(220, 220, 220, 0,677)";
        checkBtn.style.cursore = "default";
        checkBtn.disabled = true;
    }
     else if ( guessNumber === secretNumber) {
        winAudio.play();
        document.querySelector('.message').textContent = 'correct number';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.body').style.backgroundColor = "green";
        document.querySelector('.number').style.width = '15rem';
        checkBtn.style.backgroundColor = "rgba(220, 220, 220, 0,677)";
        checkBtn.style.cursore = "default";
        checkBtn.disabled = true
    } 
    })
   
    const  againBtn = document.querySelector('.again');
    againBtn.addEventListener('click', function(){
     document.querySelector('.number').textContent = '?';
     document.querySelector('.guess').value = "";
     document.querySelector('.message').textContent = "start agian";
    });
    


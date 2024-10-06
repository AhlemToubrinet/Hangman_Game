const keybordBtn = document.querySelectorAll('.keybord button');
const hintInput = document.querySelector('.game-container h4');
const guesses = document.querySelector('.game-container h5 span');
const wordDisplay = document.querySelector('.words-display');
const hangMamImage = document.querySelector('.img-container img');
const winOrLoss = document.querySelector('.container1');
const tryAgainBtn = document.querySelector('.container1 button');
const correctWord = document.querySelector('.container1 h5 span');
const lossOrWinImage = document.querySelector('.container1 img');
const text = document.querySelector('.container1 h4');
let count = 0, tracker = 0;
let found = false;


const startGame = (word) =>{
    const keybotdLetters = document.querySelectorAll('.words-display li');

    keybordBtn.forEach(alphabet => {
        alphabet.disabled = false;
        alphabet.addEventListener('click',()=>{
            alphabet.disabled = true;
            found = false;
            word.split('').forEach( (letter,index) => {
                if(letter.toUpperCase() == alphabet.innerText){
                    keybotdLetters[index].innerText = letter;
                    keybotdLetters[index].classList.add('guessed');
                    found = true;
                    tracker++;
                }
                if(tracker==word.length){
                    correctWord.innerText = word;
                    lossOrWinImage.src = `images/victory.gif`;
                    text.innerText = 'You Won The Game';
                    winOrLoss.classList.add('loss-or-win');
                }
            });
            if(!found){
                count++;
                guesses.innerHTML = `${count} / 6`;
                hangMamImage.src = `images/hangman-${count}.svg` ;
                if(count == 6){
                    correctWord.innerText = word;
                    lossOrWinImage.src = `images/lost.gif`;
                    text.innerText = 'You Lost The Game';
                    winOrLoss.classList.add('loss-or-win');
                }
            }
        });
    });
}

const getWordsRondomly = () => {

    keybordBtn.forEach(alphabet => {
        alphabet.disabled = false;
    });

    const {word , hint} = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word, hint);
    hintInput.innerHTML = `Hint: ${hint}`;
    for(let i=0;i<word.length;i++){
        const li = document.createElement('li');
        li.classList.add('letter');
        wordDisplay.appendChild(li);
    }
    
    startGame(word);
}
getWordsRondomly();


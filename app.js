import { checkForY } from './utils.js';
import { checkForN } from './utils.js';

const button = document.getElementById('quiz-button');
const resultsDiv = document.getElementById('results-div');

button.addEventListener('click', () => {
    alert('Welcome to the junglist quiz!');

    const wantsQuiz = confirm('Do you want to take the quiz?');
    if (wantsQuiz === false) {
        return;
    }

    const firstName = prompt('What is your  name?');

    const answer1 = prompt('Is the track "We Are I.E." by Lennie De-Ice often credited as being the track that laid down the foundations for jungle?');

    let score = 0;

    if (checkForY(answer1)) {
        score = score + 1;
    }

    const answer2 = prompt('Was it said that "Jungle was Britains very own equivalent to US hip - hop"?');

    if (checkForY(answer2)) {
        score = score + 1;
    }

    const answer3 = prompt('The movement started in the 1980s');

    if (checkForN(answer3)) {
        score = score + 1;
    }

    resultsDiv.textContent = `BOH! ${firstName}, you got ${score} out of 3! Get wild to some drum'n'bass!`;
    
    
});
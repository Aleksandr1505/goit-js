import quizData from "./quiz-data.js";

const form = document.querySelector('form');
    form.classList.add('form');
    form.classList.add('container-second');
    form.addEventListener('submit', checkUserAnswer);
    console.log(form);

const button = document.querySelector('button');
button.classList.add('button');

function createQuestion(quizData) {
    let fragment = document.createDocumentFragment();
    const h2 = document.createElement('h2');
    h2.classList.add('title');
    h2.textContent = quizData.title;

    quizData.questions.forEach((question, ind) => {
        const section = document.createElement('section');
        const h3 = document.createElement('h3');
        const ul = document.createElement('ul');
        ul.classList.add('list');
        h3.textContent = question.question;
        h3.classList.add('question');
        section.classList.add('section');
        section.append(h3, ul);
        
    question.choices.forEach((choice, idx) => {
            const li = document.createElement('li');
            li.classList.add('list_item')
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.classList.add('input');
            input.setAttribute('type', 'radio');
            input.setAttribute('name', ind);
            input.setAttribute('value', idx);
            input.setAttribute('required', true);
            label.textContent = choice;
            ul.append(li);
            li.appendChild(label);
            label.prepend(input)
        }); 
          
    fragment.append(section);

    });
    fragment.prepend(h2);
    form.prepend(fragment);
}

const result = document.createElement('p');
result.classList.add('result');
const body = document.querySelector('body');
body.classList.add('body');
body.append(result);

function  checkUserAnswer(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userAnswer = [];
    formData.forEach((value, name) =>{
        userAnswer[name] = Number(value);
    })
    const rightAnswer = quizData.questions.map(el => el.answer);
        if(compareAnswer(userAnswer, rightAnswer) >= 80) {
            result.textContent = `Тест пройден успешно, оценка - ${Math.ceil(compareAnswer(userAnswer, rightAnswer))}%`;
        } else {
            result.textContent = `Тест провален, оценка - ${Math.ceil(compareAnswer(userAnswer, rightAnswer))}%. Попробуй еще раз.`;
        };
    form.reset();
}

function compareAnswer(userAnswer, rightAnswer) {
    let count = 0;
    for (let i=0; i < userAnswer.length; i++) {
        if (userAnswer[i] === rightAnswer[i]) {
            count += 16.66;
        };
        
    }
    return count;
} 
 
createQuestion(quizData);
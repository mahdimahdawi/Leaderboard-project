import './style.css';

class Score {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

const DispalyScore = () => {
  const existScore = JSON.parse(localStorage.getItem('scores'));
  if (existScore !== null && existScore.length > 0) {
    const scoreList = document.querySelector('.score-list');
    const scoreItem = document.createElement('ul');
    scoreList.innerHTML = '';

    existScore.forEach((score) => {
      const scoreListItem = document.createElement('li');
      scoreListItem.innerHTML = `${score.name}  :  ${score.score}`;
      scoreItem.appendChild(scoreListItem);
      scoreList.appendChild(scoreItem);
    });
  }
};

const storeScore = (e) => {
  e.preventDefault();
  let existScore = JSON.parse(localStorage.getItem('scores'));
  existScore = existScore == null ? [] : existScore;
  const inputName = document.querySelector('.name').value;
  const inputScore = document.querySelector('.score').value;

  const newScore = new Score(inputName, inputScore);

  if (inputName !== '' && inputScore !== '') {
    existScore.push(newScore);
    localStorage.setItem('scores', JSON.stringify(existScore));
    document.querySelector('.name').value = '';
    document.querySelector('.score').value = '';
    DispalyScore();
  }
};
document.querySelector('.submit-btn').addEventListener('click', storeScore);
document.querySelector('.refresh-btn').addEventListener('click', DispalyScore);

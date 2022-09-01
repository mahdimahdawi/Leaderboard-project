const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2zxcv/scores/';
const playerName = document.querySelector('.name');
const playerScore = document.querySelector('.score');

const SubmitData = async () => {
  const nameValue = playerName.value;
  const scoreValue = playerScore.value;

  if (nameValue !== '' || scoreValue !== '') {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON',
      },
      body: JSON.stringify({
        user: nameValue,
        score: scoreValue,
      }),
    });
  }
  playerName.value = '';
  playerScore.value = '';
};

const DispalyScore = async () => {
  const scoreList = document.querySelector('.score-list');
  const ulTag = document.createElement('ul');
  scoreList.innerHTML = '';
  const response = await fetch(url);
  const list = await response.json();
  const ArrList = list.result;
  ArrList.forEach((scores) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${scores.user} : ${scores.score}`;
    ulTag.appendChild(listItem);
  });
  scoreList.appendChild(ulTag);
};

export { SubmitData, DispalyScore };

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fghj/scores/';

const SubmitData = async (obj) => {
  if (obj.nameValue !== '' || obj.scoreValue !== '') {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON',
      },
      body: JSON.stringify({
        user: obj.nameValue,
        score: obj.scoreValue,
      }),
    });
  }
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

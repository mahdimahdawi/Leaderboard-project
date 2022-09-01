import './style.css';

import { SubmitData, DispalyScore } from './submit-display.js';

const playerName = document.querySelector('.name');
const playerScore = document.querySelector('.score');

const refreshBtn = document.querySelector('.refresh-btn');
const submitForm = document.querySelector('.add-score');

submitForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameValue = playerName.value;
  const scoreValue = playerScore.value;
  SubmitData( {nameValue, scoreValue} );
  playerName.value = '';
  playerScore.value = '';
});

refreshBtn.addEventListener('click', () => {
  DispalyScore();
});
import './style.css';
import { SubmitData, DispalyScore } from './submit-display';
const submitBtn = document.querySelector('.submit-btn');
const refreshBtn = document.querySelector('.refresh-btn');
const submitForm = document.querySelector('.add-score');

submitForm.addEventListener('submit', (e) => {
  e.preventDefault();
  SubmitData();
});

// submitBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   SubmitData();
// });

refreshBtn.addEventListener('click', () => {
  DispalyScore();
});
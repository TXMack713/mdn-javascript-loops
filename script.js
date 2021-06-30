// Loops Exercise 1
let output = document.querySelector('.exercise1');
output.innerHTML = '';

let i = 10;
while (i >= 0) {
  const para = document.createElement('p');
  para.textContent = i;
  output.appendChild(para);
  i--;
}

// Loops Exercise 2
const people = [
  'Chris',
  'Anne',
  'Colin',
  'Terri',
  'Phil',
  'Lola',
  'Sam',
  'Kay',
  'Bruce'
];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

let j = 0;
while (j < people.length) {
  if (people[j] === 'Phil' || people[j] === 'Lola') {
    refused.textContent += people[j] + ', ';
  } else {
    admitted.textContent += people[j] + ', ';
  }
	j++;
}

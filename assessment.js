// MDN JavaScript Loops Assessment 1 Code
let myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
let list = document.createElement('ul');

// Add your code here
for (let i = 0, j = myArray.length; i < j; i += 1) {
  let item = document.createElement('li');
  item.textContent = myArray[i];
  list.appendChild(item);
}

// Don't edit the code below here!

const section = document.querySelector('.assessment1');
section.appendChild(list);

// MDN JavaScript Loops Assessment 2 Code
let name = 'Mustafa';
let i = 0;
let para = document.createElement('p');

let phonebook = [
  { name: 'Chris', number: '1549' },
  { name: 'Li Kang', number: '9634' },
  { name: 'Anne', number: '9065' },
  { name: 'Francesca', number: '3001' },
  { name: 'Mustafa', number: '6888' },
  { name: 'Tina', number: '4312' },
  { name: 'Bert', number: '7780' },
  { name: 'Jada', number: '2282' }
];

// Add your code here
while (i < phonebook.length) {
  if (phonebook[i].name === name) {
    para.textContent = phonebook[i].name + ` : ` + phonebook[i].number;
    break;
  }
  i++;
}

// Don't edit the code below here!
let section2 = document.querySelector('.assessment2');
section2.appendChild(para);

// MDN JavaScript Loops Assessment 3 Code
let k = 500;
let para2 = document.createElement('p');

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Add your code here
do {
  isPrime(k) ? para2.textContent += k + ' ' : k--;
} while(k !== 1);

// Don't edit the code below here!
let section3 = document.querySelector('.assessment3');
section3.appendChild(para2);

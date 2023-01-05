let input = document.querySelectorAll(".input");
let button = document.querySelector(".summ");
let coin = [0.1, 0.2, 0.5, 1, 2, 5, 10, 20];

console.log(input.length);

let summarise = () => {
  for (let i = 0; i <= input.length - 1; i++) {
    let sum = (input[i].value * coin[i]).toFixed(2);
    console.log(sum);
    
  }
};



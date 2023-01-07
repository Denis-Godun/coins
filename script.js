let input = document.querySelectorAll(".input");
let button = document.querySelector(".summ");
let coin = [0.1, 0.2, 0.5, 1, 2, 5, 10, 20];


let summarise = () => {
  let sum = [];
  for (let i = 0; i <= input.length - 1; i++) {
    sum.push((input[i].value * coin[i]).toFixed(2));
   
  }
  
  console.log(typeof sum[0]);
 let result = sum.reduce(function(sumу, elem) {
	return Number(sumу) + Number(elem);
}, 0);
console.log(typeof result);
console.log(result);
alert('Денег в кассе: ' + result + 'BYN')
};

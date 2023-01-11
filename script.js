let input = document.querySelectorAll(".input");
let button = document.querySelector(".summ");
let coin = [0.1, 0.2, 0.5, 1, 2, 5, 10, 20];

showTipAmount = (value) => {
  //находим это окно
  let a = document.getElementById('tip-coins');
  //меняем у него класс
  a.className = "show";
  a.textContent = "Денег в кассе " + value + "BYN";
  //создаём функцию setTimeout, которая убирает класс спустя 3сек после его добавления
  setTimeout(function () {
    a.className = a.className.replace("show", "");
    a.textContent = "";
  }, 5000);
};

let summarise = () => {
  let sum = [];
  for (let i = 0; i <= input.length - 1; i++) {
    sum.push((input[i].value * coin[i]).toFixed(2));
  }

  let result = sum.reduce(function (sumу, elem) {
    return Number(sumу) + Number(elem);
  }, 0);
  // alert("Денег в кассе: " + result + "BYN");
  showTipAmount(result)
};

let prizes = 
[
    "Массаж 1 зоны в подарок", 
    "Подарочный сертификат на 3000 руб", 
    "Пилинг в подарок", 
    "Маска в подарок", 
    "Cкидку 50% на аппаратные процедуры", 
    "Подарочный сертификат на 5000 руб", 
    "Карбоновый пилинг со скидкой 50%", 
    "Купон на скидку 35%"
];



function rotateFunction(){
    var min = 1024;
    var max = 9999;
    var randomIndex = Math.floor(Math.random() * prizes.length);
    var prize = prizes[randomIndex];
    var angle = 360 / prizes.length * randomIndex;
  
    document.getElementById('box').style.transform = "rotate("+ (min + angle) +"deg)";
    console.log(angle);
    console.log(360 / prizes.length * randomIndex);
    console.log(prize);
  }

  var element = document.getElementById('mainbox');
  element.classList.remove('animate');

  setTimeout(function(){
    element.classList.add('animate');
  }, 5000);
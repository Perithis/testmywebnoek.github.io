let prizes = 
[
    "Массаж в подарок", 
    "Сертификат 3000", 
    "Пилинг в подарок", 
    "Маска в подарок", 
    "Скидка 50%", 
    "Сертификат 5000", 
    "-50% на пилинг", 
    "Скидка 35%"
];

let tg = window.Telegram.WebApp;
tg.expand()

// let usercard = document.getElementById("username");
// usercard.innerText = `${tg.initDataUnsafe.user.username}`;

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

    document.getElementById("spin").disabled = true; 
    document.getElementById("spin")

    setTimeout(function(){
        Swal.fire(`🎁 Ваш приз:\n\n${prize}`);
        setTimeout(function(){
            tg.sendData(`${prize}`);
        }, 2000)
    }, 5000)
  }

  var element = document.getElementById('mainbox');
  element.classList.remove('animate');

  setTimeout(function(){
    element.classList.add('animate');
  }, 5000);

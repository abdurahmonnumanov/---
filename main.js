let num = +prompt("Ведите ваш возраст");

if(num >= 0 && num < 18){
    alert("Вы еще молоды вам нужно учится");
}else if (num >= 18 && num < 50){
    alert('Вам нужно работать');
}else if (num >= 50 && num < 59) {
    alert('Вам скоро на пенсию');
}else if (num >= 59 && num < 150){
    alert('Вы пенсионер');
}else{
    alert('Что то пошло не так')
}
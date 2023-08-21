let currentHour = 22;

let message;

message = 
    currentHour >= 22? "Não deveríamos comer nada, é hora de dormir"
    : currentHour >= 18 && currentHour < 22
    ? "Rango da noite, vamos jantar :D"
    : currentHour >= 14 && currentHour < 18
    ? "Vamos fazer um bolo pro café da tarde?"
    : currentHour >= 11 && currentHour < 14
    ? "Hora do almoço!!!"
    : "Hmmm, cheiro de café recém-passado";

console.log(message);





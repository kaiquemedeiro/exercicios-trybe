let ang1 = 60;

let ang2 = 60;

let ang3 = 60;

let triangulo;

if (ang1 < 0 || ang2 < 0 || ang3 < 0 || (ang1 + ang2 + ang3) !== 180) {
    triangulo = false;
} else {
    triangulo = true;
}

console.log(triangulo);



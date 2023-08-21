let nomePeca = 'REI';

nomePeca = nomePeca.toUpperCase();


switch (nomePeca) {
    case 'PEÃO':
        console.log('Avança uma casa para frente (duas no primeiro movimento), captura diagonalmente.');
        break;
    case 'TORRE':
        console.log('Movimento reto horizontal ou vertical.');
        break;
    case 'CAVALO':
        console.log('Movimento em "L": 2 casas em uma direção e 1 casa em outra direção perpendicular.');
        break;
    case 'BISPO':
        console.log('Movimento diagonal em todas as direções.');
        break;
    case 'RAINHA':
        console.log('Combinação de movimentos de torre e bispo: reto horizontal/vertical e diagonal.');
        break;
    case 'REI':
        console.log('Movimento em qualquer direção, uma casa de cada vez.');
        break;
    default:
        console.log('Não existe essa peça');
}


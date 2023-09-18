const techList = (arrayTech, nameArray) => {
    const arrayTechFinal = [];
    const arraySorted = arrayTech.sort();

    if (arrayTech.length === 0) {
        const message = "Vazio!"

        return message;
    }

    for (let index= 0; index < arrayTech.length; index += 1) {

        const objTec = {
            tech: arraySorted[index],
            name: nameArray
        };
    
        arrayTechFinal.push(objTec);
    
    }

    return arrayTechFinal;
  }



  module.exports = techList;
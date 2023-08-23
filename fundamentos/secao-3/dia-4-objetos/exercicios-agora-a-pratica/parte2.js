const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };


  
const customerInfo = (fullOrder) => {
// Complete a função customerInfo() para que seu retorno seja: 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, Rua das Flores, Número: 389, AP: 701.'.
// Adicione abaixo as informações necessárias.
    let message = (`Olá, ${fullOrder.order.delivery.deliveryPerson}, entrega para: ${fullOrder.name}, Telefone: ${fullOrder.phoneNumber}, ${fullOrder.address.street}, Número: ${fullOrder.address.number}, AP: ${fullOrder.address.apartment}.`)
    return message
}

console.log(customerInfo(order));

const orderModifier = (fullOrder) => {
// Complete a função orderModifier() para que seu retorno seja: 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.'.
// Modifique o nome da pessoa compradora para Luiz Silva;
// Modifique o valor total da compra para R$ 50,00.
// Adicione abaixo as informações necessárias.
    const newFullOrder = fullOrder;

    newFullOrder['name'] = 'Luiz Silva';
    newFullOrder['payment']['total'] = 50;
    let message = (`Olá, ${newFullOrder.name}, o valor total de seu pedido de ${Object.keys(newFullOrder.order.pizza)[0]}, ${Object.keys(newFullOrder.order.pizza)[1]} e ${newFullOrder.order.drinks.coke.type} é R$ ${newFullOrder.payment.total},00.`)

    return message
}

console.log(orderModifier(order));


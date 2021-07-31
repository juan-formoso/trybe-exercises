const order = {
  name: 'Juan Formoso',
  phoneNumber: '+5511987654321',
  address: {
    street: 'Rua das Amoreiras',
    number: '13',
    apartment: 'A'
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
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'José',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const address = 'address';
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const customerName = order['name'];
  const customerPhoneNumber = order['phoneNumber'];
  const street = order[address].street;
  const number = order[address].number;
  const apartment = order[address].apartment;

  console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhoneNumber}, R. ${street}, N°: ${number}, AP: ${apartment}`);
}

customerInfo(order);

const orderModifier = (order) => {
  const newBuyer = order.name = 'Luiz Lobo';
  const pizzas = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;
  const newTotal = order.payment.total = '50';

  console.log(`Olá ${newBuyer}, você está pedindo: ${pizzas[0]}, ${pizzas[1]}, ${drinks}, e o total é: ${newTotal},00.`);
}

orderModifier(order);

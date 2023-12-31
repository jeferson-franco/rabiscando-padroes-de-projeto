import Pedido from './Pedido';

// Criação do pedido.
let pedido = new Pedido();
// Atribuição do valor;
pedido.setValor(100);
// Cálculo do frete comum.
console.log('Frete Comum: R$' + pedido.calculaFreteComum());
// Cálculo do frete Expresso.
console.log('Frete Expresso: R$' + pedido.calculaFreteExpresso());
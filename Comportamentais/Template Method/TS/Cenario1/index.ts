import Gateway from './Gateway.ts';
import PagamentoCredito from './PagamentoCredito.ts';
import PagamentoDebito from './PagamentoDebito.ts';
import PagamentoDinheiro from './PagamentoDinheiro.ts';

const valor = 1000; //Definição do valor do pagamento.
const gateway = new Gateway(); //Criação de uma instância de Gateway.
// Pagamento Crédito.
console.log('Crédito: ');
const pagamentoCredito = new PagamentoCredito(valor, gateway);
pagamentoCredito.realizaCobranca();
// Pagamento Débito.
console.log('Débito: ');
const pagamentoDebito = new PagamentoDebito(valor, gateway);
pagamentoDebito.realizaCobranca();
// Pagamento Dinheiro.
console.log('Dinheiro: ');
const pagamentoDinheiro = new PagamentoDinheiro(valor, gateway);
pagamentoDinheiro.realizaCobranca();

// Saída:
// Crédito: R$1030
//​ Débito: R$954
// Dinheiro: R$900

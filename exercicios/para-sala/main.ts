import { ProdutoTipoEnum } from './produtos/enums/produto-tipo-enum';
import { ProdutoInterface } from './produtos/interfaces/produtos.interface';
import { Produto } from './produtos/produto';
import { ProdutoDigital } from './produtos/produto-digital';
import { ProdutoVariante } from './produtos/produto-variante';


// console.log("rodando");

// const produto = new Produto("Regata", 20.00, "descricao regata M")
// const produtoDigital = new ProdutoDigital("Codigo Limpo", 90.88, "Abordando as complexidades de um software")


let produtoFisico: Produto[] = [];
let produtoDigital: ProdutoDigital [] = [];


produtoFisico.push(new Produto("Regata", 20.00, "regata confortável simples", 0));
produtoDigital.push (new ProdutoDigital("Livro 100 chances", 30.00, "disponível em pdf ou epub"));

const produtosDisponiveis = [
    ...produtoFisico.filter(produto => produto.estaDisponivel()),
    ...produtoDigital.filter(produto => produto.estaDisponivel())
];


const display = (...produtos: ProdutoInterface[]): void => {
    const carrinhoProdutos = produtos.map((produto) => {
        return {
            nome: produto.nome,
            preco: produto.preco,
            descricao: produto.descricao,
            estaDisponivel: produto.estaDisponivel()
        }
    })

    console.table(carrinhoProdutos)

}

display( ...produtoFisico, ...produtoDigital)
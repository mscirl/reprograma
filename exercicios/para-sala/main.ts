import { ProdutoTipoEnum } from './produtos/enums/produto-tipo-enum';
import { ProdutoInterface } from './produtos/interfaces/produtos.interface';
import { Produto } from './produtos/produto';
import { ProdutoDigital } from './produtos/produto-digital';
import { ProdutoVariante } from './produtos/produto-variante';


console.log("rodando");


const produto = new Produto("Regata", 100, "descricao regata M")

const produtoDigital = new ProdutoDigital("Codigo Limpo", 90.88, "Abordando as complexidades de um software")
const regataRosa = new Produto('Regata', 15, 'com encapsulamento')
const subRegataRosa = new ProdutoVariante('Regata', 110, 'modelo privavera-verao', 'rosa')

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

display(produto, produtoDigital, regataRosa, subRegataRosa)
import { ProdutoTipoEnum } from './produtos/enums/produto-tipo-enum';
import { ProdutoInterface } from './produtos/interfaces/produtos.interface';
import { Produto } from './produtos/produto';
import { ProdutoDigital } from './produtos/produto-digital';
import { ProdutoVariante } from './produtos/produto-variante';


console.log("rodando");


const produto = new Produto("Regata", 100, "descricao regata M")
const produtoObj: ProdutoInterface = {
    nome: "produto obj",
    descricao: "",
    preco: 0,
    tipo: ProdutoTipoEnum.DIGITAL
}

const produtoDigital = new ProdutoDigital("Codigo Limpo", 90.88, "Abordando as complexidades de um software")
const regataRosa = new ProdutoVariante('Regata', 10.00, 'modelo primavera verão', 'rosa')

const display = (...produtos: ProdutoInterface[]): void => {
    console.table(produtos)
}

display(produto, produtoObj, produtoDigital, regataRosa)
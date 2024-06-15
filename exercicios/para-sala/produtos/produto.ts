import { ProdutoTipoEnum } from "./enums/produto-tipo-enum";
import { ProdutoInterface } from "./interfaces/produtos.interface";

export class Produto implements ProdutoInterface{
    public tipo: ProdutoTipoEnum = ProdutoTipoEnum.FISICO;
    constructor(public nome: string, public preco: number, public descricao: string){}

}

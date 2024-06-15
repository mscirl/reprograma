import { ProdutoTipoEnum } from "./enums/produto-tipo-enum";
import { ProdutoInterface } from "./interfaces/produtos.interface";

export class ProdutoDigital implements ProdutoInterface {
    public tipo: ProdutoTipoEnum = ProdutoTipoEnum.DIGITAL;
    constructor(public nome: string, public preco: number, public descricao: string) {}

}

//exemplo de produto digital: ebook, assinatura de meio de comunicação, livro em pdf, artes, fontes

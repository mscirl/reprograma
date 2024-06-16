import { Produto } from "./produto";

export class ProdutoVariante extends Produto {
    public imagens: string[] = []
    dimensoes: any = {}
    constructor(
        public nome: string,
        public preco: number,
        protected _descricao: string,
        public cor: string,
        protected quantidade
) {
    super(nome, preco, _descricao, quantidade)
    }

}


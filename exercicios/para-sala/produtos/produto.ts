import { ProdutoTipoEnum } from "./enums/produto-tipo-enum";
import { ProdutoInterface } from "./interfaces/produtos.interface";

export class Produto implements ProdutoInterface{
    protected estoque: number = 0

    constructor(
        public nome: string,
        public preco: number,
        protected _descricao: string,
        quantidade: number
    ){
        this.setEstoque(quantidade);
    }

    protected setEstoque (quantidade:number):void {
        this.estoque = quantidade;
    }

    public estaDisponivel(): boolean {
        return this.estoque > 0;
    }

    public tipo: ProdutoTipoEnum = ProdutoTipoEnum.FISICO;
    public get descricao(): string {
        return this._descricao;
    }

}

export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        if (this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente");
        }
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cadastro) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    Sacar(valor) {
        throw new Error("O método Sacar da conta é abstrato");
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    Depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
        }
    }

    Transferir(valor, conta) {
        const valorSacado = this.Sacar(valor)
        conta.Depositar(valorSacado);

    }

}
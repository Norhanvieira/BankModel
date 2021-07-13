   import { Cadastro } from "./Cadastro.js"
   import { ContaCorrente } from "./Conta/ContaCorrente.js"
   import { ContaPoupanca } from "./Conta/ContaPoupança.js";
   import { ContaSalario } from "./Conta/ContaSalario.js";
   import { Gerente } from "./Funcionarios/Gerente.js";
   import { Diretor } from "./Funcionarios/Diretor.js";
   import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

   const cliente1 = new Cadastro("Ricardo", 22211122203);
   const conta1 = new ContaCorrente(0, cliente1, 1002);
   const contaPoupanca1 = new ContaPoupanca(50, cliente1, 1001);
   const contaSalario1 = new ContaSalario(0, cliente1, 1001);
   const cliente = new Cadastro("Lais", 78945612379, "456");

   const diretor = new Diretor("Pedro", 12000, 31324253505);
   diretor.cadastrarSenha("123123123");
   const gerente = new Gerente("Rodrigo", 12000, 11143254391);
   gerente.cadastrarSenha("0987654321");

   const gerenteLogado = SistemaAutenticacao.login(gerente, "0987554321");
   const diretorLogado = SistemaAutenticacao.login(diretor, "123123123");
   const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");


   console.log(gerenteLogado, diretorLogado, clienteEstaLogado);
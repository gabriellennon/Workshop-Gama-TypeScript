// Boolean
const isTrue: boolean = false;

// Number
let idade: number = 23;

// String
const nome: string = 'Gabriel';

// Array
const idades: number[] = [23, 26, 33];
const idades2: Array<number> = [23, 26, 33];

// Tuple
const varios: [string, number, boolean] = ['A', 12, true]

// Enum
enum StatusAluno {
    Aprovado = '000',
    Reprovado = '001'
}

const statusAlunoGabriel: StatusAluno = StatusAluno.Aprovado

// Any
let jogadores: any = 3;
jogadores = 'Gabriel'
jogadores = false

// Void
function mostrarNome(nome: string): void {
    console.log(nome);
}

// Object
function criarUsuario(obj: object) {}

criarUsuario({
    idade: 32
})
// criarUsuario('lucas') // Erro

// Union Types
const nomeCarro: string | null = 'Ferrari';

function exibirCarro(carro: string | number) {}

// Alyas
interface Aluno {
    nome: string;
    idade: number;
}

let todosOsAlunos: Aluno[] | [] = [];

function retornaNomeDoAluno(aluno: Aluno) {
    return aluno.nome;
}

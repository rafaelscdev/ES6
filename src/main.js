const alunos = [
    { nome: "Alice", nota: 7.5 },
    { nome: "Bruno", nota: 5.0 },
    { nome: "Carla", nota: 8.0 },
    { nome: "Daniel", nota: 3.5 },
    { nome: "Eduarda", nota: 6.0 }
];

function filtrarAprovados(listaAlunos) {
    return listaAlunos.filter(aluno => aluno.nota >= 6);
}

const aprovados = filtrarAprovados(alunos);
console.log(aprovados);

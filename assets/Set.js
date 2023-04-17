const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

//const meuSet = new Set(nomes);

// const nomesAtualizados = [...meuSet];

const nomesAtualizados = [...new Set(nomes)];  // Escrevendo dessa maneira, a linha 5 ficaria como a linha 7, eliminando a linha 3, e ficando mais compacto.


console.log(nomesAtualizados);
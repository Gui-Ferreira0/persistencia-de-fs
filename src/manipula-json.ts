import { existsSync, mkdirSync, writeFileSync, readFileSync} from 'fs';
// Models:
type Livro = {
    titulo: string;
    genero?: string;
    autor: string;
    ano: number;
    lido: boolean;

};

type hobby = string;

type FamosoFavorito = {
    nome: string;
};

type Amigo = {
    nome: string;
    ondeConheci: string;
    hobbies: Hobby[];
    famososFavoritos: FamosoFavorito[];
};


//Manipulação de arquivos JSON

// 1. Função para adicionar um livro a um arquivo JSON
const livros: Livro[] = [];
livros.push({
    titulo: "O senhor dos Anéis", 
    autor: "J.R.R. Tolkien", 
    genero: "Fantasia", 
    ano: 1954,
    lido: true
});

livros.push({
    titulo: "1984",
    autor: "George Orwell",
    genero: "Ficção científica",
    ano: 1948,
    lido: false
})

livros.push({
    titulo: "sou um rio",
    autor: "Mauricio de Souza",
    ano: 2021,
    lido: false
})

//2. percorrer o array (lista) de livros e imprim
livros.forEach((livro) => {
    console.log(`Título: ${livro.titulo} (${livro.ano}) - autor: ${livro.autor} - ${livro.lido ? "lido" : "Não lido"}`);
});

//3. filtrar a lista (ex: aqui apenas lidos)
const livrosLidos = livros.filter((livro) => livro.lido === true);

//4. encontrar um livro especifico(por um campo)
const livroEncontrado = livros.find((livro) => livro.titulo === "1984")

//5. salvar no disco (em um arquivo JSON)
const diretorio = 'data';
if (!existsSync(diretorio)) {
    mkdirSync(diretorio);
}
writeFileSync(`${diretorio}/livros.json`, JSON.stringify(livros, null, 2), "utf-8");
//os parametros 'null, 2' servem para indentar e deixar visualmente legivel

//6. Ler do disco(de um arquivo JSON)
const livrosLidosDoArquivo:
    Livro[] = JSON.parse(readFileSync(`${diretorio}/livros.json`, 'utf-8' ));
console.log("Livros lidos do arquivo JSON:",livrosLidosDoArquivo);


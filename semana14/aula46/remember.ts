// Uma função que recebe um array de números e um número n e 
// devolve um novo array somente com os números do array original que sejam maiores do que n.
function one(array:[number], n:number):[number] 


//Uma função que recebe um array de strings e devolve uma string só, concatenando todos os elementos do array.
function two(array:[string]): string;

//Uma função que recebe o autor, a descrição e a data de publicação de um post e retorna um objeto do post criado.
type createdPost{
  author: string;
  description: string;
  postDate: Date;
}
function three(author:string, description:string, postDate:Date): createdPost;

//Uma função assíncrona que recebe o id e retorna um boolean dizendo se existe um usuário com esse id ou não.
async function four(id:string):Promise<boolean>;

//Uma função que recebe o nome e um usuário, o CPF e uma senha e realiza o cadastro do usuário. 
//Ao fim do cadastro (que é assíncrono), você deve retornar um objeto com o nome e o CPF do usuário cadastrado.


//Uma função que recebe o id de um post e o número e curtidas que ele deve receber. 
//Esta função será responsável por se comunicar com o banco de forma assíncrona e não deve retornar nada

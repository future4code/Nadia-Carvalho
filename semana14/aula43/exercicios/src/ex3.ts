// Considere que você esteja implementando uma rede social composta por posts de usuários. 
// Cada um dos posts possui: um autor e um texto.
//       a) Crie um array com 5 objetos deste tipo de posts 🌚
//       b) Crie uma função que receba dois parâmetros: um array de posts e um autor. 
//       Ela deve devolver todos os posts deste autor

type Post = {
  autor: string;
  texto: string;
}

// a)
const posts: Post[] = [
  {
    autor: 'Nadia',
   texto: 'Post de teste'
  },
  {
    autor: 'Adolfo',
   texto: 'Post de teste 2'
  },
  {
    autor: 'Luke',
   texto: 'Woof!'
  }
  ,
  {
    autor: 'Leia',
   texto: 'Miau!'
  },
  {
    autor: 'Nadia',
   texto: 'Post de teste 3'
  }
]

//b)
function ex3(posts: Post[], autor: string): Post[] {
  const byAutor = posts.filter((p) => {
    return p.autor === autor
  })
  console.log(byAutor)
  return byAutor;
}

ex3(posts, 'Luke')
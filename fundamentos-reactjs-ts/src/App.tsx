//extensão JSX = Java script + XML
//Cmponente é uma função que retorna um HTML


import {Header} from './components/Header';
import {Post} from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';



// author: {avatar_url:" ", name:" ", role: " "}
// publishedAt: Date
// content: String


const posts = [
 { id: 1,

  author: {
    avatarUrl: 'https://github.com/SuzanaAlmeida1.png',
    name: 'Suzana Almeida',
    role: 'Engenheira'
  },
   content: [
    {type: 'paragraph', content: 'Fala galeraa 👋',},
    {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome doprojeto é DoctorCare 🚀👉'}, 
    {type:'link', content: 'jane.design/doctorcare'},
        
   ],

   publishedAt: new Date('2023-04-14 20:00:00'),
 },
 { id: 2,

  author: {
    avatarUrl: 'https://github.com/gvergnaud.png',
    name: 'Gabriel Vergnaud',
    role: 'Type-level TypeScript nerd — Building'
  },
   content: [
    {type: 'paragraph', content: 'Fala galeraa 👋',},
    {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome doprojeto é DoctorCare 🚀👉'}, 
    {type:'link', content: 'jane.design/doctorcare'},
        
   ],

   publishedAt: new Date('2023-04-10 20:00:00'),
 },
];

export function App() {
 

  return (
    
    <div>

      <Header />
        <div className={styles.wrapper}>
          
        <Sidebar />
          
          <main>
         {posts.map(post => {
          return (
          
            <Post 
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          
            />
          )
         })}
         </main>
        </div>
    </div>
  )
}


//export default App

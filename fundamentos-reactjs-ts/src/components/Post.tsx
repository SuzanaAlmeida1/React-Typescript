import { format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import styles from './Post.module.css';

//estado = variáveis que eu quero que o componente monitore


interface Author {
name: string;
role: string;
avatarUrl: string;

}

interface Content {
  type: string;
  content: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export function Post({ author, publishedAt, content }: PostProps){

  const [comments, setComments] = useState([
   'post muito bacana, hein!'
  ])
  
  const [newCommentText, setNewCommentText] = useState('') //armazena em tempo real tudo que é digitado no "text area"


  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  }); 

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event:FormEvent) {

    event.preventDefault();
   
    //imutabilidade
   setComments([...comments, newCommentText]);
   setNewCommentText('');

  }


  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('esse campo é obrigatório!')
  }



  function deleteComment (commentToDelete: string){
    //imutabilidade -> as variáveis não sofrem mutação, nós criamos um novo valor (um novo espaço na memória)
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;

    })

    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpety = newCommentText.length === 0;
  
  return (
  <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <Avatar hasBorder src={author.avatarUrl} />
        <div className={styles.authorInfo}>
        <strong>{author.name}</strong>
        <span>{author.role}</span>
        </div>
      </div>

      <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
        {publishedDateRelativeToNow}
      </time>
    </header>

    <div className={styles.content}>
      {content.map(line => {
        if (line.type === 'paragraph') {
          return <p key={line.content}>{line.content}</p>;
        }else if (line.type === 'link'){
          return <p key={line.content}><a href="
          ">{line.content}</a></p>;
        } 

      })}
    </div>

    <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
      

      <strong>Deixe seu feedback</strong>

      <textarea
      name="comment"
      placeholder="Deixe um comentário"
      value={newCommentText}
      onChange={handleNewCommentChange}
      onInvalid={handleNewCommentInvalid}
      required
      />

     <footer>
       <button type="submit" disabled={isNewCommentEmpety}>
        Publicar
       </button>
     </footer>
    </form>
    <div className={styles.commentList}>
      {comments.map(comment => {
        return (
        <Comment 
          key={comment} 
          content={comment} 
          onDeleteComment={deleteComment} //disparado após uma ação, dai acrescenta "On" / função como propriedade
        />
        )
        
      })}
    </div>
  </article>
  )
}
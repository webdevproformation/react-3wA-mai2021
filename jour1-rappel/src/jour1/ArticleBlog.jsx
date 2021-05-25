import React from 'react';

class ArticleBlog extends React.Component {
    state = {  
        titre : "Article 1",
        contenu : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tempore quia modi culpa fugit adipisci maiores, aperiam est perspiciatis eos.`,
        like : { 
            fb : 20,
            instagram : 10
        } 
    }
    render() { 
        let {titre , contenu , like} = this.state;
        // utilisation de la destructuration de l'objet this.state
        return ( 
        <article class="card">
            <header class="card-header">
                <h2>{titre}</h2>
            </header>
            <p class="card-body">{contenu}</p>
            <footer class="card-footer">
                <p className="fs-4">facebook {like.fb} instagram {like.instagram} </p>   
            </footer>
        </article> 
        );
    }
}
 
export default ArticleBlog;
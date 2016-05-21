import React from 'react';
import '../styles/article/article.scss';


export default class Article extends React.Component {

  constructor() {
    super();
    this.author= "Le Canul";
  }

  _getSignature() {
    return (
      <div className="article-signature">
        <time className="article-date" datetime="{new Date();}">Aujourd'hui</time>
        <span className="article-author">{this.props.author}</span>
      </div>
    );
  }



	render() {
		return (
      <article className="article">
        <header className="article-header">
          <h1 className="article-title">{this.props.title}</h1>
          {this._getSignature()}
        </header>
        <picture>
          <source srcSet="http://lorempicsum.com/futurama/320/288/2" media="(max-width:320px)"/>
          <source srcSet="http://lorempicsum.com/futurama/640/288/3" media="(max-width:640px)"/>
          <img src="http://lorempicsum.com/futurama/800/288/1"/>
        </picture>
        <main className="article-body">
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit quisquam voluptates ullam aliquam facilis, odio provident, harum repudiandae eum iusto illum possimus rerum ducimus accusantium sapiente quia eveniet consectetur? Quis. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </main>
        <footer className="article-footer">

          <div className="readmore-holder">
            <button className="readmore-button">Lire la suite &rarr;</button>
          </div>
          <div className="poop-holder">
            <button className="poop-button">💩</button>
            <div className="poop-feedback">feedback</div>
          </div>
        </footer>
      </article>
		);
	}
}

/*
<picture className="article-picture">
  <source srcSet="http://lorempicsum.com/futurama/320/272/1" media="(max-width: 320px)"/>
  <source srcSet="http://lorempicsum.com/futurama/640/272/2" media="(max-width: 640px)"/>
  <img src="http://lorempicsum.com/futurama/720/272/3" alt="profile"/>
</picture>
*/

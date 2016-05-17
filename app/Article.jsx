import React from 'react';

export default class Article extends React.Component {

  constructor() {
    super();
    this.author= "Le Canul";
  }

  _getSignature() {
    return (
      <div className="article-signature">
        <time className="article-date" datetime="{new Date();}">Aujourd'hui</time>
        <span className="article-author"> {this.props.author} </span>
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
        <picture className="article-picture">
          <source srcSet="http://lorempicsum.com/futurama/320/272/1" media="(max-width: 320px)"/>
          <source srcSet="http://lorempicsum.com/futurama/640/272/2" media="(max-width: 640px)"/>
          <img src="http://lorempicsum.com/futurama/720/272/3" alt="profile"/>
        </picture>
        <main className="article-body">
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit quisquam voluptates ullam aliquam facilis, odio provident, harum repudiandae eum iusto illum possimus rerum ducimus accusantium sapiente quia eveniet consectetur? Quis.</p>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit quisquam voluptates ullam aliquam facilis, odio provident, harum repudiandae eum iusto illum possimus rerum ducimus accusantium sapiente quia eveniet consectetur? Quis.</p>

        </main>
        <footer className="article-footer">
          <div className="poop-holder">
            <button className="poop-button">💩</button>
            <div className="poop-feedback">feedback</div>
          </div>
          <div className="readmore-holder">
            <button className="readmore-button">Lire la suite &hellip;</button>
          </div>
        </footer>
      </article>
		);
	}
}

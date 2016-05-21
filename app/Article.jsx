import React from 'react';
import '../styles/article/article.scss';

const FEEDBACK_MESSAGES = ['Merci !😃','😘','#Lourd 😍','😚','Cool 👍', 'Ouaahou 😄', 'Thx ! 🤗' ];

export default class Article extends React.Component {


  constructor() {
    super();
    this.author= "Le Canul";
    this.state = {
        clicked : false
    ,   message : ''
    }
  }

  _getSignature() {
    return (
      <div className="article-signature">
        <time className="article-date" datetime="{new Date();}">Aujourd'hui</time>
        <span className="article-author">{this.props.author}</span>
      </div>
    );
  }

  _getRandomFeedbackMessage() {
    let index =  Math.floor(Math.random()* FEEDBACK_MESSAGES.length);
    return (this.state.clicked) ? '' : FEEDBACK_MESSAGES[index] ;
  }

  _handlePoop(e) {
    e.preventDefault();

    this.setState({
      clicked: !this.state.clicked
    , message: this._getRandomFeedbackMessage()
    , timeout: true
    });

    setTimeout(() => {
      this.setState({message: '', timeout: false});
    }, 2000);

  }


  _getButtonClassName() {
    return (this.state.clicked) ? 'poop-icon active' : 'poop-icon';
  }
  _getFeedbackClassName() {
    return (this.state.timeout) ? 'poop-feedback fade' : 'poop-feedback';
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
            <button onClick={this._handlePoop.bind(this)} className={this._getButtonClassName()} >💩</button>
            <div className={this._getFeedbackClassName()}>{this.state.message}</div>
          </div>
        </footer>
      </article>
		);
	}
}

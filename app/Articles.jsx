import React from 'react';
import Article from './article';

export default class Articles extends React.Component {



  constructor() {
    super();
    this.articles = [];
  }

  _getArticle(a) {
    return (<Article title={a.title} body={a.body} author={a.author} key={a.id}/>);
  }

  _poll(){
    //http://www.2ality.com/2014/10/es6-promises-api.html
    this.articles.push({title: "Les Delir’Hum se prennent une avoine pour leurs projections de GoT", body:"yo", id:1, author:'John Doe'});
    this.articles.push({title:"Il invoque le 49.3 pour valider son PCE sans soutenance", body:"nope", id:2 , author:'John Doe'});
  }
  componentWillMount(){
    this._poll();
  }
	render() {
		return (
			<section>
        {this.articles.map( a => this._getArticle(a) )}
      </section>
		);
	}
}

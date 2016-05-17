import React from 'react';
import Article from './article';

export default class Articles extends React.Component {



  constructor() {
    super();
    this.articles = [];
  }

  _getArticle(a) {
    return (<Article title={a.title} body={a.body} key={a.id}/>);
  }

  _poll(){
    //http://www.2ality.com/2014/10/es6-promises-api.html
    this.articles.push({title: "Lorem", body:"yo", id:1});
    this.articles.push({title:"Ipsum", body:"nope", id:2});
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

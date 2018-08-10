import React,{PureComponent} from 'react';
import Article from './Article.js';

import './Articles.css'

export default class Articles extends PureComponent{
    state={
        openArtId:null
    }
    render() {
        const articleEl=this.props.articles.map((val) =>

                <div key={val.id}>
                    <Article article={val}
                             isOpen={this.state.openArtId===val.id}
                             onButtonClick={this.handleClick.bind(this,val.id)}
                    />
                </div>

        )
            return(
                    articleEl
            )
    }
handleClick = openArtId => this.setState({openArtId:this.state.openArtId===openArtId?null:openArtId})
}

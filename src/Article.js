import React,{PureComponent} from 'react';
import Comments from './Comments'
import './Article.css'

class Article extends PureComponent {
        constructor(props){
            super(props)
            this.state={
                count:0,
                showComment:false,
                isLike:false
            }
        }
       /* shouldComponentUpdate(nextProps,nextState){
            return this.state.isOpen!==nextState.isOpen
        }*/
        componentWillMount(){
                console.log('Will mount')
        }
       /* componentWillReceiveProps(nextProps){
            console.log('will receive props')
            if (nextProps.defaultOpen!==this.props.defaultOpen) this.setState({
                isOpen:nextProps.defaultOpen
            })
        }*/
        componentWillUpdate(){
            console.log('will update')
        }

render(){
        const {article,isOpen,onButtonClick} = this.props;
        const body=isOpen&&<div>{article.text}</div>
        /*!==undefined?article.comments.map((comment)=>{
           <Comment comm={comment}/>
       }):<Comment/>*/
        return (
            <div className="Article">
                <div>
                    <h3 onClick={this.incrementCounter}>
                        {article.title}   clicked {this.state.count}
                    </h3>
                    <button className='btnOpen' onClick={onButtonClick}>{isOpen?'close':'open'}</button>
                </div>
                {body}
                <div className='ButPanel'>
                    <button className={this.state.isLike?'Liked':'NoLiked'} onClick={this.Liked}>Like</button>
                    <button className='ButComment' onClick={this.ShowHideComment}>Комментарии</button>
                </div>
                {this.state.showComment?<Comments comments={article.comments}/>:null}
            </div>
       ) ;

    }
    Liked=()=>(this.setState({isLike:!this.state.isLike}))
    incrementCounter=()=>(this.setState({count:this.state.count+1}))
    ShowHideComment=()=>(this.setState({showComment:!this.state.showComment}))
}


export  default Article;
import React,{Component} from 'react'
import Comment from './Comment'
import './Comments.css'
export default class Comments extends Component{
    constructor(props){
        super(props)
        this.state={
            openCom:false
    }

}
    render() {
        var comment
        const {comments}=this.props;
        console.log(this.props)

         if (comments !== undefined) {
              comment = comments.map((comments) => <Comment comm={comments}/>)
         }
         else {
             comment=<Comment/>
             console.log("1")
         }
        return (<div className='Comment'>{comment}</div>)
    }
}
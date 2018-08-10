import React,{Component} from 'react'
import './Comment.css'
export default class Comment extends Component{
    render(){
        return(
            <div>
                <div className='UserPic'/>

                <div className='UserName'>
                    {this.props.comm !== undefined?this.props.comm.user:null}
                </div>

                <div className='UserText'>
                    {this.props.comm !== undefined?this.props.comm.text:null}
                </div>

                <div className='CommentPanel'/>
            </div>)

    }

}
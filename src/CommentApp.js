
import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

export class CommentApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          username: 'ywp',
          content: '123'
        },
        {
          username: 'sss',
          content: '456'
        }
      ]
    }
  }
  handleComment(comment) {
    if (!comment) return 
    if (!comment.username) return alert("请输入用户名!")
    if (!comment.content) return alert("请输入评论内容!")
    this.state.list.push(comment) // 这里面存在一个不理解的问题，是否直接改变state里面的值
    this.setState({
      list: this.state.list
    })
  }
  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleComment.bind(this)}/>
        <CommentList list={this.state.list}/>
      </div>
    )
  }
}


export default CommentApp

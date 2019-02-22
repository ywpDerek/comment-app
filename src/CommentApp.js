
import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
// import { connect } from 'react-redux'

export class CommentApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }
  componentWillMount() {
    this._getList()
  }
  _saveList(list) {
    localStorage.setItem('list', JSON.stringify(list))
  }
  _getList() {
    const list = localStorage.getItem('list')
    if (list) {
      this.setState({
        list: JSON.parse(list)
      })
    }
  }
  handleComment(comment) {
    if (!comment) return 
    if (!comment.username) return alert("请输入用户名!")
    if (!comment.content) return alert("请输入评论内容!")
    const list = this.state.list
    list.push(comment)
    this.setState({
      list: list
    })
    this._saveList(list)
  }
  handleDeleteList(index) {
    this.state.list.splice(index, 1)
    const list = this.state.list
    this.setState({
      list: list
    })
    this._saveList(this.state.list)
  }
  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleComment.bind(this)}/>
        <CommentList list={this.state.list} handleDeleteList={this.handleDeleteList.bind(this)}/>
      </div>
    )
  }
}


export default CommentApp

import React, { Component } from 'react'

export class CommentInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      content: ''
    }
  }
  usernameChange(e) {
    this.setState({
      username: e.target.value
    })
  }
  contentChange(e) {
    this.setState({
      content: e.target.value
    })
  }
  handleSubmit() {
    if (this.props.onSubmit) {
      const { username, content } = this.state
      this.props.onSubmit({username, content})
      this.setState({content: ''})
    }
  }
  render() {
    return (
      <div>
        <div className='comment-input'>
          <div className='comment-field'>
            <span className='comment-field-name'>用户名：</span>
            <div className='comment-field-input'>
              <input onChange={this.usernameChange.bind(this)} value={this.state.username}/>
            </div>
          </div>
          <div className='comment-field'>
            <span className='comment-field-name'>评论内容：</span>
            <div className='comment-field-input'>
              <textarea onChange={this.contentChange.bind(this)} value={this.state.content}/>
            </div>
          </div>
          <div className='comment-field-button'>
            <button onClick={this.handleSubmit.bind(this)}>
              发布
            </button>
          </div>
        </div>
      </div>
    )
  }
}


export default CommentInput


import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class CommentInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      content: ''
    }
  }
  componentWillMount() {
    this._getUsername()
  }
  componentDidMount() {
    this.refs.textarea.focus()
  }
  _getUsername() {
    let username = localStorage.getItem('username')
    if (username) {
      this.setState({
        username: username
      })
    }
  }
  _saveUsername() {
    localStorage.setItem('username', this.state.username)
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
      this.props.onSubmit({
        username: this.state.username,
        content: this.state.content,
        createdTime: +new Date()
      })
      this.setState({content: ''})
    }
  }
  handleUsernameBlur() {
    this._saveUsername()
  }
  render() {
    return (
      <div>
        <div className='comment-input'>
          <div className='comment-field'>
            <span className='comment-field-name'>用户名：</span>
            <div className='comment-field-input'>
              <input 
                onChange={this.usernameChange.bind(this)} 
                value={this.state.username}
                onBlur={this.handleUsernameBlur.bind(this)}/>
            </div>
          </div>
          <div className='comment-field'>
            <span className='comment-field-name'>评论内容：</span>
            <div className='comment-field-input'>
              <textarea 
                onChange={this.contentChange.bind(this)} value={this.state.content} 
                ref="textarea"/>
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

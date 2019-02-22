
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleDeleteList: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      timeString: ''
    }
  }
  componentWillMount() {
    console.log('componentWillMount')
    this._updateTimeString()
    this.timer = setInterval(this._updateTimeString.bind(this), 5000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
    console.log('componentWillUnmount')
  }
  // 这样做会有严重的 XSS 漏洞，用户可以输入任意的 HTML 标签，用 <script> 执行任意的 
  // JavaScript 代码。所以在替换代码之前，我们要手动地把这些 HTML 标签进行转义：
  _getProcessedContent (content) {
    return content
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  }
  _updateTimeString() {
    let time = this.props.comment.createdTime
    time = (+Date.now() - time) / 1000
    this.setState({
      timeString: time > 60 ? `${Math.round(time / 60)} 分钟前` : `${Math.round(Math.max(time, 1))} 秒前`
      // 这里面Math.max(time, 1)取time和1的最大值 意义在于 如果时间小于1秒的时候就案一秒来算
    })
  }
  onDeleteList() {
    if (this.props.handleDeleteList) {
      this.props.handleDeleteList(this.props.index)
    }
  }
  render() {
    return (
      <div className="comment">
        <div className='comment-user'>
          <span className='comment-username'>{this.props.comment.username} </span>：
        </div>
        <p dangerouslySetInnerHTML={
          {
            __html:this._getProcessedContent(this.props.comment.content)
          }
        } />
        <span className='comment-createdtime'>
          {this.state.timeString}
        </span>
        <span className='comment-delete' onClick={this.onDeleteList.bind(this)}>
          删除
        </span>
      </div>
    )
  }
}


export default Comment

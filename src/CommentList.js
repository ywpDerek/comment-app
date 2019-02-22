
import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

export class CommentList extends Component {
  static defaultProps = {
    list: [],
  }
  static propTypes = {
    list: PropTypes.array.isRequired,
    handleDeleteList: PropTypes.func.isRequired
  }
  handleDeleteList(index) {
    if (this.props.handleDeleteList) {
      this.props.handleDeleteList(index)
    }
  }
  render() {
    return (
      <div>
        {
          this.props.list.map((item, i) => {
            return <Comment comment={item} key={i} index={i} handleDeleteList={this.handleDeleteList.bind(this)}/>
          })
        }
      </div>
    )
  }
}


export default CommentList

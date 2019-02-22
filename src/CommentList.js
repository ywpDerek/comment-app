
import React, { Component } from 'react'
import Comment from './Comment'

export class CommentList extends Component {
  static defaultProps = {
    comment: []
  }
  render() {
    return (
      <div>
        {
          this.props.list.map((item, i) => {
            return <Comment comment={item} key={i}/>
          })
        }
      </div>
    )
  }
}


export default CommentList

import React ,{Component} from 'react';
import CommentInput from './Comment';
import CommentList from './CommentList';
import PropTypes from 'prop-types'
import {Panel} from 'react-bootstrap';
import {addComment,deleteComment} from '../service/fetch'
/*
组件的命名上有待纠结
 */
export default class CommentApp extends Component{
  static propTypes=({
    comments:PropTypes.array,
    deleteComment:PropTypes.func,
    addComment:PropTypes.func,
  })
  render(){
    return(
      <div className="comment_container">
        <Panel
          header="留言"
        >
          <CommentList
          />
          <CommentInput/>
        </Panel>
      </div>
    )
  }
}

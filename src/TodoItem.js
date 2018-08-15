import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)  
  }

  /**
   * 避免无畏的render，减少性能损耗
   * @param {*} nextProps 
   * @param {*} nextState 
   */
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }    
  }

  render() {
    console.log('child render')
    const { content } = this.props
    return (
      <li onClick={this.handleDelete}>
        { content }
      </li>
    )
  }

  // 子组件如果想和父组件通信，子组件要调用父组件传递过来的方法
  handleDelete() {
    const { deleteItem, index } = this.props; // es6 解构赋值 
    // this.props.delete(this.props.index)
    deleteItem(index)
  }

}

// 属性校验
TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

export default TodoItem;
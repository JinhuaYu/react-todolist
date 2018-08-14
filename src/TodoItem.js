import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)  
  }

  // 子组件如果想和父组件通信，子组件要调用父组件传递过来的方法
  handleDelete() {
    const { deleteItem, index } = this.props; // es6 解构赋值 
    // this.props.delete(this.props.index)
    deleteItem(index)
  }

  render() {
    const { content, test } = this.props
    return (
      <li onClick={this.handleDelete}>
        { test } - { content }
      </li>
    )
   }
}

// 属性校验
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

// 属性默认值
TodoItem.defaultProps = {
  test: 'hello world'
}


export default TodoItem;
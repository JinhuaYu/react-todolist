import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)  
  }

  render() {
    console.log('child render')
    const { content, test } = this.props
    return (
      <li onClick={this.handleDelete}>
        { test } - { content }
      </li>
    )
  }

  // 子组件如果想和父组件通信，子组件要调用父组件传递过来的方法
  handleDelete() {
    const { deleteItem, index } = this.props; // es6 解构赋值 
    // this.props.delete(this.props.index)
    deleteItem(index)
  }

  /**
   * 前提条件：一个组件要冲父组件接收参数
   * 如果这个组件第一次存在于父组件中，不会执行
   * 如果这个组件之前已经存在于父组件中，才会执行
   */
  componentWillReceiveProps() {
    console.log('child componentWillReceiveProps')
  }

  //  当这个组件即将被从页面中剔除的时候，会被执行
  componentWillUnmount() {
    console.log('child componentWillUnmount')
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
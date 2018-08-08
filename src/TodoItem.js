import React from 'react';

class TodoItem extends React.Component {

  // 子组件如果想和父组件通信，子组件要调用父组件传递过来的方法
  handleDelete() {
    this.props.delete(this.props.index)
  }
  render() {
     return (
       <li onClick={this.handleDelete.bind(this)}>{ this.props.content }</li>
     )
   }
}

export default TodoItem;
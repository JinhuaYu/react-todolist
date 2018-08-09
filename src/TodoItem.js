import React, { Component } from 'react';

class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this)  
  }

  // 子组件如果想和父组件通信，子组件要调用父组件传递过来的方法
  handleDelete() {
    const { deleteDo, index } = this.props; // es6 解构赋值 
    // this.props.delete(this.props.index)
    deleteDo(index);    
  }

  render() {
    const { content } = this.props;
    return (
      <li onClick={this.handleDelete}>{ content }</li>
    )
   }
}

export default TodoItem;
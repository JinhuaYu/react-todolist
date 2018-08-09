import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }
    // 优化 bind(this),提高执行性能
    this.handleInputChange =this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  
  // list add
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  // input value change
  handleInputChange(e) {
      this.setState({
        inputValue: e.target.value
      })
  }
  // handleDelete 删除
  handleDelete(index) {
    const list = [...this.state.list] // 创建副本， 不要直接修改 state
    list.splice(index, 1)
    this.setState({list})
  }

  // 拆分
  getTodoItems() {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem 
            deleteDo={this.handleDelete} 
            key={index} 
            content={item} 
            index={index}
          />
        )
      })
    )
  }

  // 父组件通过属性的形式向子组件传递参数
  // 子组件通过pros接收父组件传递的参数
  render() {
    return (
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange} />
          <button onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>
          { this.getTodoItems() }          
        </ul>
      </div>
    );
  }
}

export default TodoList

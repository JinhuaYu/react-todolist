import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import axios from 'axios'

class TodoList extends Component {
  // constructor 组件创建时调用
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }    
    // 优化 bind(this),提高执行性能
    this.handleInputChange =this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  // 数据发生变化时调用
  render() {
    return (
      // React.Fragment 包裹标签 
      <Fragment> 
        <div>
          <label htmlFor="insertArea">输入内容</label>           
          <input 
            id="insertArea" 
            value={this.state.inputValue} 
            onChange={this.handleInputChange}
          />
          <button className="btn" onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          { this.getTodoItems() }
        </ul>
      </Fragment>
    );
  }

  // 在第一次渲染后调用
  componentDidMount() {
    axios.get('/api/todolist') // 配合charles使用
      .then((res) => {
        // 推荐写法
        this.setState(() => ({          
            list: [...res.data]
        }))
      })
      .catch(() => {
        alert('error')
      })
  }

  // input value change
  handleInputChange(e) {
    const value = e.target.value  
    this.setState(() => ({
      inputValue: value
    }))
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
            key={index} 
            content={item} 
            index={index}
            deleteItem={this.handleDelete} 
          />
        )
      })
    )
  }

  // list add
  handleBtnClick() {
    // setState是异步函数
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

}

export default TodoList

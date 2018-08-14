import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
  // constructor 组件创建时调用
  constructor(props) {
    super(props)
    // 当组件的state或者props发生变化时，render函数就会重新执行
    this.state = {
      list: [],
      inputValue: ''
    }
    // 优化 bind(this),提高执行性能
    this.handleInputChange =this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  // 在组件即将被挂在到页面的时候自动执行
  componentWillMount() {
    console.log('componentWillMount')
  }

  // 数据发生变化时调用
  render() {
    console.log('render')
    return (
      // React.Fragment 包裹标签 
      <Fragment> 
        <div>
          <label htmlFor="insertArea">输入内容</label>           
          <input 
            id="insertArea" 
            value={this.state.inputValue} 
            onChange={this.handleInputChange} 
            ref={(input) => {this.input = input}}
          />
          <button className="btn" onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul ref={(ul) => {this.ul = ul}}>
          { this.getTodoItems() }
        </ul>
      </Fragment>
    );
  }

  // 组件挂载到页面之后自动被执行
  componentDidMount() {
    console.log('componentDidMount')
  }

  // 组件被更新之前，自动被执行
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }

  // input value change
  handleInputChange(e) {
    // const value = e.target.value
    const value = this.input.value
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
            deleteItem={this.handleDelete} 
            key={index} 
            content={item} 
            index={index}
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
    }), () => {
      // setState 执行完
      // 回调函数
      console.log(this.ul.querySelectorAll('li').length)
    })
    // 写在这会先执行
    // console.log(this.ul.querySelectorAll('li').length)
  }

}

export default TodoList

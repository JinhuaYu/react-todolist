import React from 'react'
import { connect } from 'react-redux'
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction
} from './store/actionCreators'

const TodoList = (props) => {
  const { inputValue, handleInputChange, handleBtnClick, list, handleDelete } = props
  return (
    <div>
      <div>
        <input 
          type="text"
          value={inputValue} 
          onChange={handleInputChange}
        />
        <button onClick={handleBtnClick}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return (
              <li key={index} onClick={() => {handleDelete(index)}}>
                {item}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

// store.dispatch, props
const mapDispatchToProps = (dispatch) => {
  return {
    // inputValueChange
    handleInputChange(e) {
      dispatch(getInputChangeAction(e.target.value))
    },
    // submit
    handleBtnClick() {
      dispatch(getAddItemAction()) 
    },
    // delete item
    handleDelete(index) {
      dispatch(getDeleteItemAction(index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
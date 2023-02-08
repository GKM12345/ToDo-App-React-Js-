import React from 'react'
import './ToDoList.css';
import {ToDoHeader, ToDoBody} from './';


const ToDoList = () => {
  return (
    <React.Fragment>
        <div className='To-Do-Outer-Container'>
            <div className='To-Do-Inner-Cont-1'>
                <ToDoHeader />
                <ToDoBody />
            </div>
        </div>
    </React.Fragment>
  )
}

export default ToDoList;

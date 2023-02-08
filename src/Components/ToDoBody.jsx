import React, { useState } from 'react'
import { TaskItem } from './';
import './ToDoBody.css';

const ToDoBody = () => {

    const [currtask, setCurrTask] = useState('');

    const [data, setData] = useState([]);

    /** Input Feild event handler  **/
    const taskEventHandler = (event) => {
        setCurrTask(event.target.value);
    }

    /** Add Data to array after Clicked **/
    const addTaskEventHandler = () => {
        setData((oldData) => {
            return [...oldData, currtask];
        });
        setCurrTask('');
    }

    // Delete Particular Task From Task List..

    const onDeleteEventHandler = (Taskid) => {
        setData((oldData)=>{
            return oldData.filter((taskdata,index)=>{
                return index!==Taskid;
            });
        })
    }

    return (
        <React.Fragment>
            <div className='ToDoBody-Outer-Cont'>
                <div className='ToDoBody-Inner-Cont-1'>
                    <input type="text" value={currtask} placeholder='Enter The Task Here.' onChange={taskEventHandler} />
                    <div id="Add-Icon" onClick={addTaskEventHandler}>+</div>
                </div>

                <div className='ToDoBody-Task-Datas'>
                    {data.map((taskitem, index) => {
                        return (
                            <TaskItem taskItem={taskitem} key={index} id={index} onDelete={onDeleteEventHandler} />
                        );
                    })}
                </div>

            </div>
        </React.Fragment>
    )
}

export default ToDoBody;

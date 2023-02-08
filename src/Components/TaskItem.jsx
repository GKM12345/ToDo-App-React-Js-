import React from 'react'

const TaskItem = (props) => {
    
    return (
        <React.Fragment>
            <div className='Task-Data-Item'>
                <div className='remove-task-Item' onClick={()=>{
                    props.onDelete(props.id);
                }}>
                    <i className="fas fa-times-circle"></i>
                </div>
                <div>{props.taskItem}</div>
            </div>
        </React.Fragment>
    )
}

export default TaskItem;

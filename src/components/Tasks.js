import React, { useState } from 'react'
import bookmark from './bookmark.ico'
import trash from './trash.png'

export default function Tasks() {
    let [task,setTask] = useState("");
    let [taskList,setTaskList] = useState([])
    let [deletingData,setDeletingData] = useState("")
    let [showLength,setshowLength] = useState(false);
    let handleText = (event) => {
        setTask(event.target.value)
    }
    let handleAddTask = () => {
        if (task==="") {
            return
        }
        setTaskList([
            ...taskList,
            task
        ])
        setTask("")
    }
    let handleRemoveTask = (event) => {
        let temp = event.target.parentElement.parentElement.previousSibling.innerText
        setTaskList(taskList.filter(task =>task!==temp))
        setDeletingData(temp)
        setTimeout(()=>{
            setDeletingData("")
        },2000)
    }
    let showLengthVal = () => {
        setshowLength(true)
        setTimeout(() => {
            setshowLength(false)
        }, 3000);
    }
    let handleClear = ()=>{
        setDeletingData("All tasks")
        setTaskList([]);
        setTimeout(()=>{
            setDeletingData("")
        },2000)
    }
    return (
        <>
        <div className='container my-5 py-5 justify-content-center bg-light bg-gradient'>
            <div className='container rounded border border-dark py-3'>    
                <h1 className="display-6">Tasks</h1>
                <div className='container rounded border px-0'>
                    <div className="container rounded px-0">
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">
                                <img src={bookmark} width='20' alt=''/>
                            </span>
                            <input type="text" value={task} onChange={handleText} className="form-control" placeholder="Task to add" aria-label="Username" aria-describedby="addon-wrapping"/>
                            <button className='border border-0 m-0 p-0' onClick={handleAddTask}> 
                                <span className="input-group-text" id="addon-wrapping">   
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px" fillRule="evenodd"><path fillRule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"/></svg>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className='container px-0 overflow-auto' style={{height:"175px"}}>
                        <div className="d-flex flex-column">
                            {taskList.map((elem,index)=>{
                                return (
                                <div className="py-2 border-bottom d-flex justify-content-center" key={elem}>
                                    <div className='px-2 bg-light' style={{width:'90%'}}>
                                        {elem}
                                    </div>
                                    <div className="text-center" style={{width:'10%'}} id="addon-wrapping">
                                        <button className='border border-0 bg-light'>    
                                            <img src={trash} alt='' onClick={handleRemoveTask} /> 
                                        </button>  
                                    </div>
                                </div>
                            )})}
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-row justify-content-center my-2'>
                    <div className='btn btn-primary border border-2 mx-2' onClick={handleClear}>
                        Clear
                    </div>
                    <div className='btn btn-primary border border-2 mx-2' onClick={showLengthVal}>
                        Tasks Left
                    </div>
                </div>
            </div>   
            {deletingData!=="" && <div class="my-2  container alert alert-dark" role="alert">
                Task: {deletingData} completed
            </div>} 
            {showLength && <div class="my-2  container alert alert-info" role="alert">
                Tasks left: {taskList.length}
            </div>} 
        </div>
        </>
    )
}

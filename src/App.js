import React from 'react';
import Child from './child.jsx';
import {useState} from 'react';
import { MdDelete } from 'react-icons/md';

import './style.css';

function App(){
    const [task,settask]=useState([]);
    const [currentvalue,setcurrentvalue]=useState('');

    function handleClick(){
        if(currentvalue===''){
         alert('No input Found');
         return;
        }else{
            settask([...task,currentvalue]);
            setcurrentvalue('');
        }
    }
    
    function DeleteTask(index){
        const updatedTasks = task.filter((_, i) => i !== index); // Exclude the task at the clicked index
    settask(updatedTasks);
    }

    function handleCurrentValue(e){
        setcurrentvalue(e.target.value);
    }
    return(
        <div className="container">
            <Child 
            handleClick={handleClick}
            task={currentvalue}
            handleCurrentValue={handleCurrentValue}
            />
        <div>
            {task.map((currentvalue,index)=>(
                <p key={index}>{currentvalue}<MdDelete onClick={() => DeleteTask(index)} className="iconstyle" /></p>
            ))
            
            }
        </div>
        </div>
        
    );

}
export default App;
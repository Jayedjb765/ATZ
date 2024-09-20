import { useEffect, useState } from "react";
import Task from "../Task/Task";


const Tasks = () => {
    const [tasks,settasks] = useState([]);
    useEffect(()=>{
        fetch('task.json')
        .then(res=>res.json())
        .then(data => settasks(data))
    },[])
    return (
        <div>
            <div className="overflow-x-auto">
      <table className="table table-zebra">
      =
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
                tasks.map(task => <Task
                key={task.id}
                
                task={task}
                
                ></Task>)
            }
       
        </tbody>
      </table>
      </div>
      </div>
    
           
            
        
    );
};

export default Tasks;
import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import { TiTickOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const Task = ({ task }) => {
  const { id, task_name, description, action } = task;
  return (
    <tr>
      <th>{id}</th>
      <td>{task_name}</td>
      <td>{description}</td>
      <td className="flex">
        <div className="flex">
            <Link to='/edit'> <MdEditSquare className="text-xl mx-2"></MdEditSquare></Link>
           
            <Link><MdDelete className="text-xl mx-2"></MdDelete></Link> 
        </div>
       <Link> <TiTickOutline className="text-xl mx-2"></TiTickOutline></Link>

      </td>
    </tr>
  );
};

export default Task;

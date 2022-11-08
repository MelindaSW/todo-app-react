import React, { useState } from 'react'
import { useAppSelector } from '../../redux/hooks'
import './TaskTableRow.css'
import arrow_down_icon from '../../assets/arrow_down_icon.png'
import arrow_up_icon from '../../assets/arrow_up_icon.png'
import trash_basket_icon from '../../assets/trash_basket_icon.png'

const TaskTableRow = () => {
  const [displayMore, setDisplayMore] = useState(false)
  const tasks = useAppSelector((state) => state.tasks.tasks)

  return (
    <>
      {tasks.map((task) => (
        <tr key={task.id}>
          <td>{task.title}</td>
          <td>
            <input className="checkdone" type="checkbox" id={task.id + ' ' + 'completed'} checked={task.completed} />
          </td>
          <td className="displayMore">
            <img src={displayMore ? arrow_up_icon : arrow_down_icon} alt="Show more" />
          </td>
          <td className="deleteTask">
            <img src={trash_basket_icon} alt="Delete task" />
          </td>
        </tr>
      ))}
    </>
  )
}

export default TaskTableRow

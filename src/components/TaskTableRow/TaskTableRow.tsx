import React, { useState } from 'react'
import { useAppSelector } from '../../redux/hooks'
import './TaskTableRow.css'
import arrow_down_icon from '../../assets/arrow_down_icon.png'
import arrow_up_icon from '../../assets/arrow_up_icon.png'
import trash_basket_icon from '../../assets/trash_basket_icon.png'

const TaskTableRow = () => {
  const [displayMore, setDisplayMore] = useState({ display: false, id: 0 })
  const tasks = useAppSelector((state) => state.tasks.tasks)

  const toggleMoreInfo = (id: number) => {
    setDisplayMore({
      display: displayMore.id === id || displayMore.display === false ? !displayMore.display : displayMore.display,
      id: id,
    })
    // console.log({ displayMore })
  }

  return (
    <>
      {tasks.map((task) => (
        <>
          <tr key={task.id}>
            <td>
              <input className="checkdone" type="checkbox" id={task.id + ' ' + 'completed'} checked={task.completed} />
            </td>
            <td>{task.title}</td>
            <td className="displayMore">
              <img
                src={displayMore.display && displayMore.id === task.id ? arrow_down_icon : arrow_up_icon}
                alt="Show more"
                onClick={() => toggleMoreInfo(task.id)}
              />
            </td>
            <td className="deleteTask">
              <img src={trash_basket_icon} alt="Delete task" />
            </td>
          </tr>
          {displayMore.display && task.id === displayMore.id && (
            <div className="more-info">
              <>{task.description}</>
            </div>
          )}
        </>
      ))}
    </>
  )
}

export default TaskTableRow

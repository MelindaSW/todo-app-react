import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import dateformat from 'dateformat'
import { deleteTask, markTaskAsDone } from '../../features/tasks/taskSlice'
import './TaskTableRow.css'
import arrow_down_icon from '../../assets/arrow_down_icon.png'
import arrow_up_icon from '../../assets/arrow_up_icon.png'
import trash_basket_icon from '../../assets/trash_basket_icon.png'
import exclamation_mark_sign_triangle_icon from '../../assets/exclamation_mark_sign_triangle_icon.png'

const TaskTableRow = () => {
  const [displayMore, setDisplayMore] = useState({ display: false, id: 0 })

  const tasks = useAppSelector((state) => state.tasks.tasks)
  const dispatch = useAppDispatch()

  const toggleMoreInfo = (id: number) => {
    setDisplayMore({
      display: displayMore.id === id || displayMore.display === false ? !displayMore.display : displayMore.display,
      id: id,
    })
  }

  const handleCheckDoneChange = (event: React.FormEvent<HTMLInputElement>, id: number, prevValue: boolean) => {
    const payLoad = { done: !prevValue, id: id }
    dispatch(markTaskAsDone(payLoad))
  }

  return (
    <>
      {tasks.map((task) => (
        <>
          <tr key={task.id}>
            <td>
              <input
                className="checkdone"
                type="checkbox"
                id={task.id + ' ' + 'completed'}
                checked={task.completed}
                onChange={(e) => handleCheckDoneChange(e, task.id, task.completed)}
              />
            </td>
            <td>{task.title}</td>
            <td className="overdue">
              <img src={task.overdue ? exclamation_mark_sign_triangle_icon : ''} />
            </td>
            <td className="displayMore">
              <img
                src={displayMore.display && displayMore.id === task.id ? arrow_down_icon : arrow_up_icon}
                alt="Show more"
                onClick={() => toggleMoreInfo(task.id)}
              />
            </td>
            <td className="deleteTask">
              <img src={trash_basket_icon} alt="Delete task" onClick={() => dispatch(deleteTask({ task }))} />
            </td>
          </tr>
          {displayMore.display && task.id === displayMore.id && (
            <>
              <tr className="more-info">
                <td colSpan={5}>
                  <ul>
                    <li>
                      <span>Description: </span> <br />
                      {task.description}
                    </li>
                    <li>
                      <span>Created: </span> <br />
                      {dateformat(task.created, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}
                    </li>
                    <li>
                      <span>Deadline: </span> <br />
                      {dateformat(task.deadline, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}
                    </li>
                  </ul>
                </td>
              </tr>
            </>
          )}
        </>
      ))}
    </>
  )
}

export default TaskTableRow

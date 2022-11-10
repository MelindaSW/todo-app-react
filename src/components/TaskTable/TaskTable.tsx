import React from 'react'
import TaskTableRow from '../TaskTableRow/TaskTableRow'
import './TaskTable.css'

const TaskTable = () => {
  return (
    <div id="taskcontainer">
      <h1>Todos</h1>
      <table>
        <thead>
          <tr>
            <th>Done</th>
            <th>Title</th>
            <th>Overdue</th>
            <th>More</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <TaskTableRow />
        </tbody>
      </table>
    </div>
  )
}

export default TaskTable

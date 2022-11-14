import React from 'react'
import TaskTableRow from '../TaskTableRow/TaskTableRow'
import Sorting from '../Sorting/Sorting'
import './TaskTable.css'

const TaskTable = () => {
  return (
    <div id="taskcontainer">
      <h1>Todos</h1>
      <Sorting />
      <table>
        <thead>
          <tr>
            <th>Done</th>
            <th>Title</th>
            <th>!</th>
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

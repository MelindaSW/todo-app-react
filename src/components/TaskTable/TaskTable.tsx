import React from 'react'
import TaskTableRow from '../TaskTableRow/TaskTableRow'
import './TaskTable.css'

const TaskTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Done</th>
          <th>More</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <TaskTableRow />
      </tbody>
    </table>
  )
}

export default TaskTable

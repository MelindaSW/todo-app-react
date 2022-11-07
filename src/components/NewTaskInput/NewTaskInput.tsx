import React, { FormEvent } from 'react'
import { connect } from 'react-redux'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { increment, decrement } from '../../redux/taskSlice'
import './NewTaskInput.css'

function NewTaskInput() {
  const count = useAppSelector((state) => state.tasks.value)
  const task = useAppSelector((state) => state.tasks.task)
  const dispatch = useAppDispatch()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // 👇️ prevent page refresh
    event.preventDefault()

    console.log('form submitted ✅')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="New Task">New task</label>
      <input type="text" name="task-title" placeholder="Title *" />
      <input type="text" name="task-description" placeholder="Description" />
      <button onClick={() => dispatch(increment())}>+</button>
      <p>{count}</p>
    </form>
  )
}

export default NewTaskInput

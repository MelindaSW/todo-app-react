import React, { FormEvent, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { addNewTask } from '../../features/tasks/taskSlice'
import './NewTaskInput.css'

interface IFormState {
  title: string
  description: string
  incrementDays: number
}

function NewTaskInput() {
  const dispatch = useAppDispatch()
  const [formState, setFormState] = useState<IFormState>({
    title: '',
    description: '',
    incrementDays: 0,
  })
  const [submitEnabled, setSubmitEnabled] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('form submitted ✅')
  }

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    const targetId = event.currentTarget.id
    const currentTargetValue: string | number | null = event.currentTarget.value
    // console.log({ currentTargetValue, targetId })

    setFormState({
      title: currentTargetValue !== null && targetId === 'task-title' ? currentTargetValue : formState.title,
      description:
        currentTargetValue !== null && targetId === 'task-description' ? currentTargetValue : formState.description,
      incrementDays:
        currentTargetValue !== null && targetId === 'increment-days'
          ? Number(currentTargetValue)
          : formState.incrementDays,
    })

    setSubmitEnabled(formState.title.length > 0 && formState.description.length > 0 && formState.incrementDays > 0)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="New Task">New task</label>
      <input id="task-title" type="text" name="task-title" placeholder="Title *" onChange={(e) => handleOnChange(e)} />
      <input
        id="task-description"
        type="text"
        name="task-description"
        placeholder="Description *"
        onChange={(e) => handleOnChange(e)}
      />
      <div id="add-days-container">
        <label>Deadline in days *</label>
        <input id="increment-days" type="number" name="days" step="1" onChange={(e) => handleOnChange(e)} />
      </div>
      <button disabled={!submitEnabled} type="submit" onClick={() => dispatch(addNewTask(formState))}>
        +
      </button>
    </form>
  )
}

export default NewTaskInput

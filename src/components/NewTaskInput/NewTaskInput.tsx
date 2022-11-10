import React, { FormEvent, useState } from 'react'
import { useAppDispatch } from '../../redux/hooks'
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
      <h1>New todo</h1>
      <label htmlFor="task-title">Title *</label>
      <input id="task-title" type="text" name="task-title" placeholder="Title" onChange={(e) => handleOnChange(e)} />
      <label htmlFor="task-description">Description *</label>
      <input
        id="task-description"
        type="text"
        name="task-description"
        placeholder="Short description"
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

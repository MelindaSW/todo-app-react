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
  // const count = useAppSelector((state) => state.tasks.value)
  const dispatch = useAppDispatch()
  const [formState, setFormState] = useState<IFormState>({
    title: '',
    description: '',
    incrementDays: 3,
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('form submitted ✅')
  }

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    const targetId = event.currentTarget.id
    const currentTarget: string | number | null = event.currentTarget.value
    console.log(targetId + ' ' + currentTarget)
    setFormState({
      title: currentTarget !== null && targetId === 'task-title' ? currentTarget : formState.title,
      description: currentTarget !== null && targetId === 'task-description' ? currentTarget : formState.description,
      incrementDays:
        currentTarget !== null && targetId === 'incrementDays' ? Number(currentTarget) : formState.incrementDays,
    })
    console.log('formstate:: ' + JSON.stringify(formState))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="New Task">New task</label>
      <input id="task-title" type="text" name="task-title" placeholder="Title *" onChange={(e) => handleOnChange(e)} />
      <input
        id="task-description"
        type="text"
        name="task-description"
        placeholder="Description"
        onChange={(e) => handleOnChange(e)}
      />
      <button type="submit" onClick={() => dispatch(addNewTask(formState))}>
        +
      </button>
    </form>
  )
}

export default NewTaskInput

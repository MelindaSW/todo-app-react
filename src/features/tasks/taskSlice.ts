import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../redux/store'
import { incrementDays } from '../../helpers/taskHelper'
import { tasks } from './tasks'

export type Task = {
  id: number
  title: string
  description: string
  deadline: Date
  created: Date
  completed: boolean
  overdue: boolean
}

export type NewTaskPayload = {
  title: string
  description: string
  incrementDays: number
}

type MarkTaskAsDonePayload = {
  done: boolean
  id: number
}

type DeleteTaskPayload = {
  task: Task
}

// Define a type for the slice state
interface TaskState {
  tasks: Task[]
}

// Define the initial state using that type
const initialState: TaskState = {
  tasks,
}

export const taskSlice = createSlice({
  name: 'tasks',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addNewTask: (state, action: PayloadAction<NewTaskPayload>) => {
      const currentDate = new Date()

      const newTask = {
        id: state.tasks.length + Math.random(),
        title: action.payload.title,
        description: action.payload.description,
        deadline: incrementDays(currentDate, action.payload.incrementDays),
        created: currentDate,
        completed: false,
        overdue: false,
      }

      state.tasks.push(newTask)
    },
    markTaskAsDone: (state, action: PayloadAction<MarkTaskAsDonePayload>) => {
      state.tasks.forEach((task) => {
        if (action.payload.id === task.id) {
          task.completed = action.payload.done
        }
      })
    },
    deleteTask: (state, action: PayloadAction<DeleteTaskPayload>) => {
      const index = state.tasks.findIndex((element: Task) => element.id === action.payload.task.id)
      if (index > -1) {
        state.tasks.splice(index, 1)
      }
    },
    setIsOverdue: (state) => {
      state.tasks.forEach((task) => {
        if (task.deadline <= new Date() && task.completed === false) {
          task.overdue = true
        } else {
          task.overdue = false
        }
      })
    },
    clearSorting: (state) => {
      state.tasks.sort((t1, t2) => (t1.id > t2.id ? 1 : -1))
    },
    sortByDone: (state) => {
      state.tasks.sort((t1, t2) => (t1.completed > t2.completed ? 1 : -1))
    },
    sortByTitle: (state) => {
      state.tasks.sort((t1, t2) => (t1.title > t2.title ? 1 : -1))
    },
    sortByOverdue: (state) => {
      state.tasks.sort((t1, t2) => (t1.overdue < t2.overdue ? 1 : -1))
    },
    sortByCreationDate: (state) => {
      state.tasks.sort((t1, t2) => (t1.created > t2.created ? 1 : -1))
    },
  },
})

export const {
  addNewTask,
  markTaskAsDone,
  deleteTask,
  setIsOverdue,
  clearSorting,
  sortByDone,
  sortByTitle,
  sortByOverdue,
  sortByCreationDate,
} = taskSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectTasks = (state: RootState) => state.tasks.tasks

export default taskSlice.reducer

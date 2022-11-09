import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../redux/store'
import { incrementDays } from '../../helpers/taskHelper'

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
  tasks: [
    {
      id: 1,
      title: 'test task',
      description: 'this is a short description',
      deadline: incrementDays(new Date(), 3),
      created: new Date(),
      completed: false,
      overdue: false,
    },
    {
      id: 2,
      title: 'test task 2',
      description: 'this description',
      deadline: incrementDays(new Date(), 7),
      created: new Date(),
      completed: true,
      overdue: false,
    },
    {
      id: 3,
      title: 'test mock task 3',
      description: 'this is another short but longer description',
      deadline: incrementDays(new Date(), 0),
      created: new Date(),
      completed: false,
      overdue: true,
    },
    {
      id: 4,
      title: 'test mock task again',
      description: 'this is another short but longer description',
      deadline: incrementDays(new Date(), 9),
      created: new Date(),
      completed: true,
      overdue: false,
    },
    {
      id: 5,
      title: 'test mock task 3',
      description: 'this is another short but longer description',
      deadline: incrementDays(new Date(), 0),
      created: new Date(),
      completed: false,
      overdue: true,
    },
    {
      id: 6,
      title: 'test mock task again',
      description: 'this is another short but longer description',
      deadline: incrementDays(new Date(), 9),
      created: new Date(),
      completed: true,
      overdue: false,
    },
  ],
}

export const taskSlice = createSlice({
  name: 'tasks',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addNewTask: (state, action: PayloadAction<NewTaskPayload>) => {
      const currentDate = new Date()

      const newTask = {
        id: state.tasks.length + 1,
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
  },
})

export const { addNewTask, markTaskAsDone, deleteTask } = taskSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectTasks = (state: RootState) => state.tasks.tasks

export default taskSlice.reducer

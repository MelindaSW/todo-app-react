import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../redux/store'
import { incrementDays } from '../../helpers/taskHelper'

type Task = {
  id: number
  name: string
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

// Define a type for the slice state
interface TaskState {
  tasks: Task[]
}

// Define the initial state using that type
const initialState: TaskState = {
  tasks: [
    // {
    //   id: 1,
    //   name: 'test task',
    //   description: 'this is a short description',
    //   deadline: new Date(),
    //   created: new Date(),
    //   completed: false,
    //   overdue: false,
    // },
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
        name: action.payload.title,
        description: action.payload.description,
        deadline: incrementDays(currentDate, action.payload.incrementDays),
        created: currentDate,
        completed: false,
        overdue: false,
      }

      state.tasks.push(newTask)
      for (let i = 0; i < state.tasks.length; i++) {
        console.log(JSON.stringify(state.tasks[i]))
      }
    },
  },
})

export const { addNewTask } = taskSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.tasks.value
export const selectTasks = (state: RootState) => state.tasks.tasks

export default taskSlice.reducer

// increment: (state) => {
//   state.value += 1
// },
// decrement: (state) => {
//   state.value -= 1
// },
// // Use the PayloadAction type to declare the contents of `action.payload`
// incrementByAmount: (state, action: PayloadAction<number>) => {
//   state.value += action.payload
// },

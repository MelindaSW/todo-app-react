import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import NewTaskInput from './components/NewTaskInput/NewTaskInput'
import TaskTable from './components/TaskTable/TaskTable'

import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">My todos</header>
        <NewTaskInput />
        <TaskTable />
      </div>
    </Provider>
  )
}

export default App

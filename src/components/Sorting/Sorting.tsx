import React from 'react'
import {
  clearSorting,
  sortByDone,
  sortByTitle,
  sortByOverdue,
  sortByCreationDate,
} from '../../features/tasks/taskSlice'
import { useAppDispatch } from '../../redux/hooks'
import './Sorting.css'

const Sorting = () => {
  const dispatch = useAppDispatch()

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.currentTarget.id) {
      case 'clear':
        dispatch(clearSorting())
        break
      case 'done':
        dispatch(sortByDone())
        break
      case 'title':
        dispatch(sortByTitle())
        break
      case 'overdue':
        dispatch(sortByOverdue())
        break
      case 'created':
        dispatch(sortByCreationDate())
        break
    }
  }

  return (
    <div>
      <form>
        <fieldset>
          <legend>Sort by:</legend>
          <div className="radiobtns">
            <input type="radio" id="clear" name="sortbtn" value="clear" onChange={(e) => handleOnChange(e)} />
            <label htmlFor="clear">Clear</label>
          </div>

          <div className="radiobtns">
            <input type="radio" id="done" name="sortbtn" value="done" onChange={(e) => handleOnChange(e)} />
            <label htmlFor="done">Done</label>
          </div>

          <div className="radiobtns">
            <input type="radio" id="title" name="sortbtn" value="title" onChange={(e) => handleOnChange(e)} />
            <label htmlFor="title">Title</label>
          </div>

          <div className="radiobtns">
            <input type="radio" id="overdue" name="sortbtn" value="overdue" onChange={(e) => handleOnChange(e)} />
            <label htmlFor="overdue">Overdue</label>
          </div>

          <div className="radiobtns">
            <input type="radio" id="created" name="sortbtn" value="created" onChange={(e) => handleOnChange(e)} />
            <label htmlFor="datecreated">Created</label>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default Sorting

import { incrementDays, decrementDays } from '../../helpers/taskHelper'
export const tasks = [
  {
    id: 1,
    title: 'Organize storage',
    description: 'Pack and sort things in the new boxes and sweep the floor.',
    deadline: incrementDays(new Date(), 1),
    created: new Date(),
    completed: false,
    overdue: false,
  },
  {
    id: 2,
    title: 'Drive boxes to goodwill',
    description: 'Take the boxes from the spring cleaning to the second hand store for donation.',
    deadline: incrementDays(new Date(), 7),
    created: decrementDays(new Date(), 6),
    completed: true,
    overdue: false,
  },
  {
    id: 3,
    title: 'Book moving company',
    description: 'Decide what offer to accept and book the company with the best reviews and offer.',
    deadline: decrementDays(new Date(), 1),
    created: decrementDays(new Date(), 4),
    completed: false,
    overdue: false,
  },
  {
    id: 4,
    title: 'Buy more bubble wrap',
    description: 'Order two more rolls.',
    deadline: incrementDays(new Date(), 9),
    created: decrementDays(new Date(), 3),
    completed: false,
    overdue: false,
  },
]

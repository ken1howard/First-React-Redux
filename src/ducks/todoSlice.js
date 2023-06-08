import { creatSlice } from '@redux/toolkit'

const initialState = {
    items: []
}

export const todoSlice = creatSlice ({
    name: 'todos',
    initialState,
    reducers: {
        addToDo: (state, action) => {
            return { items: [...state.items, action.payload]}
        },
        removeOne: (state, action) => {
            console.log(action)
            let array = [...state.items]
            let index = action.payload
            if(index !== -1) {
                array.splice(index, 1)
                return { items: array }
            }
        },
        clearTodo: () => {
            return { items: [] }
        }
    }
})

export const { addToDo, removeOne, clearTodo } = todoSlice.actions

export default todoSlice.reducer
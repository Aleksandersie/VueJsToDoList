export default {
    actions:{},
    mutations:{
        createTask(state, newTask){
            state.todos.push(newTask)
            localStorage.setItem("task",JSON.stringify(state.todos))
        },
        deleteTask(state,task){
            const newArr = state.todos.filter(stateTodo=> stateTodo.todo !== task.todo)
            state.todos = [...newArr]
            localStorage.setItem("task",JSON.stringify(newArr))
        },
        editTask(state,task){
            for (let i = 0; i < state.todos.length; i++){
               if (state.todos[i].id === task.todo.id){
               state.todos[i].todo = task.newText
               }
            }
            localStorage.setItem("task",JSON.stringify(state.todos))
            console.log(state.todos)
        }
    },
    state:{
        todos: JSON.parse(localStorage.getItem("task"))||[]
    },
    getters:{
        getTodos(state){
            return state.todos
        }
    }
}
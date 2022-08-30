import './styles.css'
import { Todo, TodoList } from './classes/index.js'
import { crearTodoHtml } from './js/componentes'

export const todoList = new TodoList()

console.log(todoList);

todoList.todos.forEach((todo) => crearTodoHtml(todo))

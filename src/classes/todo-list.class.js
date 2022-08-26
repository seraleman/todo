export class TodoList {
  constructor() {
    this.todos = []
  }

  nuevoTodo(todo) {
    this.todos.push(todo)
  }

  eliminarTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== parseInt(id))
  }

  marcarCompletado(id) {
    for (const todo of this.todos) {
      if (todo.id === parseInt(id)) {
        todo.completado = !todo.completado
        break
      }
    }
  }

  eliminarCompletados() {
    this.todos = this.todos.filter((todo) => !todo.completado)
  }
}

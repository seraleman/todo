export class Todo {
  constructor(tarea) {
    this.tarea = tarea

    this.id = new Date().getTime() //12845657985 repre de fecha
    this.completado = false
    this.creado = new Date()
  }
}

import { Injectable } from "@angular/core";
import { createTodo, getDoneTodos, getTodosInWork, Item, toggleTodoDone, deleteTodo } from "./domain";

@Injectable()
export class AppService {
  todos: Item[] = [];

  createTodo(todoName: string): Item[] {
    const todo = createTodo(todoName);

    if (todoName.trim() && todo) {
      this.todos = [...this.todos, todo];
    }
    return this.todos;
  }

  toggleTodoDone(id: number): Item[] {
    this.todos = toggleTodoDone(this.todos, id);
    return this.todos;
  }

  deleteTodo(id: number): Item[] {
    this.todos = deleteTodo(this.todos, id);
    return this.todos;
  }

  doneTodos(): number {
    return getDoneTodos(this.todos);
  }

  todosInWork(): number {
    return getTodosInWork(this.todos);
  }
}

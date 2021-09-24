import { ListItemComponent } from "../ListItem/listItem.component";
import { Item } from "./todo";

export function getDoneTodos(todos: Item[]): number {
  return todos.reduce((doneCount, todo) => (
    todo.done ? doneCount + 1 : doneCount
  ), 0);
}

export function getTodosInWork(todos: Item[]): number {
  return todos.reduce((inWorkCount, todo) => (
    !todo.done ? inWorkCount + 1 : inWorkCount
  ), 0);
}

// todo Item and ListItemComponent shouldn't be in domain
export function createTodo(todoName: string): Item {
  return new Item(
    ListItemComponent,
    todoName,
    Date.now(),
    false,
  );
}

export function toggleTodoDone(todos: Item[], id: number): Item[] {
  return todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        done: !todo.done,
      }
    }
    return todo;
  });
}

export function deleteTodo(todos: Item[], id: number): Item[] {
  return todos.filter((todo) => todo.id !== id);
}

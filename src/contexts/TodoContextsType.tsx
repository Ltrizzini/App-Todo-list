import {Todo} from "../components/models/Todo";

export interface TodoContextxType {
    todos: Todo[];
    addTodo (title:string): void;
    removeTodo(todo: Todo): void;
    toggle(todo: Todo): void;
}
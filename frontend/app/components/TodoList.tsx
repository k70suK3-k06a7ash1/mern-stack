import { TodoItem } from "./TodoItem";

interface Todo {
	id: number;
	text: string;
	completed: boolean;
}

interface TodoListProps {
	todos: Todo[];
	toggleTodo: (id: number) => void;
	deleteTodo: (id: number) => void;
}

export const TodoList = ({ todos, toggleTodo, deleteTodo }: TodoListProps) => {
	return (
		<ul>
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					toggleTodo={toggleTodo}
					deleteTodo={deleteTodo}
				/>
			))}
		</ul>
	);
};

interface TodoItemProps {
	todo: {
		id: number;
		text: string;
		completed: boolean;
	};
	toggleTodo: (id: number) => void;
	deleteTodo: (id: number) => void;
}

export const TodoItem = ({ todo, toggleTodo, deleteTodo }: TodoItemProps) => {
	return (
		<li>
			<label>
				<input
					type="checkbox"
					checked={todo.completed}
					onChange={() => toggleTodo(todo.id)}
				/>
				<span
					style={{ textDecoration: todo.completed ? "line-through" : "none" }}
				>
					{todo.text}
				</span>
			</label>
			<button type="button" onClick={() => deleteTodo(todo.id)}>
				Delete
			</button>
		</li>
	);
};

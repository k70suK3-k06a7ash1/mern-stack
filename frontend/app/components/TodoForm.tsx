import { useState } from "react";

interface TodoFormProps {
	addTodo: (text: string) => void;
}

export const TodoForm = ({ addTodo }: TodoFormProps) => {
	const [text, setText] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (text.trim() !== "") {
			addTodo(text);
			setText("");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Add todo"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button type="submit">Add</button>
		</form>
	);
};

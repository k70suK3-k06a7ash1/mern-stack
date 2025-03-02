import { useState, useEffect } from "react";
import connectToMongoDB from "../../server";
import { TodoList } from "../components/TodoList";
import { TodoForm } from "../components/TodoForm";

interface Todo {
	id: number;
	text: string;
	completed: boolean;
}

export default function Home() {
	const [todos, setTodos] = useState<Todo[]>([
		{ id: 1, text: "Learn React Router", completed: true },
		{ id: 2, text: "Build a Todo App", completed: false },
	]);

	const addTodo = (text: string) => {
		const newTodo: Todo = {
			id: todos.length + 1,
			text: text,
			completed: false,
		};
		setTodos([...todos, newTodo]);
	};

	const toggleTodo = (id: number) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo,
			),
		);
	};

	const deleteTodo = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	useEffect(() => {
		async function fetchData() {
			const db = await connectToMongoDB();
			if (db) {
				console.log("Successfully connected to MongoDB!");
			}
		}
		fetchData();
	}, []);

	return (
		<div className="container mx-auto mt-4">
			<h1 className="text-2xl font-bold mb-4">Todo App</h1>
			<TodoForm addTodo={addTodo} />
			<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
		</div>
	);
}

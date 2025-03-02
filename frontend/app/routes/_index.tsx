import { useState } from "react";
import connectToMongoDB from "../db.server";
import { TodoList } from "../components/TodoList";
import { TodoForm } from "../components/TodoForm";
import { useLoaderData } from "react-router";
import type { LoaderFunction } from "react-router";

interface Todo {
	id: number;
	text: string;
	completed: boolean;
}

export const loader: LoaderFunction = async () => {
	const db = await connectToMongoDB();
	if (db) {
		console.log("Successfully connected to MongoDB!");
	}
	return null;
};

export default function Home() {
	useLoaderData();
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

	return (
		<div className="container mx-auto mt-4">
			<h1 className="text-2xl font-bold mb-4">Todo App</h1>
			<TodoForm addTodo={addTodo} />
			<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
		</div>
	);
}

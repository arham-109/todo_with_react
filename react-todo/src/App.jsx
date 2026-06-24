import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [desc, setdesc] = useState("");

  const [todos, setTodos] = useState([]);

  const handleCreate = () => {
    if (!title) {
      alert("Enter Title");
      return;
    }

    if (!desc) {
      alert("Enter Description");
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: title,
      description: desc,
    };

    setTodos([...todos, newTodo]);
    setTitle("");
    setdesc("");
  };
  const Delete_todo = (time) => {
    const filtered_todos = todos.filter((todo) => {
      return todo.id !== time;
    });

    setTodos(filtered_todos);
  };

  const Edit_todo = (time) => {
    const newTitle = prompt("Enter new title:");
    const newDesc = prompt("Enter new description:");

    if (!newTitle || !newDesc.trim()) return;

    const updated_todos = todos.map((todo) => {
      if (todo.id === time) {
        return { ...todo, title: newTitle, description: newDesc };
      }
      return todo;
    });

    setTodos(updated_todos);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 p-6">
      <div className="text-2xl font-bold mb-16">
        <h1>TODO LIST WITH REACT</h1>
      </div>

      <input
        required
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded-2xl text-center w-80 outline-none bg-white"
      />

      <textarea
        required
        placeholder="Enter Description"
        value={desc}
        onChange={(e) => setdesc(e.target.value)}
        className="border w-80 h-32 resize-none text-center mt-6 p-2 rounded-2xl outline-none bg-white"
      ></textarea>

      <button
        onClick={handleCreate}
        className="mt-6 bg-amber-800 text-white px-6 p-2 rounded-2xl font-semibold hover:bg-amber-900 transition-colors w-80"
      >
        Add Todo
      </button>

      <div className="mt-12 w-80 text-center">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="border p-4 rounded-2xl bg-white shadow-sm mb-4"
          >
            <h3 className="font-bold text-lg text-amber-950">{todo.title}</h3>
            <p className="text-gray-600 mt-1 wrap-break-word">
              {todo.description}
            </p>
            <div className="flex flex-row gap-4 mt-4 justify-center items-center">
              <button
              onClick={() => Delete_todo(todo.id)}
              className="mt-1 rounded bg-amber-800 text-white hover:bg-amber-900 p-2 w-20"
            >
              Delete
            </button>
            <button
              onClick={() => Edit_todo(todo.id)}
              className="mt-1 rounded bg-amber-800 text-white hover:bg-amber-900 p-2 w-20"
            >
              Edit
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

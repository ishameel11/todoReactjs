import { useEffect, useState } from "react";
import "./App.css";
import { AiOutlineClose } from "react-icons/ai";

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  // State to manage input value
  const [inputValue, setInputValue] = useState("");

  // Function to handle adding todo
  const addTodo = () => {
    if (inputValue === "") {
      alert("Write something about your today's task.");
    }
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  // Function to handle removing todo
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="flex bg-[#E5EDC4] justify-center h-screen items-center">
      <div className="bg-[#934662] pt-10 pb-16 sm:px-36 px-2 border-none rounded-full flex flex-col justify-center items-center">
        <h1 className="text-[#E5EDC4] sm:text-4xl text-xl font-bold">
          My To-do List
        </h1>
        <div className="">
          <div className="flex my-4 px-4">
            <input
              className="border-none rounded-l-full py-2 sm:px-10 px-4 font-semibold"
              type="text"
              placeholder="What is the task today?"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="button"
              className="text-[#934662] font-semibold hover:bg-[#f6f8e9] bg-[#E5EDC4] text-lg py-2 px-4 border-none rounded-r-full"
              onClick={addTodo}
            >
              Add
            </button>
          </div>
          <div className="flex justify-center items-center">
            <ul>
              {todos.map((todo, index) => (
                <div className="justify-between flex sm:gap-48 gap-32 items-center">
                  <li key={index} className="text-[#E5EDC4] font-semibold">
                    {todo}
                  </li>
                  <button
                    className="text-[#E5EDC4] hover:bg-[#BB6F8B] text-lg py-2 px-4 border-none rounded-full"
                    onClick={() => removeTodo(index)}
                  >
                    <AiOutlineClose />{" "}
                  </button>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

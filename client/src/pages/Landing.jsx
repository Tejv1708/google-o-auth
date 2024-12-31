import { useEffect, useState } from "react";
import axios from "axios";
import CreateTodo from "./CreateTodo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Landing = () => {
  const [todo, setTodo] = useState([]);
  const todos = useSelector(state => state.todos)

  useEffect(() => {
    const fetchTodo = async () => {
      const { data } = await axios.get("/api/todos");
      console.log("data:", data);
      setTodo(data);
    };
    fetchTodo();
  }, []);

  return (
    <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Todo List</h1>
  { todos.isLoading ? <div> Loading... </div> : 
    <div className="overflow-x-auto"> 
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b text-left">Title</th>
            <th className="py-2 px-4 border-b text-left">Description</th>
            <th className="py-2 px-4 border-b text-left">Complete</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((el, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{el.title}</td>
              <td className="py-2 px-4 border-b">{el.description}</td>
              <td className="py-2 px-4 border-b">
                {el.complete ? "Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
}
   <Link className="t-4 w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300" to={'createTodo'}>Create Todo +</Link>
  </div>
  );
};

export default Landing;
 
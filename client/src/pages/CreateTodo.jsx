import React, { useState } from "react";
import { createTodo } from "../features/todoSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const CreateTodo = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate() ;

  function handleClick() {
    dispatch(createTodo({ title, description }));
    console.log({ title, description });
    setTitle("");
    setDescription("");
    navigate(-1);
  }

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <div>
        <label className="block text-gray-700 font-bold mb-2">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-bold mb-2">
          Description
        </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="block w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={handleClick}
        className="mt-4 w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
      >
        Create +
      </button>
    </div>
  );
};

export default CreateTodo;

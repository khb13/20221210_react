import axios from "axios";
import { useEffect, useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const fetchTodos = async () => {
    /*let result = await fetch("http://localhost:4000/todos");
    let json = await result.json();

    setTodos(json);
    */

    const { data } = await axios.get("http://localhost:4000/todos");

    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = async () => {
    try {
      /*
      let result = await fetch("http://localhost:4000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: input,
          done: false,
        }),
      });
      let json = await result.json();
      console.log(json);
*/
      const result = await axios.post("http://localhost:/4000/todos", {
        text: input,
        done: false,
      });
      fetchTodos();
      setInput("");
    } catch (e) {
      console.log(e);
    }
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleToggle = (id, done) => {
    /* 
    fetch("http://localhost:4000/todos/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        done: !done,
      }),
    })
      .then(() => {
        fetchTodos();
      })
      .catch((e) => {
        console.log(e);
      });
 */

    axios
      .patch(`http://localhost:4000/todos/${id}`, {
        done: !done,
      })
      .then(() => {
        fetchTodos();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleRemove = (id) => {
    /*
    fetch(`http://localhost:4000/todos/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        fetchTodos();
      })
      .catch((e) => {
        console.log(e);
      });
      */

    axios
      .delete("http://localhost:4000/todos/" + id)
      .then(() => {
        fetchTodos();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <input type="text" onChange={handleInput} value={input} />
      <button onClick={handleSubmit}>등록</button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.done && "line-through" }}
          >
            <span onClick={() => handleToggle(todo.id, todo.done)}>
              {todo.text}
            </span>
            <button onClick={() => handleRemove(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;

import React from "react";
import TodoItem from "./TodoItem";

var style1 = {
  padding: "4px",
  borderRadius: "5px",
  border: "1px solid grey",
  outline: "none",
  fontSize: "20px",
};
var style2 = {
  marginLeft: "3px",
  padding: "4px 10px",
  borderRadius: "12px",
  cursor: "pointer",
};

function Todo() {
  const [query, setQuery] = React.useState("");
  const [task, setTask] = React.useState([]);
  const [isloading, setisloading] = React.useState(false);
  const [iserror, setiserror] = React.useState(false);
  const [page,setpage]=React.useState(1);

  React.useEffect(() => {
    gettodo(page);
  }, [page]);

  const gettodo = (page=1)=>{
    setisloading(true);
    return fetch(`https://json-server-mocker-masai.herokuapp.com/tasks?_page=${page}&_limit=4`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTask(data);
      })
      .catch((err) => {
        setiserror(true);
      })
      .finally(() => {
        setisloading(false);
      });
  }

  const addtodo = (query)=>{
    const payload = {
        title:query,
        status:false,
        id:task.length+1
    }
    setisloading(true);
    return fetch(`https://json-server-mocker-masai.herokuapp.com/tasks`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)
    })
      .then((res) => res.json())
      .then((data) => {
        return gettodo();
      })
      .catch((err) => {
        setiserror(true);
      })
      .finally(() => {
        setisloading(false);
      });
  }

  return isloading ? (
    <div>...loading</div>
  ) : iserror ? (
    <div>Something went wrong</div>
  ) : (
    <div>
      <div>
        <h1>Todo List</h1>
      </div>
      <div>
        <input
          style={style1}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Write Something"
        />
        <button onClick={()=>addtodo(query)} style={{ ...style1, ...style2 }}>Save</button>
      </div>
      <div>
        {task.map((item, index) => {
          return (
            <TodoItem
              key={item.id}
              backgroundColor={index % 3 === 0 ? "#65579d" : "#95093d"}
              {...item}
            />
          );
        })}
      </div>
      <div>
          <h2>Page {page}</h2>
          <button disabled={page===1} onClick={()=>setpage(page-1)}>Prev</button>
          <button onClick={()=>setpage(page+1)}>Next</button>
      </div>
    </div>
  );
}

export default Todo;

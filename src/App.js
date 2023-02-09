import { useState } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, title: "react를 배워봅시다." },
    { id: 2, title: "useState를 배워봅시다." },
    { id: 3, title: "자바스크립트를 배워봅시다." },
  ]);

  const [title, setTitle] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  // 추가 버튼 클릭
  const clickAddButtonHandler = (event) => {
    event.preventDefault();
    const newUser = {
      id: users.length + 1,
      title: title,
    };
    setUsers([...users, newUser]);
  };

  return (
    <form action="">
      <div>
        <div className="input-style">
          <input
            value={title}
            onChange={titleChangeHandler}
            autoFocus
            placeholder="자바스크립트를 배워봅시다."
          />
          <button onClick={clickAddButtonHandler}>추가하기</button>
        </div>
        <div className="header-style">
          <b>Todo List</b>
        </div>
        <div className="app-style">
          {users.map((item) => {
            console.log(item);
            return (
              <div key={item.id} className="component-style">
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
    </form>
  );
};

export default App;

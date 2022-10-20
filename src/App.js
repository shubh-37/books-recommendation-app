import React, { useState } from "react";
import "./styles.css";

const dataBase = {
  fiction: {
    "Harry Potter series": "5/5",
    "Lord of the Rings": "4.5/5"
  },
  selfHelp: {
    "Atomic Habits": "4.5/5",
    "Do Epic Shit": "3.5/5",
    "How to win friends and influence people": "4/5"
  },
  financial: {
    "Rich Dad Poor Dad": "4/5",
    "The Psychology Of Money": "4.5/5"
  }
};

var books = ["Harry Potter series", "Lord of the Rings"];

export default function App() {
  const [bookType, setBookType] = useState("fiction");
  function onClickHandler(event) {
    var newBookType = event.target.value;
    setBookType(newBookType);
    books = Object.keys(dataBase[newBookType]);
  }
  return (
    <div className="App container container-centre">
      <div className="mainBox"></div>
      <h1 className="mainHeading">
        <span role="img" aria-label="icon">
          📚
        </span>{" "}
        My Fav Books
      </h1>
      <p className="description">Find out my fav books of different genre</p>
      <div className="buttons">
        <button onClick={onClickHandler} value="fiction">
          Fiction
        </button>
        <button onClick={onClickHandler} value="selfHelp">
          Self-help Books
        </button>
        <button onClick={onClickHandler} value="financial">
          Financial
        </button>
      </div>
      <hr />
      <ul style={{ listStyleType: "none" }}>
        {books.map((book) => {
          return (
            <li
              key={book}
              style={{
                textAlign: "left",
                border: "1px solid black",
                marginBottom: "0.5rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ padding: "1rem", fontSize: "large" }}>{book}</div>
              <div style={{ padding: "1rem", fontSize: "large" }}>
                {dataBase[bookType][book]}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

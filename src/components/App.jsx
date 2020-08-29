import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [Notes, UpdateNotes] = useState([]);

  function AddToNotes(newNote) {
    UpdateNotes(function(prevItem) {
      return [...prevItem, newNote];
    });
  }

  function DeleteItem(id) {
    UpdateNotes(prevItem => {
      return Notes.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea WhenAdd={AddToNotes} />
      {Notes.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            deleter={DeleteItem}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;

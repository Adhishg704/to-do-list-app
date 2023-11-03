import React from "react";
import './App.css';
import Heading from "./components/Heading";
import UserListForm from "./components/UserListForm";

function App() {
  return (
    <div className="container">
      <Heading />
      <UserListForm />
    </div>
  );
}

export default App;

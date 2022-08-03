import React from 'react';
import './App.css';
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";
import { useSelector } from "react-redux";
 

function App() {
  const {items} = useSelector(store => store.todo);

  React.useEffect( () => {
    localStorage.setItem("items", JSON.stringify(items))
  },[items])
  
  return (
    <div className="App">
      <Header />
      <Form />
      <List />  
      {/* <Footer />     */}
    </div>
  );
}

export default App;

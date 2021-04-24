import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";

 

const Lightmode = () => {
 
  const [value, setValue] = useState("");
  const [darkMode,setDarkMode] =  useState(false)
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [category, setCategory] = useState("all");
   
  const getLocalStorage = () => {
    if (localStorage.getItem("list") === null)
      localStorage.setItem('list', JSON.stringify([]));
    else {
      let listFromStorage = JSON.parse(localStorage.getItem('list'));
      setList(listFromStorage)
    }
  }; 

  const changeTheme = ()=>{
    let body = document.querySelector('body');
    setDarkMode(!darkMode);
     body.classList.toggle('dark')
  }

  
  // for deleting the completed todos for the list
 const deleteComplete=()=>{
  let activeList = filteredList.filter((item)=>{
    return item.isActive === true 
  })
  setList(activeList)
 }


  useEffect(() => {
    filterHandler();
  }, [list, category]);

  useEffect(() => {
    getLocalStorage()
  }, []);


  useEffect(()=>{
    // to store the list on localStorage
      localStorage.setItem('list', JSON.stringify(list));
  },[list,category])

  // for marking the todo as active or complete
  const handleComplete = (id) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return { ...item, isActive: !item.isActive };
        }
        return item;
      })
    );
  };

  // the control buttons function
  const filterHandler = () => {
    // action for active todos
    if (category === "active") {
      setFilteredList(
        list.filter((item) => {
          return item.isActive === true;
        })
      );
    }
    // action for completed todos 
    else if (category === "completed") {
      setFilteredList(list.filter((item) => item.isActive === false));
    }
    // action for clearing completed todos
    else if (category === "clear completed") {
      const newList = list.filter((item) => item.isActive === true);
      setFilteredList(newList);
    } 
    // for all todo both active and completed
    else {
      return setFilteredList(list);
    }
  };

  // delete todo item on clicking the cross
  const removeItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  // adds item to the todo list
  const addToList = (e) => {
    e.preventDefault();
    if (value) {
      const item = {
        value,
        id: new Date().getTime().toString(),
        isActive: true,
      };
      setList([...list, item]);
      setValue("");
    }
  };
  

  return (
    <>
      <div className="main-con">
        <header className="header">
          <div>
            <h4>todo</h4>
            <img src={darkMode?sun:moon} alt={`${darkMode?'sun':'moon'}`} onClick={changeTheme} />
          </div>
          <form className="header-form" onSubmit={addToList}>
            <input
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              className="input"
              type="text"
              placeholder="create a new todo..."
            ></input>
          </form>
        </header>
        <ItemList
          setCategory={setCategory}
          list={list}
          removeItem={removeItem}
          handleComplete={handleComplete}
          filteredList={filteredList}
          deleteComplete={deleteComplete}
        />
      </div>
    </>
  );
};

export default Lightmode;

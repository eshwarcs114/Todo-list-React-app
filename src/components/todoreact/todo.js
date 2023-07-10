import React, { useState , useEffect } from "react";
import "./style.css";
const getLocalData = () =>{
    const lists = localStorage.getItem("todoList");
    if(lists){
        return JSON.parse(lists);
    } else {
        return [];
    }
}
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [isEditItem, setIsEditItem] = useState("");
  const [toggleButton, setToggleButton] = useState("");
  const addItem = () => {
    if (!inputData) {
      alert("please add task");
    } else if(inputData && toggleButton) {
        setItems(
            items.map((currElem)=>{
                if(currElem.id == isEditItem){
                    return {...currElem, name:inputData}
                }
                return currElem
            })
        )
        setInputData("")
        setIsEditItem('');
        setToggleButton(false);

    } else {
        const newInput = {
            id : new Date().getTime().toString(),
            name : inputData
        }
      setItems([...items, newInput]);
    }
  };
  const deleteItem = (index) =>{
    const updatedItems = items.filter((item) =>{
        return item.id !== index
    });
    setItems(updatedItems)
  };
  const editItem = (index) =>{
    const editItem = items.filter((item) =>{
        return item.id == index
    });
    console.log(editItem[0],'this is edit item')
    setInputData(editItem[0].name)
    setIsEditItem(index);
    setToggleButton(true);
  };
  useEffect(()=>{
    console.log('this is use effect')
    localStorage.setItem("todoList",JSON.stringify(items));
  },[items]);
  const removeAll = () =>{ 
    setItems([]);
  }
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/checklist-1295319_1280.webp" alt="" />
            <figcaption>Add your list here</figcaption>
          </figure>
          <div className="addItems">
            <input
              id='taskInputField'
              type="text"
              placeholder="Add items"
              className="form-control"
              value={inputData}
              onChange={(event) => {
                console.log(event,'this is the event');
                setInputData(event.target.value);
                console.log(inputData, "this is input data");
              }}
            />{toggleButton ? (<i onClick={addItem} className="far fa-edit add-btn"></i>) : (<i onClick={addItem} className="fa solid fa-plus"></i>) }
            
          </div>
          <div className="showItems" >
            {items.map((item) => {
              return (
                <div className="eachItem" key={item.id}>
                  <h3>{item.name}</h3>
                  <i onClick ={()=> editItem(item.id)} className="far fa-edit add-btn"></i>
                  <i onClick ={()=> deleteItem(item.id)} className="far fa-trash-alt add-btn"></i>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button  onClick={removeAll} className="btn effect04" data-sm-link-text="Remove All">
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;

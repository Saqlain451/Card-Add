import React, { useState } from "react";
import Card from "./Component/Card/Card";
const App = () => {
  const [change, setChange] = useState();
  const [subChange,setSubChange] = useState([]);
  const changeHandle = (e)=>{
    setChange(e.target.value);
  }
  const delHandler =(id)=>{
    const newList = [...subChange]
    newList.splice(id,1)
    setSubChange(newList);
  }
  return (
    <>
      <input
        type="text"
        placeholder="Enter the title"
        name="change"
        value={change}
        onChange={changeHandle}
      />
      <button onClick={()=>{setSubChange([...subChange,change])}}>add</button>
      {subChange.map((elem,index)=>{
        return(
          <Card title = {elem} key={index} delClick={delHandler} index={index}/>
        )
      })}
    </>
  );
};

export default App;

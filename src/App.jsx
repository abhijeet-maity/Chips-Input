import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {

  const [chipsArr, setChipsArr] = useState([]);
  const [inputText, setInputText] = useState("");
  const [bgColor, setBgColor] = useState("lightGray");


  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputText);
    if(inputText.trim() !== "") {
      const newChip = { text: inputText, color: randomBgColor() };
      setChipsArr((prev) => {
        return [newChip, ...prev];
      })
      console.log(chipsArr);
      setInputText("");
    } else {
      toast.error("Please Enter Some Chips to Display");
    }
  }

  function removeChip(index) {
    setChipsArr((prev) => {
      return (prev.filter((_,i) => {
        return index !== i;
      }))
    })
  }

  function randomBgColor() {
    console.log("Color Generated");
    const colorArray = ["#8FBC8F","#E9967A","#9932CC","#7FFFD4","#00FFFF","#FF7F50","#00BFFF","#FFD700","#90EE90","#FFC0CB","#DDA0DD","#B0E0E6"]
    let index = Math.floor(Math.random() * colorArray.length);
    console.log(index);
    return colorArray[index];
  }

  return (
    <div className='app'> 
      <h1>Chips Input </h1>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="textInput"></label>
        <input className="searchBar" value={inputText} type="text" placeholder='Type & hit Enter' name='textInput' onChange={(e) => {setInputText(e.target.value)}}/>
      </form>
      <div className="chips-container">
        {chipsArr.map((chips,index) => {
          return (
            <span className="chips" style={{backgroundColor: chips.color}} key={index}>
              {chips.text}{"  "}
              <button className='btn' onClick={() => {removeChip(index)}}>&#x2715;</button>
            </span>
          )
        })}
      </div>
      <ToastContainer />
    </div>
  )
}

export default App

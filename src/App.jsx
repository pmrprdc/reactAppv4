import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [formState, setFormState] = useState("")
  const [display, setDisplay] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplay(formState)
    setFormState("")
  }

  const handleChange = (e) => {
    e.preventDefault()
    setFormState(e.target.value)
  }

  const clickHandler = (e) => {
    
    console.log(e)
    setFormState("")
    setDisplay("")
  }
  console.log(formState)
  return (
    <div className="App">
      {display !== "" && <h1>Wow you are {display}!  That is {parseInt(display) * 365} days +</h1>}
      {display === "" && <h1>How old are u</h1> }
      <form onSubmit={handleSubmit}>
      {display === "" &&  <input value={formState} onChange={handleChange} type="text"></input> }
      {display === "" &&  <button type="submit">So What?</button> }
      </form>
     {display !== "" && <button onClick={clickHandler} >Great</button>}
    </div>
  )
}

export default App

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
  console.log(formState)
  return (
    <div className="App">
      <h1>{display}</h1>
      <h1>How old are u</h1>
      <form onSubmit={handleSubmit}>
        <input value={formState} onChange={handleChange} type="text"></input>
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default App

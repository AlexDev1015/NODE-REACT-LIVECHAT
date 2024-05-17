import { useState } from 'react'

import './App.css'

import { MainContainer } from './components/mainContainer/mainContent'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <MainContainer/>
    </>
  )
}

export default App

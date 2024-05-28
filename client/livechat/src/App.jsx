import { useEffect, useState } from 'react'

import './App.css'

import { MainContainer } from './components/mainContainer/mainContent'
import { clientSocket } from './partials/clientSocketConnection'



function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <MainContainer/>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/componentes/header/Header'
import Body from './assets/componentes/body/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='body_app'>
        <Header/>
        <Body/>
      </div>
    </>
  )
}

export default App

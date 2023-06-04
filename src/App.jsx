import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import FormUser from './components/FormUser'

function App() {
    const [showForm, setShowForm] = useState(false)
    const [setUpdate, setSetUpdate] = useState(false)



  return (
    <section> 
        
       

        <Navbar setShowForm={setShowForm} showForm={showForm} />
        <Home setShowForm={setShowForm} setSetUpdate={setSetUpdate} />
        <FormUser setUpdate={setUpdate} setSetUpdate={setSetUpdate} setShowForm={setShowForm} showForm={showForm} />
       
    </section>
  )
}

export default App

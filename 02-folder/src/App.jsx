import React from 'react'
import Card from './components/Card.jsx'

const App = () => {
  return (
    <div className="parent">
   <Card user="Harsh" age='23' img ='https://images.unsplash.com/photo-1769251296969-a4c7aa0b4478?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
   
   <Card user="shubham" age='22' img ='https://images.unsplash.com/photo-1769628027250-d2a7a5a4eb64?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
} 

export default App

          
import {useState} from 'react'
import './App.css'
import QueueForm from './components/QueueForm.jsx'
import QueueDisplay from './components/QueueDisplay.jsx'
export default function App() {

  const[queue,setQueue] = useState([]) // it is the main state which controls the app so it has to be rendered accordingly in sync with other states

  const addToQueue = (customerInfo) => {
    setQueue([...queue, {...customerInfo,id:Date.now() ,status:"waiting"}])
    
  }

  const updateStatus = (id,newStatus) => {
    setQueue(
      queue.map((customer) => (
        customer.id == id ? {...customer, status:newStatus } : customer
      ))
    )
  }

  const removeFromQueue = (id) => {
    setQueue(queue.filter( (customer) => customer.id!==id))
  }

  return (
    <>
      <div className='app'>
        <header>
        <h1 className='font-extrabold font-mono text-center my-8'>Queue Management Application</h1>
        <h2 className='font-extrabold font-mono text-center'>Manage your Customers Efficiently</h2>
      </header>
      <main>
        <QueueForm onAdd={addToQueue}/>
        <QueueDisplay 
          queue={queue}
          onUpdateStatus={updateStatus}
          onRemove={removeFromQueue}/>
      </main>
      </div>
    </>
  )
}
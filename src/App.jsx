import { useState } from 'react'
import './App.css'
import Todo from './components/ToDo'
import Gitrepo from './components/GitRepo'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import 'tailwindcss/tailwind.css'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient()

function Navigation() {
  return (
    <nav className='justify-items-center mt-10'>
      <ul className='font-serif text-2xl underline text-blue-400'>
        <li className='py-3'>
           
          <Link to="/todo">Go to To-Do List</Link> 
        </li>
        <li>
        <Link to="/gitrepo">Go to Git Repo</Link>
        </li>
      </ul>
    </nav>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}> 
      <Navigation />
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/gitrepo" element={<Gitrepo />} />
        
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App

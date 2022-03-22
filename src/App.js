import React from 'react'
import { ToastContainer } from 'react-toastify'

import Register from './components/Register'
import Loading from './components/Loading'
import { LoadingProvider } from './contexts/Loading'

import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <LoadingProvider>
      <Loading />
      <div className='container'>
        <div className='form-wrapper'>
          <div className='App'>
            <h1>Register</h1>
            <Register />
            <ToastContainer
              autoClose={3000}
              className='toast-container'
              theme='dark'
            />
          </div>
        </div>
      </div>
    </LoadingProvider>
  )
}

export default App

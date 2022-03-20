import React from 'react'

import Register from './components/Register'
import Loading from './components/Loading'
import { LoadingProvider } from './contexts/Loading'

function App() {
  return (
    <LoadingProvider>
      <Loading />
      <div className='container'>
        <div className='form-wrapper'>
          <div className='App'>
            <h1>Register</h1>
            <Register />
          </div>
        </div>
      </div>
    </LoadingProvider>
  )
}

export default App

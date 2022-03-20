import React, { createContext, useState } from 'react'

export const Loading = createContext()

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  function setLoading(load) {
    setIsLoading(!load)
  }

  return (
    <Loading.Provider value={{ setLoading, isLoading }}>
      {children}
    </Loading.Provider>
  )
}

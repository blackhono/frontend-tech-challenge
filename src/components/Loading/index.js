import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { Container } from './styled'
import { Loading } from '../../contexts/Loading'

export default function LoadingComponent() {
  const { isLoading } = useContext(Loading)
  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (!isLoading) return <></>
  return (
    <Container>
      <div />
      <span>Carregando...</span>
    </Container>
  )
}

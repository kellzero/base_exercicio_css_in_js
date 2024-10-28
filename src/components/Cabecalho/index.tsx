import styled from 'styled-components'

const EstiloCabeca = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`

const Cabecalho = () => {
  return (
    <EstiloCabeca>
      <h1>EBAC Jobs</h1>
    </EstiloCabeca>
  )
}

export default Cabecalho

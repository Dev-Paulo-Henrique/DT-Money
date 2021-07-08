import { Summary } from '../Summary'
import { Container } from './styles'
import { TransactionTable } from '../TransactionTable/index'

export function Dashboard() {
  return (
    <Container>
      <Summary/>
      <TransactionTable/>
    </Container>
  )
}
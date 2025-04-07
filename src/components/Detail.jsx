import { Alert } from 'react-bootstrap'

const Detail = (props) => (
  <Alert variant="success">
    {props.valoreDiSelected || 'Nessun valore selezionato'}
  </Alert>
)

export default Detail

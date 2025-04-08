import { ListGroup } from 'react-bootstrap'

const Table = function (props) {
  // state = {
  //   selected: undefined, // 'Uno', 'Due' o 'Tre'
  // }

  // ora Table non dialoga più con il PROPRIO state (perchè non esiste più!)
  // dovrebbe invece riuscire a modificare lo state di App
  // per farlo, App ha predisposto un metodo che si chiama changeAppState
  // e lo sta passando come prop a Table

  const checkSelected = (value) =>
    value === props.valoreDiSelected ? 'selected' : ''

  return (
    <>
      <ListGroup className="text-dark">
        <ListGroup.Item
          onClick={() => props.metodoPerCambiareAppState('Uno')}
          className={checkSelected('Uno')}
        >
          Uno
        </ListGroup.Item>
        <ListGroup.Item
          onClick={() => props.metodoPerCambiareAppState('Due')}
          className={checkSelected('Due')}
        >
          Due
        </ListGroup.Item>
        <ListGroup.Item
          onClick={() => props.metodoPerCambiareAppState('Tre')}
          className={checkSelected('Tre')}
        >
          Tre
        </ListGroup.Item>
      </ListGroup>
      <p className="mt-3">
        Stato del componente: {props.valoreDiSelected || 'undefined'}
      </p>
    </>
  )
}

export default Table

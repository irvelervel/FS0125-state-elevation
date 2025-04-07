import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class Table extends Component {
  // state = {
  //   selected: undefined, // 'Uno', 'Due' o 'Tre'
  // }

  // ora Table non dialoga più con il PROPRIO state (perchè non esiste più!)
  // dovrebbe invece riuscire a modificare lo state di App
  // per farlo, App ha predisposto un metodo che si chiama changeAppState
  // e lo sta passando come prop a Table

  checkSelected = (value) =>
    value === this.props.valoreDiSelected ? 'selected' : ''

  render() {
    return (
      <>
        <ListGroup className="text-dark">
          <ListGroup.Item
            onClick={() =>
              this.props.metodoPerCambiareAppState({ selected: 'Uno' })
            }
            className={this.checkSelected('Uno')}
          >
            Uno
          </ListGroup.Item>
          <ListGroup.Item
            onClick={() =>
              this.props.metodoPerCambiareAppState({ selected: 'Due' })
            }
            className={this.checkSelected('Due')}
          >
            Due
          </ListGroup.Item>
          <ListGroup.Item
            onClick={() =>
              this.props.metodoPerCambiareAppState({ selected: 'Tre' })
            }
            className={this.checkSelected('Tre')}
          >
            Tre
          </ListGroup.Item>
        </ListGroup>
        <p className="mt-3">
          Stato del componente: {this.props.valoreDiSelected || 'undefined'}
        </p>
      </>
    )
  }
}

export default Table

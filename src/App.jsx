import './App.css'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from 'react-bootstrap'
import Table from './components/Table'
import Detail from './components/Detail'
import { Component } from 'react'

class App extends Component {
  // sposto lo state da Table ad App
  state = {
    selected: undefined, // 'Uno', 'Due' o 'Tre'
  }

  // l'unico modo di cambiare selected nello stato è utilizzare this.setState()
  // se voglio rendere <Table /> capace di cambiare lo state di App, devo fornire
  // a Table il metodo per farlo!
  // Table non riceverà solo il VALORE dello stato di App, ma anche il METODO per
  // MODIFICARLO!

  changeAppState = (newStateObject) => {
    // questo è l'UNICO modo per cambiare lo stato di App!
    // newStateObject è il nuovo oggetto di stato che viene passato al click
    // dei 3 bottoni: "Uno", "Due", o "Tre"
    // è un oggetto es. {selected: 'Uno'}
    this.setState(newStateObject)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                {/* sto fornendo a Table il modo di cambiare il MIO stato (App) */}
                <Table
                  metodoPerCambiareAppState={this.changeAppState} // modo per cambiarlo
                  valoreDiSelected={this.state.selected} // valore attuale
                />
              </Col>
              <Col className="my-auto">
                <Detail
                  valoreDiSelected={this.state.selected} // valore attuale
                />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    )
  }
}

export default App

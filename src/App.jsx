import './App.css'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from 'react-bootstrap'
import Table from './components/Table'
import Detail from './components/Detail'
import { useState } from 'react'

const App = function () {
  // sposto lo state da Table ad App
  // state = {
  //   selected: undefined, // 'Uno', 'Due' o 'Tre'
  // }

  const [selected, setSelected] = useState(undefined)

  // l'unico modo di cambiare selected nello stato è utilizzare this.setState()
  // se voglio rendere <Table /> capace di cambiare lo state di App, devo fornire
  // a Table il metodo per farlo!
  // Table non riceverà solo il VALORE dello stato di App, ma anche il METODO per
  // MODIFICARLO!

  const changeAppState = (newValue) => {
    // questo è l'UNICO modo per cambiare lo stato di App!
    // newValue è "Uno", "Due", o "Tre"
    setSelected(newValue)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col>
              {/* sto fornendo a Table il modo di cambiare il MIO stato (App) */}
              <Table
                metodoPerCambiareAppState={changeAppState} // modo per cambiarlo
                valoreDiSelected={selected} // valore attuale
              />
            </Col>
            <Col className="my-auto">
              <Detail
                valoreDiSelected={selected} // valore attuale
              />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  )
}

export default App

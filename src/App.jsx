import { useState } from 'react'
import './App.css'
import {Modal} from "./components/Modal.jsx";
import {Guide} from "./components/Guide";

function App() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal((prev) => !prev)
    };

    return (
      <div className="container-fluid d-flex h-100">
          <div className="row align-self-center w-100 m-0">
              <div className="col-auto mx-auto">
                  <button className="btn btn-primary btn-lg btn-dark"
                          onClick={toggleModal}
                  >
                      Mostrar EPG
                  </button>
                  { modal ? <Modal handleClose={toggleModal}>
                      <Guide />
                  </Modal> : ''}
              </div>
          </div>
      </div>
  )
}

export default App

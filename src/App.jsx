import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Modal} from "./components/modal.jsx";



function App() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal((prev) => !prev)
    };

    return (
      <div className="container-fluid d-flex h-100">
          <div className="row align-self-center w-100">
              <div className="col-6 mx-auto text-center">
                  <button className="btn btn-primary btn-lg btn-dark"
                          onClick={toggleModal}
                  >
                      Mostrar EPG
                  </button>
                  { modal ? <Modal handleClose={toggleModal}>
                      <>
                          kkk
                      </>
                  </Modal> : ''}
              </div>
          </div>
      </div>
  )
}

export default App

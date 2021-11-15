import React, {useState} from 'react';
import Modal from "./Modal";

function ModalApp(props) {
    const [modalActive, setModalActive] = useState(false)
    return (
        <div>
            <button onClick={()=>setModalActive(true)}>
                Open modal window
            </button>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur et illo laborum molestiae nam rerum!</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur et illo laborum molestiae nam rerum!</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur et illo laborum molestiae nam rerum!</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur et illo laborum molestiae nam rerum!</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur et illo laborum molestiae nam rerum!</div>
            <Modal active={modalActive} setActive={setModalActive}>
                Modal window is active
                </Modal>
        </div>
    );
}

export default ModalApp;
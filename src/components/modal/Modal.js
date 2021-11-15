import React from 'react';
import './modal.css'
function Modal({active,setActive,children}) {
    return (
        <div className={`modal ${active ? 'active' : ''}`} onClick={()=>setActive(false)}>
            <div className={`modal-content ${active ? 'active' : ''}`} onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;
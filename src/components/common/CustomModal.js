import React, {useState} from 'react'

function CustomModal({children, modalOpen, setModalOpen, toogleModal}) {
    return (
        <div>
            {(modalOpen == false) ?  null :  (
                <>  
                    <div className="exit-popup-B custom-modal popup-new">
                        <div className="modal-bg" onClick={() => setModalOpen(!modalOpen)}/>
                        <div className="custom-modal-component modal">
                            <button className="close">
                                <svg className="crossico" width="30" height="30" viewBox="0 0 17 17" onClick={() => setModalOpen(!modalOpen)} >
                                    <path className="fill_path" fillRule="evenodd" d="M16.293 1.592l-1.3-1.3-6.7 6.701-6.7-6.7-1.3 1.299 6.7 6.7-6.7 6.701 1.3 1.3 6.7-6.7 6.7 6.7 1.3-1.3-6.7-6.7z"></path> 
                                </svg>
                            </button>
                            <div className="row">
                                {children}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default CustomModal

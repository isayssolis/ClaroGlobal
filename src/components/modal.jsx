export const Modal = ({ handleClose, children}) => {

    return (
        <div className="modal fade-in" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        TITLE
                        <button type="button" className="btn-close" onClick={handleClose}> </button>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

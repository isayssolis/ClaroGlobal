export const Modal = ({handleClose, children}) => {
    return (
        <div className="modal fade-in" tabIndex="-1">
            <div className="modal-dialog h-100">
                <div className="modal-content rounded-0 h-100 overflow-hidden">
                    <div className="modal-header bg-dark rounded-0 my-border">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn btn-dark my-btn" onClick={handleClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

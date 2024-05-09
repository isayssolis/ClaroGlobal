export const Modal = ({handleClose, children}) => {

    return (
        <div className="modal fade-in" tabIndex="-1">
            <div className="modal-dialog h-100">
                <div className="modal-content rounded-0 h-100 overflow-hidden">
                    <div className="modal-header">
                        <button type="button" className="btn-close" onClick={handleClose}> </button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

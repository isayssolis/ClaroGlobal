export const Alert = ({type, text}) => {
    return(
        <div className={`alert alert-${type} alert-dismissible fade show mt-3 alert-sm`} >
            {text}
        </div>
    );
};
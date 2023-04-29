const ErrorMessage =(props) => {
    return(
        <div className="text-center text-danger">
            <p>{props.message}</p>
        </div>
    )
}

export default ErrorMessage;
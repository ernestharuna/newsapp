import { useRouteError } from "react-router-dom"

const errorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Opsy Daisy!</h1>
            <p>Sorry, an unexpected error has occured</p>
            <p>
                {error.statusText || error.message}
            </p>
        </div>
    )
}

export default error - page
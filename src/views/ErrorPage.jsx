import { Link, useRouteError } from "react-router-dom"
import '../styles/errorpage.scss';
import PrimaryBtn from "../components/PrimaryBtn";

const errorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <div>
                <h1>Opsy Daisy!</h1>
                <p>Sorry, an unexpected error has occured</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <PrimaryBtn text="Back Home" link="/" />
            </div>
        </div>
    )
}

export default errorPage
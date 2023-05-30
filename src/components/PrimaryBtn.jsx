import { Link } from "react-router-dom"

const PrimaryBtn = ({ text, link }) => {
    return (
        <Link to={link}>
            <button className="primary-btn">
                {text}
            </button>
        </Link>
    )
}

export default PrimaryBtn
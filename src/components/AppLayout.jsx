import { Outlet } from "react-router-dom"
import PrimaryBtn from "./PrimaryBtn"

const AppLayout = () => {
    return (
        <>
            <header>
                <nav className="container">
                    <div id="links">
                        <a href="#">Home</a>
                        <a href="#">Feature</a>
                        <a href="#">Shop</a>
                        <a href="#">Gallery</a>
                        <a href="#">Blog</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                    </div>

                    <div>
                        <PrimaryBtn text="Subscribe" />
                    </div>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer className="container">
                <small>
                    Copyright Ernest Haruna
                </small>
            </footer>
        </>
    )
}

export default AppLayout
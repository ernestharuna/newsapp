import PrimaryBtn from "../components/PrimaryBtn";
import NewsCard from "../components/NewsCard";
import '../styles/home.scss';

const Home = () => {
    return (
        <div className="container">
            <div className="header-1">
                <h2>
                    Our Latest Headlines
                </h2>
                <div>
                    <PrimaryBtn text="View All" />
                </div>
            </div>

            <div className="news-section">
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>

            <div className="news-section">

            </div>
        </div>
    )
}

export default Home
import PrimaryBtn from "../components/PrimaryBtn";
import NewsCard from "../components/NewsCard";

import '../styles/home.scss';

import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsStart, fetchNewsSuccess, fetchNewsFailure } from '../features/news/newsSlice';
import { useEffect } from "react";


const Home = () => {

    const dispatch = useDispatch();

    const news = useSelector(state => state.news.articles);
    const loading = useSelector(state => state.news.loading);
    const error = useSelector(state => state.news.error);

    const fetch_news = async (page) => {
        dispatch(fetchNewsStart());

        try {
            const apiKey = 'b0c4dbc3007c4c728378e2840c0cc0fa';
            const res = await fetch(`https://newsapi.org/v2/top-headlines?country=ng&page=${page}&apiKey=${apiKey}`);
            const data = await res.json();

            if (res.ok) {
                dispatch(fetchNewsSuccess(data.articles));
                console.log(data);
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            dispatch(fetchNewsFailure(error.message));
        }
    }

    useEffect(() => {
        fetch_news(1);
    }, [])

    return (
        <div className="container">
            <div className="header-1">
                <h2>
                    Our Top Headlines
                </h2>
                <div>
                    <PrimaryBtn text="View All" />
                </div>
            </div>

            <div className="news-section">
                {loading ? (<p>Loading...</p>) : (
                    <>
                        {error && <p>{error}</p>}
                        {news.map((article) => (
                            <NewsCard key={article.url} title={article.title} />
                        ))}
                    </>
                )}
            </div>

            <div className="news-section">

            </div>
        </div>
    )
}

export default Home
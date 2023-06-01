import NewsCard from "../components/NewsCard";

import '../styles/home.scss';

import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsStart, fetchNewsSuccess, fetchNewsFailure } from '../features/news/newsSlice';
import { useEffect, useState } from "react";

import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const Home = () => {
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    const news = useSelector(state => state.news.articles);
    const loading = useSelector(state => state.news.loading);
    const error = useSelector(state => state.news.error);

    const fetch_news = async (page) => {
        dispatch(fetchNewsStart());
        try {
            const apiKey = 'b0c4dbc3007c4c728378e2840c0cc0fa';
            const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&page=${page}&apiKey=${apiKey}&pageSize=10`);
            // https://newsapi.org/v2/top-headlines?country=us&page=1&apiKey=b0c4dbc3007c4c728378e2840c0cc0fa
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
        fetch_news(page);
    }, [page]);

    // For pagination control
    const prev_page = () => {
        setPage((prev) => prev - 1);
    };

    const next_page = () => {
        setPage((prev) => prev + 1);
    };

    const first_page = () => {
        setPage(1);
    }

    if (!news.length) {
        return (<div className="header-0">Loading</div>)
    }

    return (
        <>
            {/* Above the fold */}
            <div className="header-0">
                <div className="container home-title">
                    <span>
                        {loading ? (<span>Loading...</span>) : (
                            <>
                                {error && <p>{error}</p>}
                                {news[0].author} • {dayjs(news[0].publishedAt).fromNow()}
                            </>
                        )}
                    </span>
                    <h2>
                        {loading ? (<span>Loading...</span>) : (
                            <>
                                {error && <p>{error}</p>}
                                {news[0].title}
                            </>
                        )}
                    </h2>
                    <span>
                        <a href="#headlines">See Headlines</a>
                    </span>
                </div>
            </div>

            <div className="container">

                <div className="header-1" id="headlines">
                    <h2>
                        Our Top Headlines
                    </h2>
                    <div>
                        <button onClick={next_page} id="next_page" className="page-btn">Next »</button>
                    </div>
                </div>

                <span>— Page {page}</span>
                <div className="news-section">
                    {loading ? (<p>Loading...</p>) : (
                        <>
                            {error && <p>{error}</p>}
                            {news.map((article, index) => (
                                <NewsCard key={article.url} article={article} id={index} />
                            ))}
                        </>
                    )}
                </div>

                <div className="pagination">
                    {
                        page > 1 ? (
                            <div>
                                <button onClick={prev_page} className="page-btn" id="prev_page">« Previous Page</button>
                                <button onClick={first_page} className="page-btn">⌂ First page</button>
                            </div>
                        ) : ("")
                    }
                    <button onClick={next_page} className="page-btn" id="next_page">Next Page »</button>
                </div>
            </div>
        </>
    )
}

export default Home
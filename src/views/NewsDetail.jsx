import { Link, useParams } from 'react-router-dom';
import PrimaryBtn from '../components/PrimaryBtn';
import '../styles/newsdetail.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsStart, fetchNewsSuccess, fetchNewsFailure } from '../features/news/newsSlice';

import { useEffect } from 'react';

import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const NewsDetail = () => {
    const { newsUrl } = useParams();
    const dispatch = useDispatch();

    const news = useSelector(state => state.news.articles);
    const loading = useSelector(state => state.news.loading);
    const error = useSelector(state => state.news.error);

    const fetch_one = async () => {
        // if (news.length) return;
        dispatch(fetchNewsStart());
        try {
            const apiKey = 'b0c4dbc3007c4c728378e2840c0cc0fa';
            const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
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
        fetch_one();
        console.log(newsUrl);
    }, [newsUrl]);

    if (!news.length) {
        return (<div className="header-0">Loading</div>)
    }

    return (
        <main>
            <div className="header-2 container">
                <div>
                    <p>
                        {news[newsUrl].source.name} • {dayjs(news[newsUrl].publishedAt).fromNow()}
                    </p>
                    <h2>
                        {news[newsUrl].title}
                    </h2>

                    <div className="publisher-details">
                        <div className="publisher-img">

                        </div>
                        <div className="publisher-name">{news[newsUrl].author}</div>
                    </div>
                </div>
                <div className='header-2-img'>
                    <img src={news[newsUrl].urlToImage ? news[newsUrl].urlToImage : "#"} alt="..." />
                </div>
            </div>

            <div className='container pt'>
                <PrimaryBtn text="Back home" link={'/newsheadlines/home'} />
            </div>
            <div className="container">
                <h3>Description:</h3>
                <p>
                    {loading ? (<p>Loading...</p>) : (
                        <>
                            {error && <p>{error}</p>}
                            {news[newsUrl].description}
                        </>
                    )}
                </p>

                <h3>Content:</h3>
                <p>
                    {loading ? (<span>Loading...</span>) : (
                        <>
                            {error && <p>{error}</p>}
                            {news[newsUrl].content}
                        </>
                    )}
                    <br /> <br />
                    <Link to={news[newsUrl].url}>Read more »</Link>
                </p>


            </div>

        </main>
    )
}

export default NewsDetail

import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import { Link } from "react-router-dom";

dayjs.extend(relativeTime);

const NewsCard = ({ article, id }) => {

    return (
        <div className="news-card">
            <div className="news-img">
                <img src={article.urlToImage ? article.urlToImage : "#"} alt="..." />
            </div>
            <div className="news-title">
                <small>
                    {article.author} • {dayjs(article.publishedAt).fromNow()}
                </small>
                <Link to={`/newsheadlines/${id}`}>
                    {article.title}
                </Link>
            </div>
        </div>
    )
}

export default NewsCard

import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const NewsCard = ({ title, time, author }) => {

    /** 
     * Cut out author from article
    */
    const abbrv = title.split("-")[0];

    return (
        <div className="news-card">
            <div className="news-img">
                <img src="#" alt="..." />
            </div>
            <div className="news-title">
                <small>
                    {author} • {dayjs(time).fromNow()}
                </small>
                {title}
            </div>
        </div>
    )
}

export default NewsCard
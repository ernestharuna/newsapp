const NewsCard = ({ title }) => {
    return (
        <div className="news-card">
            <div className="news-img">
                <img src="#" alt="news_photo" />
            </div>
            <div className="news-title">
                {title}
                <small>
                    3 hours ago
                </small>
            </div>
        </div>
    )
}

export default NewsCard
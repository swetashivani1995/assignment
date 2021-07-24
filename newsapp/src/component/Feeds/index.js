import React from 'react';
import { FeedSkeleton } from '../Skeletons/FeedSkeleton';
import "./style.css"

/**
 * Display list of headlines
 * @param {*} data- list of headlines 
 * isLoading - props to display skeleton
 * @returns - news headlines elements
 */
const Feeds = ({ data, isLoading }) => {
    // returns headlines image, title, content
    const headlines = data.map((news, i) => {
        return (
            <div className="headlines-news" key={`news-${news.source.name}-${i}`}>
                <a href={news.url} className="headlines-link">
                    {news.urlToImage ?
                        <img alt="news" src={news.urlToImage} className="headlines-image" loading="lazy" />
                        : <img alt="news" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBXYAlm19j6FU7sUD-ZmCn0khGzZ09hnXXqw&usqp=CAU" className="headlines-image" loading="lazy" />
                    }
                    <h3 className="headlines-title">{news.title}</h3>
                    <p className="news-content">
                        {news.content}
                    </p>
                </a>
            </div>
        );
    });
    return (
        <>
        <div className="headlines">
            {isLoading ? (<FeedSkeleton />)
                : headlines
            }
            </div>
        </>
    )
}

export default Feeds;
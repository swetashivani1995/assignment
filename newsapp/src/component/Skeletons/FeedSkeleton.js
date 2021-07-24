import React from 'react';

/**
 * Skeleton to show while loading
 * @returns Skeleton for headlines
 */
export const FeedSkeleton=()=>{
   return [...Array(10)].map((data,i)=>{
       return( <div className="headlines-news" key={`${data}-${i}`} data-testid="skeleton">
        <img alt="news" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBXYAlm19j6FU7sUD-ZmCn0khGzZ09hnXXqw&usqp=CAU" 
        className="headlines-image" loading="lazy" />
        </div>)
    })
}
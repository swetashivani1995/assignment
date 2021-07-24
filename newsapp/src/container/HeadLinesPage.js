import React, { useState, useEffect } from 'react';
import Search from '../component/Search';
import Feeds from '../component/Feeds';

const HeadLinesPage = () => {
    // isLoading state is to show skeleton 
    const [isLoading, setIsLoading] = useState(true);
    // data state is list of headline
    const [data, setData] = useState([]);

    /**
     * It get called once on page load 
     * to fetch the list of headlines
     */
    useEffect(() => {
        fetch("http://localhost:8080/headlines")
            .then((res) => res.json())
            .then((response) => {
                setData(response);
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
    }, []);
 /**
  * When user click on Search button
  * it filters the data
  * @param {*} e - event
  * @param {*} value - input target value
  */
    const onSearch = (e,value) => {
        setIsLoading(true)
        e.preventDefault()
        fetch(`http://localhost:8080/filters?q=${value}`)
            .then((res) => res.json())
            .then((response) => {
                setData(response);
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
    }

    return (
        <>
            <Search onSearch={onSearch} setIsLoading={setIsLoading}></Search>
            <Feeds data={data} isLoading={isLoading}></Feeds>
        </>
    )
}

export default HeadLinesPage;
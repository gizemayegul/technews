import axios from 'axios';
import React, { useEffect, useState } from 'react';

const News = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=321e16a9e5dd4eb1a0ad80968ba2f6d6',
                    {
                        headers: {
                            'Authorization': '1321e16a9e5dd4eb1a0ad80968ba2f6d6',
                        }
                    });
                setData(response.data.articles);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);



    return (
        <div className="container">
            {data.map((article) => (
                <div key={article.title} className='card'>
                    <div className='card__header'>
                        <img src={article.urlToImage} alt="card__image" class="card__image" width="600" />
                    </div>
                    <div className='card__body'>
                        <span className="tag tag-blue">{article.publishedAt.substring(0, 10)}</span>
                        <h4>{article.title}</h4>
                        <p>{article.content.substring(0, 100)}</p>
                        <a href={article.url}>Read..</a>
                    </div>
                    <div className='card__footer'>
                        <div className="user">
                            <span className="tag tag-red">{article.source.name}</span>
                        </div>

                    </div>
                </div>



            ))}

        </div>
    );
};

export default News;
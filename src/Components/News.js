import axios from 'axios';
import React, { useEffect, useState } from 'react';

const News = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-05-28&sortBy=publishedAt&apiKey=321e16a9e5dd4eb1a0ad80968ba2f6d6',
                    {
                        headers: {
                            'Authorization': '321e16a9e5dd4eb1a0ad80968ba2f6d6',
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
        <div>
            {data.map((article) => (
                <div key={article.title}>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    {/* Render other properties of the article as needed */}
                    <p>Selam</p>
                </div>
            ))}
        </div>
    );
};

export default News;
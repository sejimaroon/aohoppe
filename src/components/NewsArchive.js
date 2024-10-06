import React from 'react';

const NewsArchive = ({ newsList }) => {
  return (
    <div>
      <h1>ニュースアーカイブ</h1>
      {newsList.length === 0 ? (
        <p>現在、ニュースはありません。</p>
      ) : (
        <ul>
          {newsList.map((news) => (
            <li key={news.id}>
              {news.date}: {news.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewsArchive;

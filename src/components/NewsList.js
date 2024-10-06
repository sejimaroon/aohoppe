import React from 'react';

const NewsList = ({ newsList, setNewsList }) => {

  const handleDelete = (id) => {
    // 削除確認ダイアログを表示
    if (window.confirm('このニュースを削除しますか？')) {
      setNewsList(prevList => prevList.filter(news => news.id !== id)); // IDに基づいて削除
    }
  };

  return (
    <section className='news' id='news'>
      <h2>ニュース一覧</h2>
      <ul>
        {newsList.map((news) => (
          <li key={news.id}>
            {news.date}: {news.text}
            <button onClick={() => handleDelete(news.id)}>削除</button> {/* 削除ボタン */}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NewsList;

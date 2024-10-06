import React, { useState } from 'react';

const AdminPage = ({ onLogout }) => {
  const [newsList, setNewsList] = useState([]);  // 初期状態でお知らせは空
  const [newText, setNewText] = useState('');

  const addNewsItem = () => {
    const newNewsItem = {
      id: newsList.length + 1,
      date: new Date().toLocaleDateString(),  // 現在の日付を設定
      text: newText,
    };
    setNewsList([...newsList, newNewsItem]);
    setNewText('');
  };

  const deleteNewsItem = (id) => {
    if (window.confirm('このニュースを削除しますか？')) {
      setNewsList(newsList.filter((news) => news.id !== id));
    }
  };

  return (
    <div className='inbox'>
      <h1>お知らせ編集ページ</h1>
      <div>
        <label>テキスト:</label>
        <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} />
      </div>
      <button onClick={addNewsItem}>追加</button>

      <h2>現在のお知らせ</h2>
      {newsList.length === 0 ? (
        <p>現在、お知らせはありません。</p>
      ) : (
        <ul>
          {newsList.map((news) => (
            <li key={news.id}>
              {news.date}: {news.text}
              <button onClick={() => deleteNewsItem(news.id)}>削除</button> {/* 削除ボタン */}
            </li>
          ))}
        </ul>
      )}
      <button onClick={onLogout}>ログアウト</button>
    </div>
  );
};

export default AdminPage;

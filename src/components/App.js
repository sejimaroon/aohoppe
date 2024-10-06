import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header';
import NewsList from './NewsList';
import About from './About';
import Contact from './Contact';
import AdminPage from './AdminPage';
import LoginPage from './LoginPage'; // LoginPageコンポーネントをインポート
import Footer from './Footer'; // Footerコンポーネントをインポート
import NewsArchive from './NewsArchive'; // ニュースアーカイブページをインポート

const App = () => {
  const [newsList, setNewsList] = useState([]); // 初期状態を空の配列に
  const [isAuthenticated, setIsAuthenticated] = useState(false); // 認証状態の管理

  return (
    <Router>
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <div>
                <h1 className="mv">
                  <div className="inner">
                    <div className="mv__container">
                      <h2 className="mv__lead">触ってみる？</h2>
                    </div>
                  </div>
                </h1>
                <main>
                  <NewsList newsList={newsList} setNewsList={setNewsList} />
                  <About />
                  <Contact />
                  <Link to="/archive">もっと見る</Link> {/* アーカイブページへのリンク */}
                </main>
              </div>
              <Footer /> {/* フッターをここに配置 */}
            </>
          } 
        />
        <Route 
          path="/admin" 
          element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} 
        />
        <Route 
          path="/admin/dashboard" 
          element={
            isAuthenticated ? (
              <AdminPage onLogout={() => setIsAuthenticated(false)} />
            ) : (
              <LoginPage setIsAuthenticated={setIsAuthenticated} />
            )
          } 
        />
        <Route 
          path="/archive" 
          element={
            <>
              <NewsArchive newsList={newsList} /> {/* ニュースアーカイブページ */}
              <Footer /> {/* フッターをここに配置 */}
            </>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;

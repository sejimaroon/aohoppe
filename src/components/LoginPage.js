import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // 管理者用のメールアドレスとパスワード
    const validEmail = 'a@a';
    const validPassword = 'a';

    if (email === validEmail && password === validPassword) {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true'); // ログイン状態を保存
      navigate('/admin/dashboard'); // 管理者ページのダッシュボードに遷移
    } else {
      alert('メールアドレスまたはパスワードが間違っています');
    }
  };

  return (
    <div className='inbox'>
      <h1>ログインページ</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>メールアドレス:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>パスワード:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
};

export default LoginPage;

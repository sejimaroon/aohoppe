function createBubble() {
  // フッターを取得
  const footer = document.querySelector('footer');
  
  // 泡の要素を作成
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  
  // ランダムなサイズ (20px〜60px)
  const size = Math.random() * 10 + 10;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  
  // ランダムな水平位置
  const position = Math.random() * 100; // 0%〜100%の範囲
  bubble.style.left = `${position}%`;
  
  // ランダムなアニメーション時間 (4秒〜8秒)
  const duration = Math.random() * 4 + 4;
  bubble.style.animation = `rise ${duration}s ease-in infinite`;
  
  // フッターに泡を追加
  footer.appendChild(bubble);
  
  // アニメーション終了後に泡を削除
  setTimeout(() => {
    bubble.remove();
  }, duration * 1000); // アニメーションの時間を経過した後に削除
}

// 一定間隔で泡を生成
setInterval(createBubble, 500);

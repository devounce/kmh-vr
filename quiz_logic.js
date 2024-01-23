function submitAnswer(answer) {
  const correctAnswers = {
    'quiz1.html': 'A',
    'quiz2.html': 'B',
    'quiz3.html': 'C'
  };

  const currentPage = window.location.pathname.split('/').pop();
  const correctAnswer = correctAnswers[currentPage];

  if (answer === correctAnswer) {
    // 次のクイズページへ
    switch (currentPage) {
      case 'quiz1.html':
        window.location.href = 'quiz2.html';
        break;
      case 'quiz2.html':
        window.location.href = 'quiz3.html';
        break;
      case 'quiz3.html':
        window.location.href = 'quiz4.html'; // 最終動画ページ
        break;
    }
  } else {
    // 同じクイズページを再度ロード
    window.location.reload();
  }
}

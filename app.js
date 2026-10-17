if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then((registration) => {
        console.log('ServiceWorkerの登録に成功しました');
      })
      .catch((err) => {
        console.log('ServiceWorkerの登録に失敗しました: ', err);
      });
  });
}


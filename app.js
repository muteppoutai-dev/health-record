const setupToggles = () => {
  const toggleIds = ['meds', 'alcohol', 'caffeine'];
  toggleIds.forEach(id => {
    const checkbox = document.getElementById(id);
    const area = document.getElementById(`${id}-area`);
    if(checkbox && area) {
      checkbox.addEventListener('change', (e) => {
        if(e.target.checked) {
          area.classList.remove('hidden');
        } else {
          area.classList.add('hidden');
        }
      });
    }
  });
};

window.addEventListener('DOMContentLoaded', () => {
  setupToggles();
});

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

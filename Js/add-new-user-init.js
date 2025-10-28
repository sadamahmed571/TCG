(function(){
  document.addEventListener('DOMContentLoaded', function(){
    try{
      if (!window.authService || !window.authService.isLoggedIn()) {
        window.location.href = 'index.html';
        return;
      }
      const me = window.authService.getCurrentUser();
      if (!me || me.role !== 'admin') {
        alert('ليس لديك صلاحية للوصول إلى هذه الصفحة');
        window.location.href = 'dashboard.html';
        return;
      }
    }catch(e){ console.warn('admin guard error:', e); }
  });
})();

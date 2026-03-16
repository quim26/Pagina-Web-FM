// ==========================================
// 1. CARGAR HEADER Y FOOTER
// ==========================================

fetch('header.html').then(res => res.text()).then(data => { const h = document.getElementById('header'); if (h) h.innerHTML = data; }).catch(e => console.error('Error header:', e));
fetch('footer.html').then(res => res.text()).then(data => { const f = document.getElementById('footer'); if (f) f.innerHTML = data; }).catch(e => console.error('Error footer:', e));
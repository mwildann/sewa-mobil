document.addEventListener('DOMContentLoaded', function () {
    // Menambahkan event listener untuk form login
    const loginForm = document.querySelector('form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            
            // Mengambil nilai email dan password dari form
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Validasi sederhana untuk email dan password
            if (email === '' || password === '') {
                alert('Email dan password harus diisi!');
                return;
            }
            
            // Proses login (contoh sederhana tanpa backend)
            if (email === 'admin@sewamobil.com' && password === '12345') {
                // Simpan status login di localStorage
                localStorage.setItem('loggedIn', 'true');
                // Redirect ke halaman dashboard
                window.location.href = 'dashboard.html';
            } else {
                alert('Email atau password salah!');
            }
        });
    }

    // Mengecek status login saat memuat halaman dashboard
    if (window.location.pathname.includes('dashboard.html')) {
        const isLoggedIn = localStorage.getItem('loggedIn');
        if (!isLoggedIn) {
            // Jika tidak login, redirect ke halaman login
            window.location.href = 'index.html';
        }

        const logoutLink = document.getElementById('logout');
        if (logoutLink) {
            logoutLink.addEventListener('click', function (event) {
                event.preventDefault();
                // Hapus status login dari localStorage
                localStorage.removeItem('loggedIn');
                alert('Anda telah logout.');
                // Redirect ke halaman login
                window.location.href = 'index.html';
            });
        }
    }
});

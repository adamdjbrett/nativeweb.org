// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Ambil elemen-elemen yang diperlukan
    const themeToggle = document.getElementById('theme-toggle');
    // UBAH TARGET: Sekarang kita menargetkan <body>
    const bodyElement = document.querySelector('body'); 
    const themeIcon = document.getElementById('theme-icon');
    
    // Kunci untuk menyimpan preferensi di localStorage
    const STORAGE_KEY = 'user-theme';

    /**
     * Mengatur tema tampilan (light atau dark)
     * @param {string} theme - 'light' atau 'dark'
     */
    function setTheme(theme) {
        // Terapkan tema ke elemen body (ini akan mengubah background)
        bodyElement.setAttribute('data-bs-theme', theme); 

        // Simpan preferensi ke local storage
        localStorage.setItem(STORAGE_KEY, theme);

        // Update ikon
        if (theme === 'dark') {
            themeIcon.classList.remove('bi-sun-fill');
            themeIcon.classList.add('bi-moon-fill');
        } else {
            themeIcon.classList.remove('bi-moon-fill');
            themeIcon.classList.add('bi-sun-fill');
        }
    }

    /**
     * Memuat tema saat halaman pertama kali dibuka
     */
    function loadTheme() {
        // Cek apakah ada preferensi di local storage
        let storedTheme = localStorage.getItem(STORAGE_KEY);
        
        // Jika tidak ada, gunakan preferensi sistem
        if (!storedTheme) {
            storedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }

        setTheme(storedTheme);
    }

    // Panggil fungsi loadTheme saat DOM siap
    loadTheme();

    // 2. Tambahkan event listener untuk tombol toggle
    themeToggle.addEventListener('click', () => {
        // Dapatkan tema saat ini dari body
        const currentTheme = bodyElement.getAttribute('data-bs-theme');
        
        // Tentukan tema baru
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        // Atur tema baru
        setTheme(newTheme);
    });
});
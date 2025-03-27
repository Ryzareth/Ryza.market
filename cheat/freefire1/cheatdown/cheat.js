document.addEventListener('DOMContentLoaded', (event) => {
    const container = document.querySelector('.container');
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
    container.classList.add('blur');

    // Hapus blur setelah 2 detik
    setTimeout(() => {
        container.classList.remove('blur');
        overlay.style.display = 'none';
    }, 2000);

    const expiryKey = 'expiryDate'; // Kunci untuk Local Storage
    const now = new Date().getTime(); // Waktu sekarang

    // Ambil tanggal expired dari localStorage, jika ada
    let expiryDate = localStorage.getItem(expiryKey);

    // Jika belum ada data expired di localStorage atau waktu sekarang sudah lebih dari waktu expired
    if (!expiryDate || now > expiryDate) {
        // Set expired menjadi 1 hari dari sekarang (24 jam dalam milidetik)
        expiryDate = now + (24 * 60 * 60 * 1000);
        localStorage.setItem(expiryKey, expiryDate); // Simpan tanggal expired di localStorage
    } else {
        expiryDate = parseInt(expiryDate); // Pastikan diubah menjadi angka
    }

    // Format tanggal expired untuk ditampilkan
    const formattedDate = new Date(expiryDate).toLocaleDateString(undefined, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
    document.getElementById('expiryDate').innerText = formattedDate;

    const countdownElement = document.getElementById('countdown');
    const downloadBtn = document.getElementById('downloadBtn');
    const btnText = downloadBtn.querySelector('.btn-text');

    // Buat interval untuk countdown setiap detik
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = expiryDate - now;

        // Jika countdown habis
        if (distance < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = ""; // Hapus tampilan countdown

            // Disable tombol dan ubah teks
            downloadBtn.style.pointerEvents = 'none';
            downloadBtn.style.opacity = '0.6';
            btnText.innerText = 'Expired'; // Ubah teks tombol menjadi "Expired"
            localStorage.removeItem(expiryKey); // Hapus data expired dari localStorage
        } else {
            // Hitung waktu tersisa (hari, jam, menit, detik)
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Tampilkan sisa waktu dalam format jam, menit, detik
            countdownElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
        }
    }, 1000);
});
e
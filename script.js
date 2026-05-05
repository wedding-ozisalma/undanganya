// Script countdown otomatis ke tanggal acara
const eventDate = new Date("2026-10-24T10:00:00");
const daysText = document.getElementById('days');
const hoursText = document.getElementById('hours');
const minutesText = document.getElementById('minutes');
const secondsText = document.getElementById('seconds');

function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;
  if (diff < 0) {
    document.getElementById('countdown-timer').innerText = "Hari Bahagia Telah Tiba!";
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  daysText.textContent = days.toString().padStart(2, '0');
  hoursText.textContent = hours.toString().padStart(2, '0');
  minutesText.textContent = minutes.toString().padStart(2, '0');
  secondsText.textContent = seconds.toString().padStart(2, '0');
}

// Jalankan saat halaman di-load dan update tiap detik
updateCountdown();
setInterval(updateCountdown, 1000);

// Optional: animasi sederhana ketika scroll, jika ingin bisa tambahkan library animasi
// Kamu bisa menghapus data-aos pada html jika tidak ingin gunakan animasi

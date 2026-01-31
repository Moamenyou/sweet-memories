function startStory() {
    // إخفاء صفحة البداية وإظهار المحتوى
    document.getElementById('start-page').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    
    // تشغيل الموسيقى
    const music = document.getElementById('bg-music');
    music.play().catch(error => console.log("المتصفح منع التشغيل التلقائي"));

    // تشغيل صنع القلوب
    setInterval(createHeart, 300);
}

// دالة صنع القلوب الطائرة
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.getElementById('hearts-container').appendChild(heart);

    setTimeout(() => { heart.remove(); }, 4000);
}

// العداد (تأكد من تعديل التاريخ هنا)
const startDate = new Date(2025, 8, 11); // سنة، شهر (0=يناير)، يوم

setInterval(() => {
    const now = new Date();
    const diff = now - startDate;

    document.getElementById('years').innerText = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    document.getElementById('months').innerText = Math.floor((diff / (1000 * 60 * 60 * 24 * 30.44)) % 12);
    document.getElementById('days').innerText = Math.floor((diff / (1000 * 60 * 60 * 24)) % 30.44);
    document.getElementById('hours').innerText = Math.floor((diff / (1000 * 60 * 60)) % 24);
    document.getElementById('minutes').innerText = Math.floor((diff / (1000 * 60)) % 60);
    document.getElementById('seconds').innerText = Math.floor((diff / 1000) % 60);
}, 1000);
// تشغيل/إيقاف الموسيقى
function toggleMusic() {
    const music = document.getElementById('bg-music');
    const btn = document.getElementById('music-btn');
    if (music.paused) {
        music.play();
        btn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        music.pause();
        btn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

// إظهار الرسالة عند الضغط على الأيقونات
function showPopup(text) {
    document.getElementById('popup-text').innerText = text;
    document.getElementById('popup').classList.remove('hidden');
}

function closePopup() {
    document.getElementById('popup').classList.add('hidden');
}

// باقي كود العداد والقلوب اللي بعتهولك في الرد اللي فات يفضل زي ما هو
function openFinalLetter() {
    const modal = document.getElementById('final-modal');
    modal.classList.remove('hidden');
    // إضافة صوت بسيط لو حابب عند الفتح
}

function closeFinalLetter() {
    const modal = document.getElementById('final-modal');
    modal.classList.add('hidden');
}
function checkPassword() {
    const passInput = document.getElementById('passwordInput').value;
    const errorMsg = document.getElementById('error-msg');
    
    // حط هنا تاريخ ميلادها (مثلاً لو 15-05-2002)
    const correctPass = "11/7/2008"; 
    
    // شيل الفواصل لو دخلتها (عشان لو كتبت 15-05-2002 يقرأها 15052002)
    const cleanPass = passInput.replace(/-/g, "");

    if (cleanPass === correctPass) {
        // لو الباسورد صح، شغل الموقع
        startStory();
    } else {
        // لو غلط، ظهر رسالة الخطأ واعمل اهتزاز للخانة
        errorMsg.classList.remove('hidden');
        document.querySelector('.login-card').style.animation = "shake 0.5s";
        setTimeout(() => {
            document.querySelector('.login-card').style.animation = "";
        }, 500);
    }
}

// إضافة أنيميشن الاهتزاز للـ CSS لو الباسورد غلط
/* @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
}
*/
document.addEventListener('mousemove', (e) => {
    document.body.style.setProperty('--x', e.clientX + 'px');
    document.body.style.setProperty('--y', e.clientY + 'px');
});

document.addEventListener('touchmove', (e) => {
    document.body.style.setProperty('--x', e.touches[0].clientX + 'px');
    document.body.style.setProperty('--y', e.touches[0].clientY + 'px');
});
function createSparkles() {
    const container = document.body;
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'fixed';
        sparkle.style.width = '2px';
        sparkle.style.height = '2px';
        sparkle.style.background = 'white';
        sparkle.style.borderRadius = '50%';
        sparkle.style.top = Math.random() * 100 + 'vh';
        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.boxShadow = '0 0 10px white';
        sparkle.style.opacity = '0';
        sparkle.style.zIndex = '-1';
        
        container.appendChild(sparkle);

        // أنيميشن البريق
        sparkle.animate([
            { opacity: 0, transform: 'scale(0)' },
            { opacity: 1, transform: 'scale(1.5)' },
            { opacity: 0, transform: 'scale(0)' }
        ], { duration: 2000 });

        setTimeout(() => sparkle.remove(), 2000);
    }, 100);
}
createSparkles();
// تأثير الضوء المتوهج يتبع الماوس/اللمس (يجب أن يكون في script.js)
document.addEventListener('mousemove', (e) => {
    document.body.style.setProperty('--x', e.clientX + 'px');
    document.body.style.setProperty('--y', e.clientY + 'px');
});

document.addEventListener('touchmove', (e) => {
    document.body.style.setProperty('--x', e.touches[0].clientX + 'px');
    document.body.style.setProperty('--y', e.touches[0].clientY + 'px');
});


// توليد القلوب المتطايرة
function createFlyingHearts() {
    const heartSymbols = ['❤️', '💖', '✨']; // ممكن تضيف رموز تانية لو حبيت
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'flying-particle';
        heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        
        heart.style.left = Math.random() * 100 + 'vw'; // مكان عشوائي أفقي
        heart.style.top = '100vh'; // يبدأ من أسفل الشاشة
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px'; // حجم عشوائي
        
        const duration = Math.random() * 4 + 2; // سرعة طيران عشوائية
        heart.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 0, scale: 0.5 },
            { transform: `translateY(-120vh) rotate(${Math.random() * 360}deg)`, opacity: 0.8, scale: 1.2 }
        ], { duration: duration * 1000, easing: 'ease-out' });

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), duration * 1000); // إزالة القلب بعد الانيميشن
    }, 300); // توليد قلب كل 300 مللي ثانية
}

// توليد النجوم المتلألئة
function createSparkleStars() {
    setInterval(() => {
        const star = document.createElement('div');
        star.className = 'sparkle-star';
        const size = Math.random() * 3 + 1; // حجم عشوائي للنجوم
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.top = Math.random() * 100 + 'vh'; // مكان عشوائي رأسي
        star.style.left = Math.random() * 100 + 'vw'; // مكان عشوائي أفقي
        
        document.body.appendChild(star);
        setTimeout(() => star.remove(), 2000); // إزالة النجمة بعد التلألؤ
    }, 150); // توليد نجمة كل 150 مللي ثانية
}

// تشغيل التأثيرات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    createFlyingHearts();
    createSparkleStars();
});
                

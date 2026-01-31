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
const startDate = new Date(2021, 0, 1); // سنة، شهر (0=يناير)، يوم

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
    const correctPass = "15052002"; 
    
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

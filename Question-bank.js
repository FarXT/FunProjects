

// IQ
 const iqQuestions = [
  {
    question: "کدام گزینه ادامه‌ی این الگو است؟ 2, 4, 8, 16, ...",
    answers: [
      { text: "20", correct: false },
      { text: "24", correct: false },
      { text: "32", correct: true },
      { text: "36", correct: false },
    ],
  },
  {
    question: "اگر همه‌ی گربه‌ها جانور هستند و بعضی جانوران وحشی هستند، کدام درست است؟",
    answers: [
      { text: "همه گربه‌ها وحشی‌اند", correct: false },
      { text: "هیچ گربه‌ای وحشی نیست", correct: false },
      { text: "ممکن است بعضی گربه‌ها وحشی باشند", correct: true },
      { text: "گربه‌ها نمی‌توانند جانور باشند", correct: false },
    ],
  },
  {
    question: "کدام شکل متفاوت است؟ 🔺 🔺 🔻 🔺",
    answers: [
      { text: "اولی", correct: false },
      { text: "دومی", correct: false },
      { text: "سومی", correct: true },
      { text: "چهارمی", correct: false },
    ],
  },
  {
    question: "اگر یک ساعت 90 دقیقه جلو برود، ساعت 3:00 چه ساعتی را نشان می‌دهد؟",
    answers: [
      { text: "3:30", correct: false },
      { text: "4:00", correct: false },
      { text: "4:30", correct: true },
      { text: "5:00", correct: false },
    ],
  },
  {
    question: "کدام گزینه بزرگ‌ترین عدد است؟",
    answers: [
      { text: "2³ × 3²", correct: false },
      { text: "6³", correct: false },
      { text: "3⁵", correct: true },
      { text: "2⁷", correct: false },
    ],
  },
  {
    question: "در یک خانواده 5 خواهر هستند، هر کدام یک برادر دارند. تعداد کل فرزندان؟",
    answers: [
      { text: "6", correct: true },
      { text: "10", correct: false },
      { text: "7", correct: false },
      { text: "11", correct: false },
    ],
  },
  {
    question: "اگر آینه سمت چپ را راست نشان دهد، جهت فلش → در آینه چگونه دیده می‌شود؟",
    answers: [
      { text: "→", correct: false },
      { text: "←", correct: true },
      { text: "↑", correct: false },
      { text: "↓", correct: false },
    ],
  },
  {
    question: "کدام عدد یک دسته 5تایی کامل می‌سازد؟",
    answers: [
      { text: "17", correct: false },
      { text: "20", correct: true },
      { text: "22", correct: false },
      { text: "23", correct: false },
    ],
  },
  {
    question: "اگر هر مربع 4 گوشه دارد، 12 مربع چند گوشه دارند؟",
    answers: [
      { text: "48", correct: true },
      { text: "36", correct: false },
      { text: "24", correct: false },
      { text: "60", correct: false },
    ],
  },
  {
    question: "کدام گزینه ادامه‌ی الگوی: A, C, F, J, ... است؟",
    answers: [
      { text: "M", correct: true },
      { text: "N", correct: false },
      { text: "L", correct: false },
      { text: "O", correct: false },
    ],
  },
];


// Math 
const mathQuestions = [
  {
    question: "حاصل 7 × 8 چند است؟",
    answers: [
      { text: "54", correct: false },
      { text: "56", correct: true },
      { text: "64", correct: false },
      { text: "48", correct: false },
    ],
  },
  {
    question: "مساحت مربعی با ضلع 10 چیست؟",
    answers: [
      { text: "20", correct: false },
      { text: "50", correct: false },
      { text: "100", correct: true },
      { text: "40", correct: false },
    ],
  },
  {
    question: "مقدار π تقریباً برابر است با:",
    answers: [
      { text: "2.14", correct: false },
      { text: "3.14", correct: true },
      { text: "4.13", correct: false },
      { text: "3.04", correct: false },
    ],
  },
  {
    question: "اگر x = 3 باشد، مقدار 2x + 5 چند می‌شود؟",
    answers: [
      { text: "10", correct: true },
      { text: "12", correct: false },
      { text: "8", correct: false },
      { text: "15", correct: false },
    ],
  },
  {
    question: "حاصل 1/2 + 1/4 چند است؟",
    answers: [
      { text: "1/4", correct: false },
      { text: "1/2", correct: false },
      { text: "3/4", correct: true },
      { text: "1", correct: false },
    ],
  },
  {
    question: "فاکتوریل 5 برابر است با:",
    answers: [
      { text: "60", correct: false },
      { text: "120", correct: true },
      { text: "24", correct: false },
      { text: "72", correct: false },
    ],
  },
  {
    question: "اعداد اول کدام‌اند؟",
    answers: [
      { text: "1, 2, 3", correct: false },
      { text: "2, 3, 5", correct: true },
      { text: "3, 6, 9", correct: false },
      { text: "5, 10, 20", correct: false },
    ],
  },
  {
    question: "حاصل 9² چیست؟",
    answers: [
      { text: "81", correct: true },
      { text: "72", correct: false },
      { text: "98", correct: false },
      { text: "90", correct: false },
    ],
  },
  {
    question: "شیب خطی که 4 واحد به بالا و 2 واحد به راست می‌رود چند است؟",
    answers: [
      { text: "2", correct: true },
      { text: "1", correct: false },
      { text: "4", correct: false },
      { text: "0.5", correct: false },
    ],
  },
  {
    question: "کدام عدد ریشه معادله x² = 49 است؟",
    answers: [
      { text: "7", correct: true },
      { text: "14", correct: false },
      { text: "9", correct: false },
      { text: "6", correct: false },
    ],
  },
];


// Eng
const englishQuestions = [
  {
    question: "What is the synonym of 'happy'?",
    answers: [
      { text: "Sad", correct: false },
      { text: "Joyful", correct: true },
      { text: "Angry", correct: false },
      { text: "Tired", correct: false },
    ],
  },
  {
    question: "Choose the correct spelling:",
    answers: [
      { text: "Februery", correct: false },
      { text: "February", correct: true },
      { text: "Febraury", correct: false },
      { text: "Februarry", correct: false },
    ],
  },
  {
    question: "What is the opposite of 'strong'?",
    answers: [
      { text: "Weak", correct: true },
      { text: "Tall", correct: false },
      { text: "Fast", correct: false },
      { text: "Hard", correct: false },
    ],
  },
  {
    question: "Which one is a fruit?",
    answers: [
      { text: "Carrot", correct: false },
      { text: "Apple", correct: true },
      { text: "Potato", correct: false },
      { text: "Onion", correct: false },
    ],
  },
  {
    question: "What is the plural of 'child'?",
    answers: [
      { text: "Childs", correct: false },
      { text: "Children", correct: true },
      { text: "Childes", correct: false },
      { text: "Childrens", correct: false },
    ],
  },
  {
    question: "Fill in the blank: I ____ to school every day.",
    answers: [
      { text: "go", correct: true },
      { text: "goes", correct: false },
      { text: "going", correct: false },
      { text: "gone", correct: false },
    ],
  },
  {
    question: "Which one is a color?",
    answers: [
      { text: "Table", correct: false },
      { text: "Blue", correct: true },
      { text: "Door", correct: false },
      { text: "Window", correct: false },
    ],
  },
  {
    question: "Which of the following means 'quickly'?",
    answers: [
      { text: "Slowly", correct: false },
      { text: "Fast", correct: true },
      { text: "Late", correct: false },
      { text: "Early", correct: false },
    ],
  },
  {
    question: "What does 'book' mean?",
    answers: [
      { text: "دفتر", correct: false },
      { text: "کتاب", correct: true },
      { text: "مداد", correct: false },
      { text: "صندلی", correct: false },
    ],
  },
  {
    question: "Which one is a verb?",
    answers: [
      { text: "Run", correct: true },
      { text: "Red", correct: false },
      { text: "Chair", correct: false },
      { text: "Beautiful", correct: false },
    ],
  },
];




// Law 
const lawQuestions = [
  {
    question: "قانون اساسی یک کشور معمولاً چه چیزی را تعیین می‌کند؟",
    answers: [
      { text: "جریمه‌های رانندگی", correct: false },
      { text: "ساختار حکومت و حقوق اساسی مردم", correct: true },
      { text: "برنامه‌های درسی مدارس", correct: false },
      { text: "قیمت کالاها", correct: false },
    ],
  },
  {
    question: "کدام نهاد مسئول تفسیر قوانین است؟",
    answers: [
      { text: "قوه مقننه", correct: false },
      { text: "قوه قضاییه", correct: true },
      { text: "قوه مجریه", correct: false },
      { text: "شوراهای محلی", correct: false },
    ],
  },
  {
    question: "جرم چیست؟",
    answers: [
      { text: "هر عملی که مردم خوششان نیاید", correct: false },
      { text: "هر عملی که قانون برای آن مجازات تعیین کرده است", correct: true },
      { text: "هر نوع بی‌ادبی", correct: false },
      { text: "هر کار غیر اخلاقی", correct: false },
    ],
  },
  {
    question: "قرارداد معتبر باید شامل چه چیزی باشد؟",
    answers: [
      { text: "قیمت بالا", correct: false },
      { text: "ایجاب و قبول و اهلیت طرفین", correct: true },
      { text: "شاهد رسمی", correct: false },
      { text: "ثبت در دفترخانه", correct: false },
    ],
  },
  {
    question: "حق مالکیت به چه معناست؟",
    answers: [
      { text: "امکان استفاده و انتقال مال", correct: true },
      { text: "استفاده بدون اجازه", correct: false },
      { text: "فقط نگهداری موقت", correct: false },
      { text: "اجبار در فروش مال", correct: false },
    ],
  },
  {
    question: "کدام گزینه از حقوق شهروندی محسوب می‌شود؟",
    answers: [
      { text: "حق رأی", correct: true },
      { text: "پرداخت مالیات", correct: false },
      { text: "خرید مسکن", correct: false },
      { text: "آشپزی کردن", correct: false },
    ],
  },
  {
    question: "کدام یک از نهادهای زیر وظیفه وضع قوانین را دارد؟",
    answers: [
      { text: "مجلس", correct: true },
      { text: "دادگاه", correct: false },
      { text: "پلیس", correct: false },
      { text: "شهرداری", correct: false },
    ],
  },
  {
    question: "در حقوق، 'مسئولیت مدنی' یعنی چه؟",
    answers: [
      { text: "تعقیب کیفری فرد", correct: false },
      { text: "جبران خسارت وارد شده به دیگری", correct: true },
      { text: "دستگیری مظنون", correct: false },
      { text: "انجام خدمت اجتماعی", correct: false },
    ],
  },
  {
    question: "کدام مورد 'جرم عمدی' محسوب می‌شود؟",
    answers: [
      { text: "تخطی از سرعت بدون توجه", correct: false },
      { text: "شکستن عمدی شیشه یک مغازه", correct: true },
      { text: "لغزش روی یخ", correct: false },
      { text: "تصادف بدون قصد", correct: false },
    ],
  },
  {
    question: "قاضی چه نقشی دارد؟",
    answers: [
      { text: "نوشتن قوانین", correct: false },
      { text: "اجرای حکم و داوری در پرونده‌ها", correct: true },
      { text: "بازرسی مالی", correct: false },
      { text: "تهیه گزارش", correct: false },
    ],
  },
];



// Philosophy 
const philosophyQuestions = [
  {
    question: "فلسفه به طور کلی به مطالعه چه چیزی می‌پردازد؟",
    answers: [
      { text: "قوانین کشور", correct: false },
      { text: "سؤالات بنیادی درباره وجود، شناخت و اخلاق", correct: true },
      { text: "محاسبات ریاضی", correct: false },
      { text: "آب و هوا", correct: false },
    ],
  },
  {
    question: "سقراط معتقد بود مهم‌ترین کار انسان چیست؟",
    answers: [
      { text: "ثروتمند شدن", correct: false },
      { text: "خودشناسی", correct: true },
      { text: "سفر کردن", correct: false },
      { text: "پیروزی در جنگ", correct: false },
    ],
  },
  {
    question: "افلاطون کدام مفهوم را مطرح کرد؟",
    answers: [
      { text: "نظریه مثل", correct: true },
      { text: "قانون جاذبه", correct: false },
      { text: "عدد پی", correct: false },
      { text: "تکامل", correct: false },
    ],
  },
  {
    question: "ارسطو شاگرد چه کسی بود؟",
    answers: [
      { text: "افلاطون", correct: true },
      { text: "سقراط", correct: false },
      { text: "دکارت", correct: false },
      { text: "نیچه", correct: false },
    ],
  },
  {
    question: "رنه دکارت جمله معروف خود را چگونه بیان کرد؟",
    answers: [
      { text: "من می‌دانم، پس هستم", correct: false },
      { text: "می‌اندیشم، پس هستم", correct: true },
      { text: "شک می‌کنم، پس نیستم", correct: false },
      { text: "می‌خوابم، پس هستم", correct: false },
    ],
  },
  {
    question: "نیچه کدام مفهوم را مطرح کرد؟",
    answers: [
      { text: "انسان برتر", correct: true },
      { text: "مثل افلاطونی", correct: false },
      { text: "ماده‌گرایی", correct: false },
      { text: "فلسفه تحلیلی", correct: false },
    ],
  },
  {
    question: "کدام یک از شاخه‌های فلسفه نیست؟",
    answers: [
      { text: "اخلاق", correct: false },
      { text: "متافیزیک", correct: false },
      { text: "هواشناسی", correct: true },
      { text: "منطق", correct: false },
    ],
  },
  {
    question: "متافیزیک چه چیزی را بررسی می‌کند؟",
    answers: [
      { text: "دنیای فراتر از فیزیک و ماهیت واقعیت", correct: true },
      { text: "آشپزی سنتی", correct: false },
      { text: "ساختار دولت", correct: false },
      { text: "علوم تجربی", correct: false },
    ],
  },
  {
    question: "فلسفه اخلاق به چه می‌پردازد؟",
    answers: [
      { text: "مسائل ریاضی", correct: false },
      { text: "رفتار درست و نادرست", correct: true },
      { text: "تاریخ باستان", correct: false },
      { text: "شیمی", correct: false },
    ],
  },
  {
    question: "کانت به کدام موضوع مشهور است؟",
    answers: [
      { text: "نقد عقل محض", correct: true },
      { text: "تئوری نسبیت", correct: false },
      { text: "درمان روانی", correct: false },
      { text: "فلسفه سیاسی باستان", correct: false },
    ],
  },
];





// Geo 
const geographyQuestions = [
  {
    question: "پایتخت کشور چین چیست؟",
    answers: [
      { text: "شانگهای", correct: false },
      { text: "پکن", correct: true },
      { text: "هنگ‌کنگ", correct: false },
      { text: "گوانگجو", correct: false },
    ],
  },
  {
    question: "بزرگ‌ترین قاره جهان کدام است؟",
    answers: [
      { text: "آفریقا", correct: false },
      { text: "آسیا", correct: true },
      { text: "اروپا", correct: false },
      { text: "آمریکا", correct: false },
    ],
  },
  {
    question: "طولانی‌ترین رود جهان کدام است؟",
    answers: [
      { text: "نیل", correct: true },
      { text: "آمازون", correct: false },
      { text: "دانوب", correct: false },
      { text: "ولگا", correct: false },
    ],
  },
  {
    question: "کشور ژاپن در کدام اقیانوس قرار دارد؟",
    answers: [
      { text: "اقیانوس هند", correct: false },
      { text: "اقیانوس آرام", correct: true },
      { text: "اقیانوس اطلس", correct: false },
      { text: "اقیانوس منجمد شمالی", correct: false },
    ],
  },
  {
    question: "کدام کشور بزرگ‌ترین مساحت را دارد؟",
    answers: [
      { text: "چین", correct: false },
      { text: "روسیه", correct: true },
      { text: "کانادا", correct: false },
      { text: "برزیل", correct: false },
    ],
  },
  {
    question: "مجموعه‌ای از جزایر را چه می‌نامند؟",
    answers: [
      { text: "شبه‌جزیره", correct: false },
      { text: "مجمع‌الجزایر", correct: true },
      { text: "دشت", correct: false },
      { text: "تپه", correct: false },
    ],
  },
  {
    question: "بزرگ‌ترین بیابان جهان کدام است؟",
    answers: [
      { text: "بیابان گبی", correct: false },
      { text: "صحرای آفریقا", correct: true },
      { text: "بیابان عربستان", correct: false },
      { text: "بیابان لوت", correct: false },
    ],
  },
  {
    question: "کدام کشور دو قاره‌ای است؟",
    answers: [
      { text: "ترکیه", correct: true },
      { text: "هند", correct: false },
      { text: "آلمان", correct: false },
      { text: "مصر", correct: false },
    ],
  },
  {
    question: "قله اورست در کدام رشته‌کوه قرار دارد؟",
    answers: [
      { text: "آلپ", correct: false },
      { text: "هیمالیا", correct: true },
      { text: "آند", correct: false },
      { text: "آراگاتس", correct: false },
    ],
  },
  {
    question: "پایتخت کشور استرالیا چیست؟",
    answers: [
      { text: "سیدنی", correct: false },
      { text: "کانبرا", correct: true },
      { text: "ملبورن", correct: false },
      { text: "پرت", correct: false },
    ],
  },
];

// History 
const historyQuestions = [
  {
    question: "اولین تمدن‌های بزرگ جهان در کجا شکل گرفتند؟",
    answers: [
      { text: "اروپا", correct: false },
      { text: "بین‌النهرین", correct: true },
      { text: "آمریکا", correct: false },
      { text: "شمال آفریقا", correct: false },
    ],
  },
  {
    question: "سازنده تخت‌جمشید کدام پادشاه بود؟",
    answers: [
      { text: "کوروش", correct: false },
      { text: "داریوش بزرگ", correct: true },
      { text: "خشایارشا", correct: false },
      { text: "اردشیر", correct: false },
    ],
  },
  {
    question: "کدام تمدن اهرام مصر را ساخت؟",
    answers: [
      { text: "یونانیان", correct: false },
      { text: "مصریان باستان", correct: true },
      { text: "رومیان", correct: false },
      { text: "بابلیان", correct: false },
    ],
  },
  {
    question: "جنگ جهانی دوم در چه سالی آغاز شد؟",
    answers: [
      { text: "1945", correct: false },
      { text: "1939", correct: true },
      { text: "1920", correct: false },
      { text: "1955", correct: false },
    ],
  },
  {
    question: "کدام پادشاه هخامنشی امپراتوری ایران را گسترش داد؟",
    answers: [
      { text: "داریوش", correct: false },
      { text: "کوروش بزرگ", correct: true },
      { text: "اردشیر", correct: false },
      { text: "کمبوجیه", correct: false },
    ],
  },
  {
    question: "کشف قاره آمریکا توسط چه کسی انجام شد؟",
    answers: [
      { text: "واسکو دا گاما", correct: false },
      { text: "کریستف کلمب", correct: true },
      { text: "مارکوپولو", correct: false },
      { text: "ماژلان", correct: false },
    ],
  },
  {
    question: "جنگ ایران و عراق چند سال طول کشید؟",
    answers: [
      { text: "6 سال", correct: false },
      { text: "8 سال", correct: true },
      { text: "10 سال", correct: false },
      { text: "4 سال", correct: false },
    ],
  },
  {
    question: "خط میخی متعلق به کدام تمدن است؟",
    answers: [
      { text: "رومیان", correct: false },
      { text: "عیلام و بابل", correct: true },
      { text: "مغول‌ها", correct: false },
      { text: "یونانیان", correct: false },
    ],
  },
  {
    question: "ساخت دیوار چین در کدام دوره آغاز شد؟",
    answers: [
      { text: "دوران مدرن", correct: false },
      { text: "دوران امپراتوری چین (دوره چین شی هوانگ)", correct: true },
      { text: "قرون وسطی", correct: false },
      { text: "رنسانس", correct: false },
    ],
  },
  {
    question: "تمدن یونان باستان بیشتر به چه چیزی مشهور است؟",
    answers: [
      { text: "علوم و فلسفه", correct: true },
      { text: "کشاورزی", correct: false },
      { text: "صنعت", correct: false },
      { text: "نقاشی", correct: false },
    ],
  },
];

export{iqQuestions,mathQuestions,englishQuestions,
       lawQuestions,philosophyQuestions,geographyQuestions,
       historyQuestions};

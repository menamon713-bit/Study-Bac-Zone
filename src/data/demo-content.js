export const demoNotice =
  "هذه بيانات تجريبية لتوضيح الواجهة فقط، وليست محتوى منهجياً معتمداً. تُراجع المواد والدروس والأسئلة مع المدرس قبل النشر النهائي.";

export const subjects = [
  {
    id: "arabic",
    name: "اللغة العربية",
    icon: "📖",
    color: "blue",
    grades: ["first", "second"],
    description: "مساحة تجريبية لتنظيم فروع المادة والدروس.",
    lessons: [
      { id: "arabic-intro", title: "مدخل إلى المادة", duration: "15 دقيقة", type: "شرح تمهيدي", summary: "تعرف على طريقة تنظيم الدروس والملاحظات داخل صفحة المادة." },
      { id: "arabic-reading", title: "تدريب قراءة تجريبي", duration: "20 دقيقة", type: "تدريب", summary: "نموذج توضيحي لطريقة عرض التدريبات والأنشطة." },
      { id: "arabic-review", title: "مراجعة قصيرة", duration: "10 دقائق", type: "مراجعة", summary: "مثال على صفحة مراجعة مختصرة قبل الانتقال إلى درس جديد." }
    ]
  },
  {
    id: "english",
    name: "اللغة الإنجليزية",
    icon: "🌐",
    color: "purple",
    grades: ["first", "second"],
    description: "تنظيم تجريبي للوحدات والمفردات والتدريبات.",
    lessons: [
      { id: "english-intro", title: "Getting Started", duration: "12 دقيقة", type: "تمهيدي", summary: "صفحة توضيحية لتنظيم محتوى المادة." },
      { id: "english-vocabulary", title: "Vocabulary Practice", duration: "18 دقيقة", type: "تدريب", summary: "نموذج لعرض نشاط مفردات تفاعلي بعد إضافة المحتوى المعتمد." },
      { id: "english-review", title: "Quick Review", duration: "10 دقائق", type: "مراجعة", summary: "نموذج مراجعة قصير." }
    ]
  },
  {
    id: "math",
    name: "الرياضيات",
    icon: "📐",
    color: "blue",
    grades: ["first", "second"],
    description: "صفحات تجريبية للدروس والأمثلة والتدريبات.",
    lessons: [
      { id: "math-intro", title: "مقدمة وتنظيم الدروس", duration: "10 دقائق", type: "تمهيدي", summary: "تعرف على تقسيم المادة إلى وحدات ودروس." },
      { id: "math-example", title: "مثال محلول تجريبي", duration: "15 دقيقة", type: "مثال", summary: "مكان مخصص لعرض خطوات الحل بعد مراجعتها واعتمادها." },
      { id: "math-practice", title: "تدريب قصير", duration: "15 دقيقة", type: "تدريب", summary: "مكان مخصص للتدريبات المرتبطة بالدرس." }
    ]
  },
  {
    id: "science",
    name: "العلوم",
    icon: "🧪",
    color: "purple",
    grades: ["first", "second"],
    description: "واجهة تجريبية لتنظيم الموضوعات والشرح والمراجعة.",
    lessons: [
      { id: "science-intro", title: "مقدمة المادة", duration: "10 دقائق", type: "تمهيدي", summary: "نموذج لتقديم المادة ومحتواها." },
      { id: "science-topic", title: "موضوع علمي تجريبي", duration: "20 دقيقة", type: "شرح", summary: "يُستبدل هذا النص بشرح يراجعه المدرس." },
      { id: "science-review", title: "مراجعة المفاهيم", duration: "12 دقيقة", type: "مراجعة", summary: "نموذج لصفحة مراجعة المفاهيم." }
    ]
  },
  {
    id: "programming",
    name: "البرمجة",
    icon: "💻",
    color: "blue",
    grades: ["first", "second"],
    description: "مساحة توضيحية للأكواد والمفاهيم والتطبيقات.",
    lessons: [
      { id: "programming-intro", title: "ما هي البرمجة؟", duration: "12 دقيقة", type: "تمهيدي", summary: "مقدمة توضيحية عن تنظيم دروس البرمجة." },
      { id: "programming-logic", title: "التفكير المنطقي", duration: "18 دقيقة", type: "شرح", summary: "مكان لشرح المفاهيم الأساسية بأمثلة معتمدة." },
      { id: "programming-practice", title: "تدريب تطبيقي", duration: "20 دقيقة", type: "تطبيق", summary: "مكان لإضافة تمرين عملي بعد مراجعته." }
    ]
  }
];

export const grades = [
  {
    id: "first",
    number: "01",
    title: "الصف الأول بكالوريا",
    description: "تصفح المواد والنماذج التعليمية التجريبية الخاصة بالصف الأول."
  },
  {
    id: "second",
    number: "02",
    title: "الصف الثاني بكالوريا",
    description: "تصفح المواد والنماذج التعليمية التجريبية الخاصة بالصف الثاني."
  }
];

export const sampleQuestions = [
  {
    question: "ما ناتج العملية الحسابية 8 + 7؟",
    choices: ["13", "14", "15", "16"],
    answer: 2,
    explanation: "8 + 7 = 15. هذا سؤال حسابي تجريبي لعرض آلية الاختبار فقط."
  },
  {
    question: "أي مما يلي يُستخدم لعرض صفحة ويب؟",
    choices: ["متصفح الإنترنت", "آلة حاسبة", "محرر صور فقط", "مشغل موسيقى"],
    answer: 0,
    explanation: "متصفح الإنترنت يعرض صفحات الويب ويتفاعل معها."
  },
  {
    question: "ما اللغة المستخدمة أساسًا لتنسيق مظهر صفحات الويب؟",
    choices: ["HTML", "CSS", "SQL", "Python فقط"],
    answer: 1,
    explanation: "CSS مسؤولة عن تنسيق وتصميم عناصر صفحات الويب."
  }
];

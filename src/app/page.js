import Link from "next/link";

const features = [
  { icon: "📚", title: "مكتبة تعليمية", text: "مساحة منظمة للكتب والمراجع والمواد الدراسية." },
  { icon: "✍️", title: "تقييمات وامتحانات", text: "تدريبات واختبارات لمتابعة فهم الدروس." },
  { icon: "⏱️", title: "مؤقت المذاكرة", text: "نظّم جلسات المذاكرة وتابع وقتك." },
  { icon: "🏆", title: "نقاط وإنجازات", text: "تابع تقدمك واجمع نقاطًا وشارات إنجاز." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-label">منصتك التعليمية للبكالوريا المصرية</span>
          <h1>خلي مذاكرتك <span>أوضح،</span><br />وخطواتك أقرب لهدفك.</h1>
          <p>مكان واحد لتنظيم دراستك، متابعة الدروس، حل التقييمات، وملاحظة تقدمك خطوة بخطوة.</p>
          <div className="hero-actions">
            <Link className="button-primary" href="/login">دخول الطلاب</Link>
            <Link className="button-secondary" href="/about">اكتشف المنصة</Link>
          </div>
          <div className="hero-note"><span className="note-dot"></span> للصف الأول والثاني بكالوريا</div>
        </div>
        <div className="hero-art" aria-label="بطاقة توضيحية للمنصة">
          <div className="art-card art-card-main">
            <div className="art-card-top"><span>مساحة تعلمك</span><span className="art-icon">✦</span></div>
            <div className="art-circle">📘</div>
            <h2>ابدأ بخطوة صغيرة</h2>
            <p>درس اليوم يصنع فرقًا في تقدمك.</p>
            <div className="fake-progress"><span></span></div>
            <small>التقدم يظهر هنا بعد ربط حسابك</small>
          </div>
          <div className="floating-chip chip-one">✦ تعلم باستمرار</div>
          <div className="floating-chip chip-two">✓ خطوة كل يوم</div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <span className="eyebrow">ماذا ستجد هنا؟</span>
          <h2>أدوات تساعدك في رحلتك الدراسية</h2>
          <p>واجهة منظمة تجمع أهم أدوات المذاكرة والمتابعة في مكان واحد.</p>
        </div>
        <div className="feature-grid">
          {features.map((item) => (
            <article className="feature-card" key={item.title}>
              <span className="feature-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grades-section">
        <div>
          <span className="eyebrow eyebrow-light">ابدأ من صفك</span>
          <h2>اختار مرحلتك الدراسية</h2>
          <p>سيتم عرض المواد والمسارات المعتمدة بعد إدخال المناهج ومراجعتها.</p>
        </div>
        <div className="grade-cards">
          <Link href="/grade/first" className="grade-card"><span>01</span><b>الصف الأول بكالوريا</b><small>عرض مساحة الصف ←</small></Link>
          <Link href="/grade/second" className="grade-card"><span>02</span><b>الصف الثاني بكالوريا</b><small>عرض مساحة الصف ←</small></Link>
        </div>
      </section>

      <section className="trust-strip">
        <div><b>تعلم منظم</b><span>المواد والدروس في مكان واحد</span></div>
        <div><b>تابع تقدمك</b><span>راجع إنجازاتك ونتائجك</span></div>
        <div><b>دعم واضح</b><span>قنوات تواصل معلنة</span></div>
      </section>
    </>
  );
}
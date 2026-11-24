import Link from "next/link";

const features = [
  {
    icon: "📚",
    title: "المكتبة التعليمية",
    text: "سيتم تنظيم الكتب والمراجع والمواد الدراسية بعد مراجعة المحتوى ومصادره.",
  },
  {
    icon: "✍️",
    title: "التقييمات والامتحانات",
    text: "نظام التدريبات والاختبارات قيد التجهيز، ولن تُعرض نتائج فعلية قبل تشغيله.",
  },
  {
    icon: "⏱️",
    title: "تنظيم وقت المذاكرة",
    text: "واجهة الأداة قيد التطوير، ولم يتم تفعيل حفظ جلسات المذاكرة أو تتبع الوقت بعد.",
  },
  {
    icon: "🏆",
    title: "النقاط والإنجازات",
    text: "سيتم احتساب الإنجازات والنقاط بعد ربط حسابات الطلاب بنظام خلفي موثوق.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-label">منصتك التعليمية للبكالوريا المصرية</span>
          <h1>خلي مذاكرتك <span>أوضح،</span><br />وخطواتك أقرب لهدفك.</h1>
          <p>
            Study Bac zone مساحة تعليمية قيد التطوير، تهدف إلى جمع الموارد
            الدراسية وأدوات المتابعة والتقييم في تجربة واحدة منظمة.
          </p>
          <div className="hero-actions">
            <Link className="button-primary" href="/login">صفحة دخول الطلاب</Link>
            <Link className="button-secondary" href="/about">اكتشف المنصة</Link>
          </div>
          <div className="hero-note">
            <span className="note-dot" aria-hidden="true" />
            للصف الأول والثاني بكالوريا المصرية
          </div>
        </div>

        <div className="hero-art" role="img" aria-label="تصميم توضيحي لمساحة تعليمية">
          <div className="art-card art-card-main">
            <div className="art-card-top">
              <span>Study Bac zone</span>
              <span className="art-icon" aria-hidden="true">✦</span>
            </div>
            <div className="art-circle" aria-hidden="true">📘</div>
            <h2>ابدأ بخطوة صغيرة</h2>
            <p>مساحة منظمة لرحلتك الدراسية.</p>
            <div className="fake-progress" aria-hidden="true"><span /></div>
            <small>معاينة تصميمية — لا تمثل تقدمًا دراسيًا حقيقيًا</small>
          </div>
          <div className="floating-chip chip-one">✦ تعلم باستمرار</div>
          <div className="floating-chip chip-two">✓ خطوة كل يوم</div>
        </div>
      </section>

      <section className="section-block" aria-labelledby="features-title">
        <div className="section-heading">
          <span className="eyebrow">ماذا ستجد هنا؟</span>
          <h2 id="features-title">أدوات تساعدك في رحلتك الدراسية</h2>
          <p>هذه هي الخدمات المخطط لها، وحالة كل خدمة موضحة بوضوح.</p>
        </div>
        <div className="feature-grid">
          {features.map((item) => (
            <article className="feature-card" key={item.title}>
              <span className="feature-icon" aria-hidden="true">{item.icon}</span>
              <span className="feature-status">قيد التجهيز</span>
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
          <p>صفحات الصفوف متاحة للتعريف بالمسارات، أما المحتوى الدراسي فيُضاف بعد مراجعته.</p>
        </div>
        <div className="grade-cards">
          <Link href="/grade/first" className="grade-card">
            <span>01</span>
            <b>الصف الأول بكالوريا</b>
            <small>عرض صفحة الصف ←</small>
          </Link>
          <Link href="/grade/second" className="grade-card">
            <span>02</span>
            <b>الصف الثاني بكالوريا</b>
            <small>عرض صفحة الصف ←</small>
          </Link>
        </div>
      </section>

      <section className="trust-strip" aria-label="مبادئ المنصة">
        <div><b>محتوى مُراجع</b><span>لن يُنشر محتوى دراسي قبل مراجعة مصدره.</span></div>
        <div><b>وضوح الحالة</b><span>نوضح الخدمات المتاحة وتلك التي ما زالت قيد التطوير.</span></div>
        <div><b>قنوات دعم معلنة</b><span>يمكنك الوصول إلى وسائل التواصل من صفحة الدعم.</span></div>
      </section>
    </>
  );
}

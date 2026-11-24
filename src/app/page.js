import Link from "next/link";

const features = [
  { icon: "📚", title: "المكتبة التعليمية", text: "تصفح المواد والدروس النموذجية وابحث داخل المكتبة.", href: "/library", label: "استكشف المكتبة" },
  { icon: "✍️", title: "التقييمات والامتحانات", text: "جرّب نموذج اختبار تفاعلي وراجع إجاباتك.", href: "/assessments", label: "جرّب اختبارًا" },
  { icon: "🎯", title: "الصفوف الدراسية", text: "انتقل إلى مساحة الصف الأول أو الثاني وتصفح المواد.", href: "/grade/first", label: "عرض الصفوف" },
  { icon: "🏆", title: "النقاط والإنجازات", text: "شاهد معاينة لوحة الإنجازات والنقاط التجريبية.", href: "/rewards", label: "عرض الإنجازات" },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-label">مساحتك التعليمية للبكالوريا المصرية</span>
          <h1>خلي مذاكرتك <span>أوضح،</span><br />وخطواتك أقرب لهدفك.</h1>
          <p>Study Bac zone تجمع في واجهة واحدة المكتبة التعليمية، وصفحات المواد والدروس، والتدريبات، ومتابعة الإنجاز. النسخة الحالية Frontend تجريبية قابلة للتطوير والربط لاحقًا.</p>
          <div className="hero-actions">
            <Link className="button-primary" href="/library">ابدأ من المكتبة</Link>
            <Link className="button-secondary" href="/grade/second">صفحة الصف الثاني</Link>
          </div>
          <div className="hero-note"><span className="note-dot" aria-hidden="true" /> واجهات تفاعلية تجريبية — بدون حسابات أو حفظ سحابي حتى الآن</div>
        </div>
        <div className="hero-art" role="img" aria-label="تصميم توضيحي لمساحة تعليمية">
          <div className="art-card art-card-main">
            <div className="art-card-top"><span>Study Bac zone</span><span className="art-icon" aria-hidden="true">✦</span></div>
            <div className="art-circle" aria-hidden="true">📘</div>
            <h2>ابدأ بخطوة صغيرة</h2>
            <p>تعلم، تدرب، وراجع تقدمك.</p>
            <div className="fake-progress" aria-hidden="true"><span /></div>
            <small>معاينة تصميمية — لا تمثل تقدمًا دراسيًا حقيقيًا</small>
          </div>
          <div className="floating-chip chip-one">✦ تعلم باستمرار</div>
          <div className="floating-chip chip-two">✓ خطوة كل يوم</div>
        </div>
      </section>

      <section className="section-block" aria-labelledby="features-title">
        <div className="section-heading">
          <span className="eyebrow">ابدأ الاستكشاف</span>
          <h2 id="features-title">كل أدواتك التعليمية في مكان واحد</h2>
          <p>تقدر تتصفح وتجرب الواجهات الحالية. المحتوى الدراسي النهائي يُراجع مع المدرس قبل اعتماده.</p>
        </div>
        <div className="feature-grid">
          {features.map((item) => (
            <article className="feature-card" key={item.title}>
              <span className="feature-icon" aria-hidden="true">{item.icon}</span>
              <span className="feature-status">واجهة تجريبية</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link className="text-link" href={item.href}>{item.label} ←</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="grades-section">
        <div>
          <span className="eyebrow eyebrow-light">ابدأ من صفك</span>
          <h2>اختار مرحلتك الدراسية</h2>
          <p>صفحات الصفوف تعرض مواد نموذجية، ويمكن تحديثها لتطابق توزيع المنهج المعتمد.</p>
        </div>
        <div className="grade-cards">
          <Link href="/grade/first" className="grade-card"><span>01</span><b>الصف الأول بكالوريا</b><small>استكشف المواد ←</small></Link>
          <Link href="/grade/second" className="grade-card"><span>02</span><b>الصف الثاني بكالوريا</b><small>استكشف المواد ←</small></Link>
        </div>
      </section>

      <section className="trust-strip" aria-label="مبادئ المنصة">
        <div><b>محتوى قابل للمراجعة</b><span>المواد والدروس النموذجية ليست بديلًا عن المحتوى المعتمد.</span></div>
        <div><b>تجربة واضحة</b><span>نوضح ما يعمل محليًا وما يحتاج إلى Backend.</span></div>
        <div><b>تطوير تدريجي</b><span>سيتم ربط الحسابات وحفظ النتائج بعد تجهيز الخادم.</span></div>
      </section>
    </>
  );
}

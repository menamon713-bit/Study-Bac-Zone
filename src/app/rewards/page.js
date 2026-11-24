import InfoPage from "@/components/InfoPage";

const achievements = [
  ["📚", "قارئ نشيط", "إنهاء مجموعة دروس نموذجية", "25 نقطة"],
  ["🎯", "محاولة تدريب", "إكمال نموذج اختبار تجريبي", "15 نقطة"],
  ["🗓️", "منظم المذاكرة", "الالتزام بخطة أسبوعية", "30 نقطة"],
  ["⭐", "خطوة مستمرة", "العودة لمتابعة التعلم", "10 نقاط"]
];

export default function RewardsPage() {
  return (
    <InfoPage title="النقاط والإنجازات" intro="معاينة لتصميم لوحة الإنجازات وطريقة عرض المكافآت التعليمية.">
      <div className="notice-banner"><span>ⓘ</span><p>الأرقام والإنجازات التالية أمثلة تصميمية فقط. لا توجد نقاط حقيقية أو حسابات طلاب أو حفظ مركزي حاليًا.</p></div>
      <section className="points-overview">
        <div className="points-card"><span>رصيد تجريبي</span><strong>120</strong><small>نقطة نموذجية غير محفوظة</small></div>
        <div className="points-side"><b>استمر في التعلم خطوة بخطوة</b><p>سيُحسب الرصيد الحقيقي لاحقًا من أنشطة موثقة على الخادم.</p><div className="points-progress"><span /></div><small>معاينة مرئية فقط</small></div>
      </section>
      <h2 className="subsection-title">نماذج الإنجازات</h2>
      <div className="achievement-grid">
        {achievements.map(([icon, title, description, points]) => (
          <article className="achievement-card" key={title}><span>{icon}</span><div><b>{title}</b><p>{description}</p><small>{points}</small></div><em>نموذج</em></article>
        ))}
      </div>
      <div className="content-note"><b>الإنصاف والشفافية</b><p>متابعة الإنجازات والدرجات الأساسية ستظل مجانية. أي رسوم مستقبلية تخص إصدار الشهادة الاختياري فقط، مع توضيحها مسبقًا وإشراف ولي الأمر.</p></div>
    </InfoPage>
  );
}

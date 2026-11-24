import InfoPage from "@/components/InfoPage";
export default function VerifyCertificatePage() {
  return <InfoPage title="التحقق من الشهادات" intro="خدمة التحقق ستُفعّل عند إنشاء نظام إصدار الشهادات وربطه بالخادم.">
    <div className="empty-state"><span>🔎</span><h2>التحقق غير متاح حاليًا</h2><p>لن تظهر أي شهادة على أنها موثقة قبل تفعيل سجل شهادات فعلي قابل للتحقق.</p></div>
  </InfoPage>;
}
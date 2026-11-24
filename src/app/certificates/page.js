import InfoPage from "@/components/InfoPage";
export default function CertificatesPage() {
  return <InfoPage title="شهادات الإنجاز" intro="الشهادات اختيارية للطلاب المستوفين لشروط الإنجاز.">
    <div className="empty-state"><span>🏅</span><h2>رسوم إصدار الشهادة: 70 جنيهًا</h2><p>لا توجد بوابة دفع داخل المنصة. يتم طلب الشهادة والتنسيق بشأن استلامها عبر التواصل المباشر مع المطور.</p>
      <a className="button-primary inline-button" href="https://wa.me/201554416094?text=أرغب%20في%20الاستفسار%20عن%20شهادة%20الإنجاز" target="_blank" rel="noreferrer">التواصل لطلب الشهادة</a>
    </div>
  </InfoPage>;
}
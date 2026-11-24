import InfoPage from "@/components/InfoPage";

const whatsappMessage = encodeURIComponent(
  "مرحبًا، أريد الاستفسار عن شروط إصدار شهادة الإنجاز الاختيارية في Study Bac zone."
);

export default function CertificatesPage() {
  return (
    <InfoPage
      title="شهادات الإنجاز"
      intro="إصدار الشهادة اختياري، ولا يؤثر على متابعة الإنجاز أو الاستفادة من الخدمات التعليمية المجانية."
    >
      <div className="empty-state">
        <span aria-hidden="true">🏅</span>
        <h2>رسوم إصدار الشهادة: 70 جنيهًا</h2>
        <p>
          الرسوم تخص إصدار الشهادة فقط. متابعة الإنجازات والدرجات والنقاط
          والأهلية تظل مجانية. خدمة الإصدار لم تُفعّل بعد، ولا توجد بوابة دفع
          إلكترونية داخل المنصة.
        </p>
        <p>
          عند تفعيل الخدمة، يجب أن يتم الاستفسار والتنسيق وأي إجراء مالي
          من خلال ولي الأمر. لا ترسل بيانات بنكية أو كلمات مرور عبر الرسائل.
        </p>
        <p>
          الشهادة شهادة إنجاز خاصة بالمنصة، وليست شهادة رسمية صادرة عن وزارة
          التربية والتعليم أو جهة حكومية.
        </p>
        <a
          className="button-primary inline-button"
          href={`https://wa.me/201554416094?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          الاستفسار عن الشهادة
        </a>
      </div>
    </InfoPage>
  );
}

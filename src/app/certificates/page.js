import InfoPage from "@/components/InfoPage";
import Link from "next/link";

export default function CertificatesPage() {
  return (
    <InfoPage title="شهادات الإنجاز" intro="معاينة شكل شهادة الإنجاز وطريقة عرض شروط الإصدار.">
      <div className="notice-banner"><span>ⓘ</span><p>هذه معاينة تصميمية وليست شهادة صادرة أو موثقة. لا يوجد إصدار أو دفع إلكتروني حاليًا.</p></div>
      <div className="certificate-preview">
        <div className="certificate-border">
          <span className="certificate-mark">SB</span>
          <small>STUDY BAC ZONE</small>
          <h2>شهادة إنجاز تعليمية</h2>
          <p>تُمنح هذه الشهادة إلى</p>
          <strong className="certificate-student">اسم الطالب يظهر بعد الربط</strong>
          <p>تقديرًا لإتمام متطلبات إنجاز تعليمية محددة.</p>
          <div className="certificate-footer"><span>رقم الشهادة: غير مُنشأ</span><span>التوقيع: غير مُعتمد</span></div>
          <b className="certificate-watermark">نموذج تجريبي</b>
        </div>
      </div>
      <div className="certificate-fees">
        <div><span className="mini-label">رسوم اختيارية مستقبلية</span><h2>70 جنيهًا</h2><p>رسوم إصدار الشهادة فقط عند تفعيل الخدمة. الإنجازات والدرجات والنقاط تظل مجانية.</p></div>
        <div className="certificate-actions"><Link className="button-secondary" href="/certificates/verify">صفحة التحقق التجريبية</Link><a className="button-primary" href="https://wa.me/201554416094" target="_blank" rel="noopener noreferrer">استفسار عن الشروط</a></div>
      </div>
      <p className="form-note">الشهادة، عند تفعيلها، ستكون شهادة إنجاز خاصة بالمنصة وليست شهادة رسمية صادرة عن وزارة التربية والتعليم أو جهة حكومية. أي إجراء مالي مستقبلي يكون بإشراف ولي الأمر.</p>
    </InfoPage>
  );
}

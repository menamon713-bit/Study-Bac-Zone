import Link from "next/link";
import InfoPage from "@/components/InfoPage";

export default function LoginPage() {
  return (
    <InfoPage title="دخول الطلاب" intro="تصميم واجهة الدخول وتجهيز أماكن الحقول قبل ربط نظام الحسابات.">
      <div className="login-preview">
        <div className="login-preview-icon">🔐</div>
        <span className="mini-label">معاينة واجهة تسجيل الدخول</span>
        <h2>أهلًا بك في Study Bac zone</h2>
        <p>ستستخدم هذه الصفحة كود الطالب أو وسيلة الدخول التي يعتمدها نظام الحسابات لاحقًا.</p>
        <form className="login-preview-form">
          <label htmlFor="student-code">كود الطالب</label>
          <input id="student-code" placeholder="سيُفعّل بعد ربط النظام" disabled />
          <label htmlFor="student-password">كلمة المرور</label>
          <input id="student-password" type="password" placeholder="سيُفعّل بعد ربط النظام" disabled />
          <button className="button-primary" type="button" disabled>تسجيل الدخول غير متاح بعد</button>
        </form>
        <div className="notice-banner"><span>ⓘ</span><p>لا تدخل بيانات حقيقية. هذه واجهة فقط، ولا توجد مصادقة أو جلسات أو حسابات فعالة حتى الآن.</p></div>
        <Link href="/support" className="text-link">الانتقال إلى الدعم الفني</Link>
      </div>
    </InfoPage>
  );
}

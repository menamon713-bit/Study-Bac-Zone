import Link from "next/link";
import InfoPage from "@/components/InfoPage";
import styles from "./login.module.css";

export default function LoginPage() {
  const whatsappMessage = encodeURIComponent(
    "مرحبًا، أريد الاستفسار عن موعد تفعيل تسجيل الدخول في منصة Study Bac zone."
  );

  return (
    <InfoPage
      title="دخول الطلاب"
      intro="ستكون هذه الصفحة بوابة الدخول إلى المساحة التعليمية بعد تفعيل نظام الحسابات."
    >
      <div className={styles.loginContainer}>
        <div className={styles.loginIcon} aria-hidden="true">🔐</div>

        <span className={styles.status}>تسجيل الدخول قيد التجهيز</span>
        <h2>أهلًا بك في Study Bac zone</h2>

        <p className={styles.description}>
          لم يتم تفعيل حسابات الطلاب أو التحقق من أكواد الدخول حتى الآن.
          لن تحتاج إلى إدخال أي بيانات في هذه المرحلة.
        </p>

        <div className={styles.notice} role="status">
          <strong>تنبيه:</strong>
          لا تدخل كودًا حقيقيًا أو كلمة مرور في أي نموذج تجريبي.
          سيتم الإعلان عن طريقة الدخول عند اكتمال النظام.
        </div>

        <div className={styles.requestBox}>
          <h3>تريد الاستفسار عن الدخول؟</h3>
          <p>يمكنك التواصل للاستفسار فقط. التواصل لا يعني إنشاء حساب أو إصدار كود دخول حاليًا.</p>
          <a
            href={`https://wa.me/201554416094?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            الاستفسار عبر واتساب
          </a>
        </div>

        <Link href="/" className={styles.backLink}>العودة إلى الصفحة الرئيسية</Link>
      </div>
    </InfoPage>
  );
}

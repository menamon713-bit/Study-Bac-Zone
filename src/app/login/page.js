"use client";

import { useState } from "react";
import InfoPage from "@/components/InfoPage";
import styles from "./login.module.css";

const DEMO_CODE = "SBZ-DEMO-2026";

export default function LoginPage() {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const enteredCode = code.trim().toUpperCase();

    if (!enteredCode) {
      setStatus("error");
      setMessage("من فضلك أدخل كود الدخول.");
      return;
    }

    if (enteredCode === DEMO_CODE) {
      setStatus("success");
      setMessage("تم قبول كود التجربة. هذه معاينة للواجهة فقط وليست عملية تسجيل دخول حقيقية.");
      return;
    }

    setStatus("error");
    setMessage("الكود غير صحيح. راجع الكود أو اطلب كودًا جديدًا.");
  }

  const whatsappMessage = encodeURIComponent(
    "مرحبًا، أريد طلب كود دخول إلى منصة Study Bac zone."
  );

  return (
    <InfoPage
      title="دخول الطلاب"
      intro="أدخل كود الدخول الخاص بك للوصول إلى مساحتك التعليمية."
    >
      <div className={styles.loginContainer}>
        <div className={styles.loginIcon}>🔐</div>

        <h2>مرحبًا بك في Study Bac zone</h2>

        <p className={styles.description}>
          استخدم كود الدخول الذي حصلت عليه للوصول إلى المنصة.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="access-code">كود الطالب</label>

          <input
            id="access-code"
            name="access-code"
            type="text"
            value={code}
            onChange={(event) => {
              setCode(event.target.value);
              setMessage("");
              setStatus("");
            }}
            placeholder="أدخل كود الدخول"
            autoComplete="off"
            spellCheck="false"
            dir="ltr"
          />

          <button type="submit" className={styles.loginButton}>
            تسجيل الدخول
          </button>
        </form>

        {message && (
          <div
            className={`${styles.message} ${
              status === "success" ? styles.success : styles.error
            }`}
            role="status"
          >
            {message}
          </div>
        )}

        <div className={styles.requestBox}>
          <h3>ليس لديك كود دخول؟</h3>

          <p>
            يمكنك طلب كود دخول من خلال التواصل معنا عبر واتساب.
          </p>

          <a
            href={`https://wa.me/201554416094?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            طلب كود عبر واتساب
          </a>
        </div>

        <p className={styles.demoNote}>
          نسخة تجريبية: كود الاختبار هو
          <strong dir="ltr"> SBZ-DEMO-2026 </strong>
          ولا يمنح حسابًا حقيقيًا.
        </p>
      </div>
    </InfoPage>
  );
}

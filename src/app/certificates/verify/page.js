"use client";

import { useState } from "react";
import InfoPage from "@/components/InfoPage";

export default function VerifyCertificatePage() {
  const [code, setCode] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <InfoPage title="التحقق من الشهادات" intro="واجهة إدخال رقم شهادة، جاهزة للربط بخدمة التحقق الخلفية.">
      <div className="notice-banner"><span>ⓘ</span><p>لا يوجد سجل شهادات متصل حاليًا؛ لذلك لا يمكن تأكيد صحة أي شهادة من هذه الصفحة.</p></div>
      <form className="verify-form" onSubmit={(event) => { event.preventDefault(); setChecked(true); }}>
        <label htmlFor="certificate-code">رقم الشهادة</label>
        <input id="certificate-code" value={code} onChange={(event) => { setCode(event.target.value); setChecked(false); }} placeholder="مثال: SBZ-2026-0001" autoComplete="off" />
        <button className="button-primary" type="submit" disabled={!code.trim()}>فحص تجريبي للواجهة</button>
      </form>
      {checked && <div className="verify-result" role="status"><b>تعذر التحقق حاليًا</b><p>تم استقبال الرقم في الواجهة فقط، لكن لا يوجد Backend أو سجل شهادات للتحقق منه. لا تعتبر هذه النتيجة إثباتًا لصحة الشهادة.</p></div>}
    </InfoPage>
  );
}

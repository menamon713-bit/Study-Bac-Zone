"use client";

import { useState } from "react";

export default function LessonCompletionButton() {
  const [completed, setCompleted] = useState(false);
  return (
    <>
      <button
        type="button"
        className={completed ? "button-secondary" : "button-primary"}
        onClick={() => setCompleted((value) => !value)}
      >
        {completed ? "تم تحديد الدرس كمكتمل محليًا ✓" : "تحديد كمكتمل"}
      </button>
      <p className="form-note">حالة الإكمال مؤقتة داخل الصفحة فقط، ولا يتم حفظها بعد إغلاقها.</p>
    </>
  );
}

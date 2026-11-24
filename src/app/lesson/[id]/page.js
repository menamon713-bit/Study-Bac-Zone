import Link from "next/link";
import { notFound } from "next/navigation";
import InfoPage from "@/components/InfoPage";
import LessonCompletionButton from "@/components/LessonCompletionButton";
import { subjects, demoNotice } from "@/data/demo-content";

export function generateStaticParams() {
  return subjects.flatMap((subject) => subject.lessons.map((lesson) => ({ id: lesson.id })));
}

export default async function LessonPage({ params }) {
  const { id } = await params;
  const subject = subjects.find((item) => item.lessons.some((lesson) => lesson.id === id));
  const lesson = subject?.lessons.find((item) => item.id === id);
  if (!subject || !lesson) notFound();

  return (
    <InfoPage eyebrow={subject.name} title={lesson.title} intro={`${lesson.type} · ${lesson.duration}`}>
      <div className="notice-banner"><span>ⓘ</span><p>{demoNotice}</p></div>
      <div className="lesson-content">
        <div className="lesson-cover"><span>{subject.icon}</span><b>{lesson.title}</b><small>Study Bac zone · نموذج واجهة درس</small></div>
        <h2>عن هذا الدرس</h2>
        <p>{lesson.summary}</p>
        <h2>محتوى الدرس</h2>
        <p>سيُضاف هنا شرح الدرس المعتمد، والأمثلة، والملاحظات، والملفات المسموح باستخدامها بعد مراجعتها مع المدرس.</p>
        <div className="lesson-placeholder"><b>مساحة المحتوى التعليمي</b><span>يمكن لاحقًا ربط هذا الجزء بمحتوى الدرس القادم من قاعدة البيانات أو نظام إدارة المحتوى.</span></div>
        <LessonCompletionButton />
      </div>
      <Link className="button-secondary inline-button" href={`/library/${subject.id}`}>العودة إلى دروس المادة</Link>
    </InfoPage>
  );
}

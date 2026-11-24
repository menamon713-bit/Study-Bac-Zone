import Link from "next/link";
import { notFound } from "next/navigation";
import InfoPage from "@/components/InfoPage";
import { subjects, demoNotice } from "@/data/demo-content";

export function generateStaticParams() {
  return subjects.map((subject) => ({ subject: subject.id }));
}

export default async function SubjectPage({ params }) {
  const { subject: subjectId } = await params;
  const subject = subjects.find((item) => item.id === subjectId);
  if (!subject) notFound();

  return (
    <InfoPage eyebrow="المكتبة التعليمية" title={subject.name} intro={subject.description}>
      <div className="notice-banner"><span>ⓘ</span><p>{demoNotice}</p></div>
      <div className="lesson-list">
        {subject.lessons.map((lesson, index) => (
          <Link className="lesson-row" href={`/lesson/${lesson.id}`} key={lesson.id}>
            <span className="lesson-number">{String(index + 1).padStart(2, "0")}</span>
            <span className="lesson-main"><b>{lesson.title}</b><small>{lesson.type} · {lesson.duration}</small></span>
            <span className="lesson-arrow" aria-hidden="true">←</span>
          </Link>
        ))}
      </div>
      <Link className="button-secondary inline-button" href="/library">العودة إلى المكتبة</Link>
    </InfoPage>
  );
}

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export default function CatalogExplorer({ subjects, grade = "all" }) {
  const [query, setQuery] = useState("");
  const [selectedGrade, setSelectedGrade] = useState(grade);

  const visible = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return subjects.filter((subject) => {
      const matchesGrade = selectedGrade === "all" || subject.grades.includes(selectedGrade);
      const matchesQuery = !normalized ||
        subject.name.toLowerCase().includes(normalized) ||
        subject.description.toLowerCase().includes(normalized);
      return matchesGrade && matchesQuery;
    });
  }, [query, selectedGrade, subjects]);

  return (
    <div className="catalog-explorer">
      <div className="catalog-toolbar">
        <label className="catalog-search">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="ابحث عن مادة..."
            aria-label="ابحث عن مادة"
          />
        </label>
        <div className="catalog-filters" aria-label="تصفية حسب الصف">
          <button type="button" className={selectedGrade === "all" ? "filter-chip active" : "filter-chip"} onClick={() => setSelectedGrade("all")}>كل الصفوف</button>
          <button type="button" className={selectedGrade === "first" ? "filter-chip active" : "filter-chip"} onClick={() => setSelectedGrade("first")}>الأول</button>
          <button type="button" className={selectedGrade === "second" ? "filter-chip active" : "filter-chip"} onClick={() => setSelectedGrade("second")}>الثاني</button>
        </div>
      </div>

      <p className="catalog-count">عدد المواد المعروضة: {visible.length}</p>
      {visible.length ? (
        <div className="learning-grid">
          {visible.map((subject) => (
            <article className="learning-card" key={subject.id}>
              <div className={`learning-icon ${subject.color || ""}`} aria-hidden="true">{subject.icon}</div>
              <div className="learning-card-body">
                <span className="mini-label">مادة تعليمية تجريبية</span>
                <h2>{subject.name}</h2>
                <p>{subject.description}</p>
                <div className="learning-meta"><span>{subject.lessons.length} دروس نموذجية</span><span>الصف الأول والثاني</span></div>
                <Link className="button-primary card-action" href={`/library/${subject.id}`}>فتح المادة <span aria-hidden="true">←</span></Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state"><span>🔎</span><h2>لا توجد نتائج</h2><p>جرّب كلمة بحث مختلفة أو غيّر الصف المحدد.</p></div>
      )}
    </div>
  );
}

export default function InfoPage({ eyebrow = "Study Bac zone", title, intro, children }) {
  return (
    <div className="page-wrap">
      <div className="page-heading">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {intro && <p>{intro}</p>}
      </div>
      <article className="content-card">{children}</article>
    </div>
  );
}
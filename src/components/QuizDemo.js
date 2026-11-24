"use client";

import { useState } from "react";

export default function QuizDemo({ questions }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [index, setIndex] = useState(0);

  const question = questions[index];
  const score = questions.reduce((total, item, i) => total + (answers[i] === item.answer ? 1 : 0), 0);

  function choose(choice) {
    if (submitted) return;
    setAnswers((current) => ({ ...current, [index]: choice }));
  }

  function reset() {
    setAnswers({});
    setSubmitted(false);
    setIndex(0);
  }

  return (
    <section className="quiz-panel">
      <div className="quiz-topline">
        <span className="mini-label">اختبار تفاعلي تجريبي</span>
        <span className="quiz-progress">السؤال {index + 1} من {questions.length}</span>
      </div>
      <div className="quiz-progress-track"><span style={{ width: `${((index + 1) / questions.length) * 100}%` }} /></div>
      {!submitted ? (
        <>
          <h2 className="quiz-question">{question.question}</h2>
          <div className="quiz-choices">
            {question.choices.map((choice, i) => (
              <button
                type="button"
                key={choice}
                className={`quiz-choice ${answers[index] === i ? "selected" : ""}`}
                onClick={() => choose(i)}
                aria-pressed={answers[index] === i}
              >
                <span className="choice-letter">{String.fromCharCode(65 + i)}</span>
                {choice}
              </button>
            ))}
          </div>
          <div className="quiz-actions">
            <button type="button" className="button-secondary" disabled={index === 0} onClick={() => setIndex((v) => v - 1)}>السابق</button>
            {index < questions.length - 1 ? (
              <button type="button" className="button-primary" disabled={answers[index] === undefined} onClick={() => setIndex((v) => v + 1)}>التالي</button>
            ) : (
              <button type="button" className="button-primary" disabled={Object.keys(answers).length !== questions.length} onClick={() => setSubmitted(true)}>إنهاء النموذج</button>
            )}
          </div>
        </>
      ) : (
        <div className="quiz-result">
          <div className="result-medal">✓</div>
          <span className="mini-label">نتيجة محلية تجريبية</span>
          <h2>{score} من {questions.length}</h2>
          <p>هذه النتيجة محسوبة داخل المتصفح لهذا النموذج فقط، ولا تُحفظ ولا تُرسل إلى خادم.</p>
          <div className="answer-review">
            {questions.map((item, i) => (
              <div className="answer-review-item" key={i}>
                <b>{i + 1}. {item.question}</b>
                <span className={answers[i] === item.answer ? "answer-correct" : "answer-wrong"}>
                  إجابتك: {item.choices[answers[i]] ?? "لم تتم الإجابة"}
                </span>
                <small>الإجابة الصحيحة: {item.choices[item.answer]} — {item.explanation}</small>
              </div>
            ))}
          </div>
          <button type="button" className="button-primary" onClick={reset}>إعادة التجربة</button>
        </div>
      )}
    </section>
  );
}

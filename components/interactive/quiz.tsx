"use client";

import { Check, RotateCcw, X } from "lucide-react";
import { useState } from "react";
import type { QuizSet } from "@/content/learning/types";
import type { Dictionary } from "@/content/dictionaries";
import { format } from "@/content/dictionaries";
import { chipClasses } from "@/components/ui/bits";
import { cn } from "@/lib/cn";

type QuizUi = Dictionary["resources"]["quizUi"];

/** Multiple-choice quiz with instant feedback, progress, score and restart. */
export function Quiz({ sets, ui, chooseLabel }: { sets: QuizSet[]; ui: QuizUi; chooseLabel?: string }) {
  const [setIndex, setSetIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const set = sets[setIndex];
  const total = set.questions.length;
  const question = set.questions[questionIndex];
  const answered = selected !== null;
  const progress = done ? 100 : Math.round(((questionIndex + (answered ? 1 : 0)) / total) * 100);

  function reset(nextSet = setIndex) {
    setSetIndex(nextSet);
    setQuestionIndex(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  }

  function choose(option: number) {
    if (answered) return;
    setSelected(option);
    if (option === question.answer) setScore((s) => s + 1);
  }

  function next() {
    if (questionIndex + 1 < total) {
      setQuestionIndex((i) => i + 1);
      setSelected(null);
    } else {
      setDone(true);
    }
  }

  return (
    <div>
      {sets.length > 1 && chooseLabel ? (
        <div role="group" aria-label={chooseLabel} className="mb-5 flex flex-wrap gap-2">
          {sets.map((s, i) => (
            <button key={s.id} type="button" aria-pressed={i === setIndex} onClick={() => reset(i)} className={chipClasses(i === setIndex)}>
              {s.title}
            </button>
          ))}
        </div>
      ) : null}

      <div
        role="progressbar"
        aria-label={ui.progressLabel}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
        className="h-1.5 overflow-hidden rounded-full bg-line"
      >
        <div className="h-full rounded-full bg-gold transition-[width] duration-300" style={{ width: `${progress}%` }} />
      </div>

      {done ? (
        <div className="py-8 text-center">
          <p className="font-heading text-xl font-bold text-primary">{ui.resultTitle}</p>
          <p className="mt-2 text-muted" aria-live="polite">
            {format(ui.result, { score, total })}
          </p>
          <p className="mt-1 text-sm text-muted">{score === total ? ui.resultGreat : ui.resultGood}</p>
          <button
            type="button"
            onClick={() => reset()}
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-btn bg-primary px-5 font-heading text-sm font-bold text-white hover:bg-primary-700"
          >
            <RotateCcw aria-hidden="true" className="size-4" />
            {ui.restart}
          </button>
        </div>
      ) : (
        <div>
          <p className="mt-4 text-[13px] text-muted">
            {format(ui.questionOf, { current: questionIndex + 1, total })} · {format(ui.score, { score })}
          </p>
          <p className="mt-3 font-heading text-lg font-bold text-primary" id={`quiz-q-${set.id}`}>
            {question.prompt}
          </p>
          <ul className="mt-4 space-y-2.5" aria-labelledby={`quiz-q-${set.id}`}>
            {question.options.map((option, i) => {
              const isCorrect = i === question.answer;
              const isChosen = i === selected;
              return (
                <li key={`${questionIndex}-${option}`}>
                  <button
                    type="button"
                    onClick={() => choose(i)}
                    aria-disabled={answered}
                    className={cn(
                      "flex min-h-12 w-full items-center justify-between gap-3 rounded-btn border px-4 py-3 text-left text-[15px] transition-colors",
                      !answered && "border-line bg-white text-ink hover:border-primary-600/40 hover:bg-primary-50",
                      answered && isCorrect && "border-emerald-600 bg-emerald-50 font-semibold text-emerald-900",
                      answered && isChosen && !isCorrect && "border-accent bg-red-50 text-accent-700",
                      answered && !isCorrect && !isChosen && "border-line bg-white text-muted",
                    )}
                  >
                    {option}
                    {answered && isCorrect ? <Check aria-hidden="true" className="size-5 shrink-0" /> : null}
                    {answered && isChosen && !isCorrect ? <X aria-hidden="true" className="size-5 shrink-0" /> : null}
                  </button>
                </li>
              );
            })}
          </ul>
          <div aria-live="polite" className="min-h-6">
            {answered ? (
              <p className={cn("mt-4 text-sm font-semibold", selected === question.answer ? "text-emerald-700" : "text-accent")}>
                {selected === question.answer ? ui.correct : format(ui.incorrect, { answer: question.options[question.answer] })}
              </p>
            ) : null}
          </div>
          {answered ? (
            <button
              type="button"
              onClick={next}
              className="mt-4 inline-flex min-h-11 items-center rounded-btn bg-primary px-5 font-heading text-sm font-bold text-white hover:bg-primary-700"
            >
              {questionIndex + 1 < total ? ui.next : ui.finish}
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
}

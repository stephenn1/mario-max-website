import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { href, routes } from "@/i18n/paths";
import type { Dictionary } from "@/content/dictionaries";
import { format } from "@/content/dictionaries";
import type { LearningContent, TopicBlock, WordRow } from "@/content/learning/types";
import { getArticles } from "@/content/articles";
import { LevelBadge } from "@/components/ui/bits";
import { Quiz } from "@/components/interactive/quiz";
import { Flashcards } from "@/components/interactive/flashcards";
import { SpeakButton } from "@/components/interactive/speak-button";

type Ctx = {
  locale: Locale;
  learning: LearningContent;
  t: Dictionary;
};

function BlockTitle({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-28 text-[1.375rem] font-bold sm:text-2xl">
      {children}
    </h2>
  );
}

function WordTable({ rows, speak, ctx }: { rows: WordRow[]; speak?: boolean; ctx: Ctx }) {
  const { learning, t } = ctx;
  const hasNotes = rows.some((r) => r.note);
  return (
    <div className="mt-4 overflow-x-auto rounded-card-sm border border-line">
      <table className="w-full min-w-[420px] text-left text-sm">
        <thead className="bg-primary text-white">
          <tr>
            <th scope="col" className="px-4 py-3 font-heading font-bold">
              {learning.columns.german}
            </th>
            <th scope="col" className="px-4 py-3 font-heading font-bold">
              {learning.columns.meaning}
            </th>
            {hasNotes ? (
              <th scope="col" className="hidden px-4 py-3 font-heading font-bold sm:table-cell">
                {learning.columns.note}
              </th>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${row.de}-${row.gloss}`} className="border-t border-line even:bg-soft">
              <td className="px-4 py-2.5">
                <span className="flex items-center gap-2.5">
                  {speak ? <SpeakButton text={row.de} label={format(t.resources.speakUi.listenTo, { text: row.de })} /> : null}
                  <span lang="de" className="font-semibold text-primary">
                    {row.de}
                  </span>
                </span>
              </td>
              <td lang="en" className="px-4 py-2.5 text-ink/85">
                {row.gloss}
                {row.note ? <span className="block text-xs text-muted sm:hidden">{learning.notes[row.note]}</span> : null}
              </td>
              {hasNotes ? (
                <td className="hidden px-4 py-2.5 text-[13px] text-muted sm:table-cell">{row.note ? learning.notes[row.note] : ""}</td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Panel({ children }: { children: React.ReactNode }) {
  return <div className="mt-4 rounded-card border border-line bg-white p-5 shadow-sh1 sm:p-6">{children}</div>;
}

export function TopicBlocks({ blocks, ctx }: { blocks: TopicBlock[]; ctx: Ctx }) {
  const { learning, t, locale } = ctx;
  return (
    <div className="space-y-12">
      {blocks.map((block, index) => {
        const key = `${block.type}-${block.id ?? index}`;
        switch (block.type) {
          case "text":
            return (
              <section key={key}>
                {block.title ? <BlockTitle id={block.id}>{block.title}</BlockTitle> : null}
                <div className="mt-3 space-y-3 text-[1.0625rem] leading-relaxed text-ink/85">
                  {block.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </section>
            );
          case "words":
            return (
              <section key={key} className={block.id ? undefined : "-mt-6"}>
                {block.id ? <BlockTitle id={block.id}>{block.title}</BlockTitle> : <h3 className="text-base font-bold">{block.title}</h3>}
                {block.intro ? <p className="mt-2 text-[15px] text-muted">{block.intro}</p> : null}
                <WordTable rows={block.rows} speak={block.speak} ctx={ctx} />
              </section>
            );
          case "sounds":
            return (
              <section key={key}>
                <BlockTitle id={block.id}>{block.title}</BlockTitle>
                <div className="mt-4 overflow-x-auto rounded-card-sm border border-line">
                  <table className="w-full min-w-[480px] text-left text-sm">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th scope="col" className="px-4 py-3 font-heading font-bold">{learning.columns.sound}</th>
                        <th scope="col" className="px-4 py-3 font-heading font-bold">{learning.columns.example}</th>
                        <th scope="col" className="px-4 py-3 font-heading font-bold">{learning.columns.tip}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row) => (
                        <tr key={`${row.sound}-${row.example}`} className="border-t border-line even:bg-soft">
                          <td lang="de" className="px-4 py-2.5 font-heading text-base font-extrabold text-accent">
                            {row.sound}
                          </td>
                          <td className="px-4 py-2.5">
                            <span className="flex items-center gap-2.5">
                              <SpeakButton text={row.example} label={format(t.resources.speakUi.listenTo, { text: row.example })} />
                              <span lang="de" className="font-semibold text-primary">
                                {row.example}
                              </span>
                            </span>
                          </td>
                          <td className="px-4 py-2.5 text-ink/85">{row.tip}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            );
          case "list":
            return (
              <section key={key}>
                <BlockTitle id={block.id}>{block.title}</BlockTitle>
                <ul className="mt-4 space-y-2.5">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink/85">
                      <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            );
          case "quiz": {
            const set = learning.quizzes.find((q) => q.id === block.setId);
            if (!set) return null;
            return (
              <section key={key}>
                <BlockTitle id={block.id}>{block.title}</BlockTitle>
                <Panel>
                  <Quiz sets={[set]} ui={t.resources.quizUi} />
                </Panel>
              </section>
            );
          }
          case "flashcards": {
            const deck = learning.decks.find((d) => d.id === block.deckId);
            if (!deck) return null;
            return (
              <section key={key}>
                <BlockTitle id={block.id}>{block.title}</BlockTitle>
                <Panel>
                  <Flashcards decks={[deck]} ui={t.resources.flashUi} />
                </Panel>
              </section>
            );
          }
          case "reading": {
            const set = block.quizSetId ? learning.quizzes.find((q) => q.id === block.quizSetId) : undefined;
            return (
              <section key={key}>
                <div className="flex items-center gap-3">
                  <LevelBadge code={block.level} size="sm" />
                  <BlockTitle id={block.id}>
                    <span lang="de">{block.title}</span>
                  </BlockTitle>
                </div>
                <div lang="de" className="mt-4 space-y-3 rounded-card border-l-4 border-gold bg-soft p-5 text-[1.0625rem] leading-relaxed text-ink sm:p-6">
                  {block.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                {block.glossary ? (
                  <div className="mt-6">
                    <h3 className="text-base font-bold">{learning.glossaryTitle}</h3>
                    <WordTable rows={block.glossary} speak ctx={ctx} />
                  </div>
                ) : null}
                {set ? (
                  <Panel>
                    <Quiz sets={[set]} ui={t.resources.quizUi} />
                  </Panel>
                ) : null}
              </section>
            );
          }
          case "prompts":
            return (
              <section key={key}>
                <BlockTitle id={block.id}>{block.title}</BlockTitle>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {block.groups.map((group) => (
                    <div key={group.level} className="rounded-card border border-line bg-white p-5 shadow-sh1">
                      <LevelBadge code={group.level} size="sm" />
                      <ul className="mt-4 space-y-3">
                        {group.items.map((item) => (
                          <li key={item} className="text-sm leading-relaxed text-ink/85">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            );
          case "articles": {
            const articles = getArticles(locale).filter((a) => a.category === block.category);
            return (
              <section key={key}>
                <BlockTitle id={block.id}>{block.title}</BlockTitle>
                <ul className="mt-4 space-y-3">
                  {articles.map((article) => (
                    <li key={article.slug}>
                      <Link
                        href={href(locale, `${routes.news}/${article.slug}`)}
                        className="flex items-center justify-between gap-4 rounded-card-sm border border-line bg-white px-5 py-4 shadow-sh1 hover:shadow-sh2"
                      >
                        <span>
                          <span className="block font-heading font-bold text-primary">{article.title}</span>
                          <span className="mt-0.5 block text-[13px] text-muted">
                            {article.minutes} {t.common.minRead}
                          </span>
                        </span>
                        <ArrowRight aria-hidden="true" className="size-4 shrink-0 text-accent" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          }
        }
      })}
    </div>
  );
}

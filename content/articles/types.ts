export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "tip"; items: string[] }
  | { type: "sources"; items: { label: string; href: string }[] };

export type ArticleContent = {
  title: string;
  excerpt: string;
  blocks: ArticleBlock[];
};

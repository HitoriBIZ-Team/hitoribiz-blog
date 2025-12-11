import Link from "next/link";
import { getAllPosts } from "../lib/posts";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "40px 16px 80px",
      }}
    >
      {/* ヒーローエリア */}
      <section style={{ marginBottom: 40 }}>
        <p
          style={{
            fontSize: 13,
            color: "#0b5fff",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          HitoriBIZ Blog
        </p>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginTop: 8 }}>
          ひとりビジネス × AI × デジタルの
          <br />
          実践ノート
        </h1>
        <p style={{ marginTop: 16, color: "#555", lineHeight: 1.8 }}>
          このブログは、HitoriBIZが実際に取り組んでいる
          「ひとりビジネス支援」「WEBサイト設計」「AI活用」の
          気づきや事例をまとめた場所です。
          専門用語をなるべく減らし、実務でどう使えるかにフォーカスして
          発信していきます。
        </p>
      </section>

      {/* 記事一覧 */}
      <section>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>
          最新の記事
        </h2>
        <div style={{ display: "grid", gap: 24 }}>
          {posts.map((post) => (
            <article
              key={post.slug}
              style={{
                padding: 20,
                borderRadius: 12,
                border: "1px solid #eee",
                background: "#fff",
              }}
            >
              <Link
                href={`/blog/${post.slug}`}
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  textDecoration: "none",
                  color: "#111",
                }}
              >
                {post.title}
              </Link>
              <p style={{ fontSize: 13, color: "#888", marginTop: 4 }}>
                {post.date}
              </p>
              <p style={{ marginTop: 8, color: "#555", lineHeight: 1.7 }}>
                {post.description}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                style={{
                  display: "inline-block",
                  marginTop: 12,
                  fontSize: 14,
                  color: "#0b5fff",
                }}
              >
                記事を読む →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

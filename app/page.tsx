import Link from "next/link";
import { getAllPosts } from "../lib/posts";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <main style={{ background: "#f5f3ee" }}>
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "48px 16px 80px",
        }}
      >
        {/* ヒーローエリア：北欧系・at home */}
        <section
          style={{
            background: "#fbf7f0",
            borderRadius: 28,
            padding: "28px 28px 32px",
            border: "1px solid #ece4d6",
            marginBottom: 32,
            display: "flex",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div style={{ flex: "1 1 260px", minWidth: 0 }}>
            <p
              style={{
                fontSize: 12,
                color: "#7b90c4",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              HITORIBIZ BLOG
            </p>
            <h1
              style={{
                fontSize: 30,
                lineHeight: 1.4,
                fontWeight: 700,
                marginTop: 10,
                color: "#1f2933",
              }}
            >
              ひとりビジネス × AI × デジタルの
              <br />
              実践ノート
            </h1>
            <p
              style={{
                marginTop: 16,
                color: "#4b5563",
                lineHeight: 1.9,
              }}
            >
              小さなお店や工房、ひとり社長さんのためのブログです。
              むずかしい専門用語はできるだけ減らして、
              「毎日の仕事を少しだけ楽にするAIとWebの使い方」を、
              事例といっしょにまとめています。
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginTop: 22,
              }}
            >
              <a
                href="https://hitori-biz.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "8px 18px",
                  borderRadius: 999,
                  background: "#1f2933",
                  color: "#fff",
                  fontSize: 14,
                  textDecoration: "none",
                }}
              >
                HitoriBIZ のサイトを見る ↗
              </a>
              <Link
                href="/contact"
                style={{
                  padding: "8px 18px",
                  borderRadius: 999,
                  border: "1px solid #d3d7de",
                  fontSize: 14,
                  textDecoration: "none",
                  color: "#374151",
                  background: "#ffffffaa",
                }}
              >
                こんなブログを相談したい
              </Link>
            </div>
          </div>

          {/* 小さなイラスト枠（後で画像差し替え用） */}
          <div
            style={{
              flex: "0 0 220px",
              borderRadius: 20,
              background:
                "linear-gradient(145deg, #e0ecff, #ffe9d2)",
              border: "1px solid #e0dfd8",
              minHeight: 140,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 13,
              color: "#374151",
            }}
          >
            お店のカウンターや
            <br />
            工房のイメージ画像を
            <br />
            ここに入れられます
          </div>
        </section>

        {/* オーナーからひとこと */}
        <section
          style={{
            borderRadius: 18,
            border: "1px solid #e5e7eb",
            padding: 20,
            marginBottom: 32,
            background: "#ffffff",
            display: "flex",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: "999px",
              background:
                "radial-gradient(circle at 30% 20%, #9fbad9, #4b5563)",
              flexShrink: 0,
            }}
          />
          <div>
            <p
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "#6b7280",
                marginBottom: 4,
              }}
            >
              ひとりで頑張っているオーナーへ
            </p>
            <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.8 }}>
              「本業だけでも忙しいのに、ホームページやSNSまで手が回らない」。
              そんな声をよく聞きます。
              HitoriBIZは、AIとデジタルを&ldquo;難しい専門作業&rdquo;ではなく、
              日々の商売を支える「道具」として一緒に使っていくお手伝いをしています。
              このブログが、イメージづくりの参考になればうれしいです。
            </p>
          </div>
        </section>

        {/* テーマチップ */}
        <section style={{ marginBottom: 18 }}>
          <p
            style={{
              fontSize: 14,
              color: "#6b7280",
              marginBottom: 8,
              fontWeight: 500,
            }}
          >
            このブログで分かること
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              "小さなお店の事例紹介",
              "AIでチラシ・POPづくり",
              "Webサイト・ECの考え方",
              "コンテンツづくりのコツ",
            ].map((label) => (
              <span
                key={label}
                style={{
                  fontSize: 12,
                  padding: "4px 11px",
                  borderRadius: 999,
                  background: "#f3f4f6",
                  color: "#374151",
                  border: "1px solid #e5e7eb",
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </section>

        {/* 記事一覧 */}
        <section style={{ marginTop: 24 }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 600,
              marginBottom: 16,
              color: "#111827",
            }}
          >
            最新の記事
          </h2>

          {posts.length === 0 ? (
            <p style={{ color: "#6b7280", fontSize: 14 }}>
              これから記事を追加していきます。
            </p>
          ) : (
            <div
              style={{
                display: "grid",
                gap: 20,
              }}
            >
              {posts.map((post) => (
                <article
                  key={post.slug}
                  style={{
                    padding: 20,
                    borderRadius: 18,
                    border: "1px solid #e0e2e6",
                    background: "#ffffff",
                    boxShadow:
                      "0 8px 20px rgba(15, 23, 42, 0.03)",
                  }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{
                      fontSize: 17,
                      fontWeight: 600,
                      textDecoration: "none",
                      color: "#111827",
                    }}
                  >
                    {post.title}
                  </Link>
                  <p
                    style={{
                      fontSize: 12,
                      color: "#9ca3af",
                      marginTop: 4,
                    }}
                  >
                    {post.date}
                  </p>
                  <p
                    style={{
                      marginTop: 10,
                      color: "#4b5563",
                      lineHeight: 1.7,
                      fontSize: 14,
                    }}
                  >
                    {post.description}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{
                      display: "inline-block",
                      marginTop: 12,
                      fontSize: 14,
                      color: "#2563eb",
                      textDecoration: "none",
                    }}
                  >
                    記事を読む →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

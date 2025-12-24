import Link from "next/link";
import { works } from "../../../data/works";
import { getAllPosts } from "../../../lib/posts";

export const dynamic = "force-static";

export default function HitoriBizSitePage() {
  const work = works.find((w) => w.slug === "hitoribiz-site");
  if (!work) return <div>Not found</div>;

  const posts = getAllPosts().filter((p) => (p as any).workSlug === work.slug);

  return (
    <article className="container" style={{ padding: "40px 0" }}>
      <Link href="/works" style={{ color: "#0b5fff", fontSize: 14 }}>
        ← Works に戻る
      </Link>

      <p
        style={{
          border: "1px solid #eaeaea",
          display: "inline-block",
          padding: "2px 10px",
          borderRadius: 999,
          color: "#666",
          marginTop: 16,
        }}
      >
        {work.category}
      </p>

      <h1 style={{ marginTop: 8 }}>{work.title}</h1>
      <p style={{ color: "#666", marginBottom: 8 }}>{work.period}</p>

      {work.thumbnail && (
        <div
          style={{
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid #eaeaea",
            margin: "16px 0 24px",
            maxWidth: 800,
          }}
        >
          <img
            src={work.thumbnail}
            alt={work.title}
            style={{ display: "block", width: "100%", height: "auto" }}
          />
        </div>
      )}

      {/* 説明テキスト */}
      <section style={{ marginTop: 32, lineHeight: 1.8 }}>
        <h2 style={{ fontSize: "1.6rem", marginBottom: 12 }}>プロジェクト概要</h2>
        <p>
          このサイトは、ひとりでビジネスをされている方や、小さなチームで活動されている方のために、
          「AI とデジタルをもっとやさしく・効果的に使えるようにする」ことを目的に制作したモデルサイトです。
        </p>
        <p>
          AI と聞くと難しそうに感じる方が多いですが、実際は、
          文章の整理・画像作成・資料づくり・アイデア出しなど、
          ひとり社長の仕事を助ける “デジタルの右腕” のような存在です。
        </p>

        <hr
          style={{
            margin: "32px 0",
            border: "none",
            borderTop: "1px solid #eee",
          }}
        />

        <h2 style={{ fontSize: "1.6rem", marginBottom: 12 }}>コンセプト</h2>
        <ul style={{ paddingLeft: 20, marginTop: 8 }}>
          <li style={{ marginBottom: 8 }}>
            むずかしい表現を使わず、日常の言葉で「AI とデジタル」を説明する
          </li>
          <li style={{ marginBottom: 8 }}>
            ひとりビジネスでも実現できる、無理のないデジタル活用を具体的に示す
          </li>
          <li style={{ marginBottom: 8 }}>
            「実例（Works）」と「考え方（Blog）」をセットにして、立体的に伝える
          </li>
          <li style={{ marginBottom: 8 }}>
            ビジネスの時間を奪う “手作業” を AI で減らし、仕組みづくりを応援する
          </li>
        </ul>

        <hr
          style={{
            margin: "32px 0",
            border: "none",
            borderTop: "1px solid #eee",
          }}
        />

        <h2 style={{ fontSize: "1.6rem", marginBottom: 12 }}>導線設計</h2>
        <p>
          サイト全体の構成は、ひとりビジネスの方向けに「迷わず理解できる導線」を意識しています。
          各ページは次の役割を持っています：
        </p>

        <ul style={{ paddingLeft: 20, marginTop: 8 }}>
          <li style={{ marginBottom: 6 }}>
            <strong>Home：</strong> HitoriBIZが何をするサービスかを一言で伝える
          </li>
          <li style={{ marginBottom: 6 }}>
            <strong>Services：</strong> 支援メニューをわかりやすい形式で紹介
          </li>
          <li style={{ marginBottom: 6 }}>
            <strong>Works：</strong> 支援した実例をカード形式で分かりやすく掲載
          </li>
          <li style={{ marginBottom: 6 }}>
            <strong>Blog：</strong> AI活用のコツや考え方をやさしく解説する読み物
          </li>
          <li style={{ marginBottom: 6 }}>
            <strong>Contact：</strong> 気軽に相談ができる問い合わせ導線
          </li>
        </ul>

        <hr
          style={{
            margin: "32px 0",
            border: "none",
            borderTop: "1px solid #eee",
          }}
        />

        <h2 style={{ fontSize: "1.6rem", marginBottom: 12 }}>
          AI活用（やさしい説明）
        </h2>
        <p>
          HitoriBIZでいう「AI活用」は、専門的なプログラムではありません。
          ひとり社長が日常で使える、負担を減らすための方法です。
        </p>

        <ul style={{ paddingLeft: 20, marginTop: 8 }}>
          <li style={{ marginBottom: 6 }}>
            文章を整える（メール・提案文・ホームページ文章）
          </li>
          <li style={{ marginBottom: 6 }}>
            SNSやホームページの画像をAIで作成
          </li>
          <li style={{ marginBottom: 6 }}>動画をAIで短く編集</li>
          <li style={{ marginBottom: 6 }}>
            資料づくりやアイデア出しをAIに手伝ってもらう
          </li>
          <li style={{ marginBottom: 6 }}>
            Webサイトの構成や改善点をAIと一緒に考える
          </li>
        </ul>

        <p style={{ marginTop: 16 }}>
          つまりAIとは、「あなたの仕事を支えてくれるデジタルのアシスタント」です。
          むずかしい知識がなくても、ビジネスの質を上げる味方になってくれます。
        </p>
      </section>

      {work.siteUrl && (
        <p style={{ marginTop: 24 }}>
          <a
            href={work.siteUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#0b5fff",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            ▶ 関連サイトを開く ↗
          </a>
        </p>
      )}

       <section
        style={{
          border: "1px dashed #eaeaea",
          padding: 20,
          borderRadius: 12,
          marginTop: 32,
          background: "#fafafa",
        }}
      >
        <h3>この事例の裏側をブログで詳しく解説</h3>
        <ul style={{ paddingLeft: 20, marginTop: 8 }}>
          <li>
            <Link href="/blog/2025-12-06-hitoribiz-site">
              HitoriBIZ 自社サイトの設計コンセプト
            </Link>{" "}
            <span style={{ color: "#666" }}>（2025-12-06）</span>
          </li>
        </ul>
        <p style={{ color: "#666", marginTop: 8 }}>
          ※ 上の記事で、この事例の背景や設計の考え方をくわしく紹介しています。
        </p>
      </section>


    </article>
  );
}

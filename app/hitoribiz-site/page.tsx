// app/hitoribiz-site/page.tsx
import Link from "next/link";

export default function HitoribizSitePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-6">
          <p className="text-xs font-semibold tracking-[0.25em] text-slate-500">
            PROJECT
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
            hitori-biz.com 制作の流れ
            <span className="block text-slate-700">
              設計 → 実装 → 公開 → 運用
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            小さなチームでも最短で成果に繋がるよう、情報設計から公開後の改善まで伴走します。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* 1 */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-bold text-slate-900">1. 情報設計</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              目的・ターゲット・導線を整理し、必要なページ構成とコンテンツを決めます。
            </p>
          </div>

          {/* 2 */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-bold text-slate-900">2. デザイン</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              ブランドの世界観に合わせ、見やすく伝わるUIを作ります。
            </p>
          </div>

          {/* 3 */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-bold text-slate-900">3. 実装</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Next.js + Tailwindで高速・運用しやすい構成に仕上げます。
            </p>
          </div>

          {/* 4 */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-bold text-slate-900">4. 公開と運用</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Vercelへデプロイし、アクセス解析・改善を繰り返して成果を伸ばします。
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium shadow-sm hover:bg-slate-50"
          >
            Homeへ戻る
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
          >
            お問い合わせ
          </Link>
        </div>
      </section>
    </main>
  );
}

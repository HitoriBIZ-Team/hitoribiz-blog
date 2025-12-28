export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-2xl font-bold text-slate-900">お問い合わせ</h1>
      <p className="mt-2 text-sm text-slate-600">
        内容を確認のうえ、通常1〜2営業日以内にご連絡いたします。
      </p>

      <form
        action="https://formspree.io/f/xbdjyvzb"
        method="POST"
        className="mt-8 space-y-4"
      >
        {/* ✅ 送信後の遷移先（本番URL） */}
        <input
          type="hidden"
          name="_next"
          value="https://hitoribiz-blog-prod.vercel.app/contact/thanks"
        />

        {/* ✅ 迷惑送信対策（honeypot） */}
        <input type="text" name="_gotcha" style={{ display: "none" }} />

        <div>
          <label className="text-sm font-medium text-slate-700">お名前</label>
          <input
            name="name"
            required
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-slate-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">
            メールアドレス
          </label>
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-slate-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">件名</label>
          <input
            name="subject"
            placeholder="サービスのご相談 / お見積りのご依頼 など"
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-slate-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">
            お問い合わせ内容
          </label>
          <textarea
            name="message"
            rows={6}
            required
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-slate-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="rounded-full bg-slate-900 px-6 py-2 text-sm font-medium text-white hover:bg-slate-800"
        >
          送信する
        </button>
      </form>
    </main>
  );
}

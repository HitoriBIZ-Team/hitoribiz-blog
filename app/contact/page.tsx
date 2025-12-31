"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xbdjyvzb", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        router.push("/contact/thanks");
      } else {
        const data = await res.json().catch(() => null);
        setError(data?.error || "送信に失敗しました。時間をおいて再度お試しください。");
      }
    } catch {
      setError("通信エラーです。ネットワーク環境をご確認ください。");
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 px-4 py-10">
      <section className="mx-auto max-w-3xl">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">お問い合わせ</h1>
        <p className="mt-3 text-xs text-slate-600 sm:text-sm">
          サービス内容のご相談、ホームページ制作やリニューアルのご相談、AI活用についてのご質問など、どうぞお気軽にお送りください。
        </p>
        <p className="mt-1 text-[11px] text-slate-500 sm:text-xs">
          ※ ご入力いただいた内容を確認のうえ、通常1〜2営業日以内にメールでご返信いたします。
        </p>
      </section>

      <section className="mx-auto max-w-3xl py-8">
        <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <form className="space-y-6 sm:space-y-8" onSubmit={onSubmit}>
            {/* スパム対策（ハニーポット） */}
            <input type="text" name="_gotcha" style={{ display: "none" }} />

            <div>
              <label className="block text-xs font-medium text-slate-700 sm:text-sm">
                お名前 <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 sm:text-sm">
                メールアドレス <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 sm:text-sm">件名</label>
              <select
                name="subject"
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                defaultValue=""
              >
                <option value="" disabled>件名をお選びください</option>
                <option value="サービスのご相談">サービスのご相談</option>
                <option value="お見積りのご依頼">お見積りのご依頼</option>
                <option value="Webサイト制作について">Webサイト制作について</option>
                <option value="AI活用について">AI活用について</option>
                <option value="その他">その他</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 sm:text-sm">
                お問い合わせ内容 <span className="text-rose-500">*</span>
              </label>
              <textarea
                name="message"
                rows={6}
                required
                className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              />
            </div>

            {error && (
              <p className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-full bg-sky-700 py-3 text-sm font-semibold text-white transition hover:bg-sky-600 disabled:opacity-60"
            >
              {sending ? "送信中…" : "この内容で送信する"}
            </button>
          </form>

          <p className="mt-5 text-[11px] text-slate-400 sm:text-xs">
            送信後、自動的に確認ページへ移動します。そちらの表示をもって送信完了となります。
          </p>
        </div>
      </section>
    </main>
  );
}

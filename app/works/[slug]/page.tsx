import { notFound } from 'next/navigation';
import Link from 'next/link';
import { works } from '../../../data/works';
import { getAllPosts } from '../../../lib/posts';

export const dynamic = 'force-static';

export default function WorkDetail({ params }: { params: { slug: string } }) {
  const work = works.find(w => w.slug === params.slug);
  if (!work) return notFound();

  const posts = getAllPosts().filter(p => (p as any).workSlug === work.slug);

  return (
    <article>
      <header>
        <p style={{border:'1px solid #eaeaea',display:'inline-block',padding:'2px 10px',borderRadius:999,color:'#666'}}>{work.category}</p>
        <h1>{work.title}</h1>
        <p style={{color:'#666'}}>{work.period}</p>
        {work.thumbnail && <img src={work.thumbnail} alt={work.title} />}
        <p>{work.summary}</p>
        {work.siteUrl && <p style={{marginTop:8}}><a href={work.siteUrl} target="_blank" rel="noreferrer">関連サイトを開く ↗</a></p>}
      </header>

      <section style={{border:'1px dashed #eaeaea',padding:20,borderRadius:12,marginTop:24}}>
        <h3>この事例の裏側をブログで詳しく解説</h3>
        {posts.length === 0 ? (
          <p style={{color:'#666'}}>関連するブログ記事は準備中です。</p>
        ) : (
          <ul>
            {posts.map(p => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`}>{p.title}</Link> <span style={{color:'#666'}}>（{p.date}）</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </article>
  );
}

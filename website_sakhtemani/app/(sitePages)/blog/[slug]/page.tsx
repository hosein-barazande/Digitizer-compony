// import { getArticleBySlug, getAllArticles } from '@/utils/getArticles';
// import { notFound } from 'next/navigation';

// interface Props {
//   params: { slug: string };
// }

// export async function generateStaticParams() {
//   const articles = getAllArticles();

//   return articles.map(article => ({
//     slug: article.slug,
//   }));
// }

// export default function ArticlePage({ params }: Props) {
//   const article = getArticleBySlug(params.slug);

//   if (!article) return notFound();

//   return (
//     <div style={{ padding: '2rem' }}>
//       <h1>{article.title}</h1>
//       <img src={article.thumbnail} alt={article.title} style={{ maxWidth: '100%' }} />
//       <div dangerouslySetInnerHTML={{ __html: article.content }} />
//     </div>
//   );
// }


import { getArticleBySlug, getAllArticles } from '@/utils/getArticles';
import { notFound } from 'next/navigation';
import  Style  from '../blog.module.css';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map(article => ({ slug: article.slug }));
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);

  if (!article) return notFound();

  // حذف title، summary و thumbnail از محتوا
  const cleanedContent = article.content
    .replace(/<title>[\s\S]*?<\/title>/gi, '')
    .replace(/<summary>[\s\S]*?<\/summary>/gi, '')
    .replace(/<thumbnail>[\s\S]*?<\/thumbnail>/gi, '');

  return (

    <div className={Style.articleContent}>
  {article.thumbnail && (
    <img src={article.thumbnail} alt="thumbnail" />
  )}
  <div
    dangerouslySetInnerHTML={{
      __html: cleanedContent,
    }}
  ></div>
</div>

  );
}

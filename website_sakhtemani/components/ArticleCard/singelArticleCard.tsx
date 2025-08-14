import Link from 'next/link';
import styles from './articleCard.module.css';

interface Props {
  article: {
    title: string;
    slug: string;
    summary: string;
    thumbnail: string;
  };
}

export default function ArticleCard({ article }: Props) {
  return (
    <Link href={`/blog/${article.slug}`} className={styles.button}>
    <div className={styles.card}>
      <img src={article.thumbnail} alt={article.title} className={styles.image} />
      <h2>{article.title}</h2>
      <p>{article.summary}</p>
      <button>مطالعه مقاله</button>
    </div>
    </Link>
  );
}

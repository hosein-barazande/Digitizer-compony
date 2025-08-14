import { getAllArticles } from '@/utils/getArticles';
import ArticleCard from '@/components/ArticleCard/singelArticleCard';
import styles from './blog.module.css';

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <div className={styles.blogContainer}>
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </div>
   
  );
}

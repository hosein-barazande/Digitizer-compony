import fs from 'fs';
import path from 'path';

export interface Article {
  title: string;
  slug: string;
  summary: string;
  thumbnail: string;
  content: string;
}

const articlesDir = path.join(process.cwd(), 'articles-html');

export function getAllArticles(): Article[] {
  const fileNames = fs.readdirSync(articlesDir);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.html$/, '');
    const filePath = path.join(articlesDir, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const matchTitle = fileContent.match(/<title>(.*?)<\/title>/);
    const title = matchTitle ? matchTitle[1] : 'عنوان نامشخص';

    const matchSummary = fileContent.match(/<summary>(.*?)<\/summary>/);
    const summary = matchSummary ? matchSummary[1] : 'خلاصه‌ای موجود نیست';

    const matchThumbnail = fileContent.match(/<thumbnail>(.*?)<\/thumbnail>/);
    const thumbnail = matchThumbnail ? matchThumbnail[1] : '/placeholder.jpg';

    return {
      title,
      slug,
      summary,
      thumbnail,
      content: fileContent,
    };
  });
}

export function getArticleBySlug(slug: string): Article | null {
  const filePath = path.join(articlesDir, `${slug}.html`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const matchTitle = fileContent.match(/<title>(.*?)<\/title>/);
  const title = matchTitle ? matchTitle[1] : 'عنوان نامشخص';

  const matchSummary = fileContent.match(/<summary>(.*?)<\/summary>/);
  const summary = matchSummary ? matchSummary[1] : 'خلاصه‌ای موجود نیست';

  const matchThumbnail = fileContent.match(/<thumbnail>(.*?)<\/thumbnail>/);
  const thumbnail = matchThumbnail ? matchThumbnail[1] : '/placeholder.jpg';

  return {
    title,
    slug,
    summary,
    thumbnail,
    content: fileContent,
  };
}

import ArticlePortableText from '@/components/PortableText'
import { Dek } from '@/components/ui/atoms/typography/Dek'
import { Heading } from '@/components/ui/atoms/typography/Heading'
import { getArticle } from '@/sanity/lib/article'

interface Props {
    params: Promise<{ slug: string }>
}

export default async function ArticlePage({ params }: Props) {
    const { slug } = await params

    const article = await getArticle(slug)

    if (!article) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <p className="text-2xl text-neutral-500">Article not found</p>
            </div>
        )
    }

    return (
        <article className="max-w-3xl mx-auto px-6 py-12">
            {/* Article Header - Sharon-style clean */}
            <div className="mb-10">
                <div className="flex items-center gap-3 text-sm text-neutral-500 mb-4">
                    <span>{article.category.title}</span>
                    <span>•</span>
                    <span>{new Date(article.publishDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}</span>
                    {article.readingTime && <span>• {article.readingTime} min read</span>}
                </div>

                <Heading level="h1" variant="display" >
                    {article.title}
                </Heading>

                {article.dek && (
                    <Dek className="mt-6 text-xl leading-relaxed">
                        {article.dek}
                    </Dek>
                )}
            </div>

            {/* Rich Content */}
            <ArticlePortableText value={article.body} className="mt-12" />

            {/* Optional: Related Articles Section */}
            {article.relatedArticles && article.relatedArticles.length > 0 && (
                <div className="mt-20 pt-12 border-t border-neutral-200 dark:border-neutral-800">
                    <h3 className="text-lg font-semibold mb-6">Related Articles</h3>
                    {/* We can build this later with HeroUI cards */}
                </div>
            )}
        </article>
    )
}
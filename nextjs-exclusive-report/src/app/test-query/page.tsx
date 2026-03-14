import { getArticle } from '@/sanity/lib/article'
import { urlForImage } from '@/sanity/client'
export default async function TestEmbedsPage() {
    // Use a known slug that has gallery or hotspots blocks
    const slug = 'how-kibret-abebe-put-ethiopia-s-emergency-response-system-on-wheels' // ← change to your test article slug
    const article = await getArticle(slug)
    if (!article) {
        return <div className="p-10 text-2xl">Article not found</div>
    }

    return (
        <main className="max-w-5xl mx-auto p-10">
            <h1 className="text-4xl font-bold mb-12">Embed Test – {article.title}</h1>

            <div className="space-y-20">
                {article.body.map((block: any, index: number) => {
                    if (block._type === 'gallery') {
                        return (
                            <section key={index} className="border-2 border-dashed p-8 rounded-xl">
                                <h2 className="text-2xl font-semibold mb-6">Gallery Block ({block.images?.length || 0} images)</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                    {block.images?.map((img: any, i: number) => (


                                        <div key={i} className="border rounded-lg overflow-hidden">
                                            <img
                                                src={img ? urlForImage(img) : '/placeholder-1200x675.jpg'}
                                                alt={img.alt || 'Gallery image'}
                                                width={400}
                                                height={300}
                                                className="w-full h-48 object-cover"
                                            />
                                            {img.caption && (
                                                <p className="p-3 text-center text-sm bg-gray-50">{img.caption}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-4 text-sm text-gray-500">Layout: {block.layout || 'carousel'}</p>
                            </section>
                        )
                    }

                    if (block._type === 'imageWithHotspots') {
                        return (
                            <section key={index} className="border-2 border-dashed p-8 rounded-xl">
                                <h2 className="text-2xl font-semibold mb-6">Image with Hotspots ({block.hotspots?.length || 0})</h2>
                                <div className="relative border rounded-lg overflow-hidden">
                                    <img
                                        src={block.image ? urlForImage(block.image) : ''}
                                        alt="Annotated image"
                                        className="w-full h-auto max-h-[600px] object-contain"
                                    />
                                </div>
                                <ul className="mt-6 space-y-3">
                                    {block.hotspots?.map((hs: any, i: number) => (
                                        <li key={i} className="bg-gray-100 p-3 rounded">
                                            <strong>Hotspot {i + 1}:</strong> x {hs.x}%, y {hs.y}%
                                            <br />
                                            <em>{hs.tooltip}</em>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )
                    }

                    return null
                })}
            </div>
        </main>
    )
}
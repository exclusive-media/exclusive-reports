import { StructureResolver } from 'sanity/structure'
import {
    CogIcon,
    FolderIcon,
    UserIcon,
    DocumentTextIcon,
    PlayIcon,
    PackageIcon,
    TagIcon,
} from '@sanity/icons'

const deskStructure: StructureResolver = (S) => {
    return S.list()
        .title('Content')
        .items([
            // 1. SITE SETTINGS (singleton)
            S.documentTypeListItem('siteSettings')
                .title('📍 Site Settings')
                .icon(CogIcon)
                .child(
                    S.document()
                        .schemaType('siteSettings')
                        .documentId('siteSettings')
                ),

            S.divider(),

            // 2. CATEGORIES
            S.listItem()
                .title('📂 Categories')
                .icon(FolderIcon)
                .child(
                    S.list()
                        .title('Categories')
                        .items([
                            S.documentTypeListItem('category').title('All Categories').icon(FolderIcon),
                            S.documentTypeListItem('subcategory').title('Subcategories').icon(TagIcon),
                        ])
                ),

            S.divider(),

            // 3. AUTHORS
            S.documentTypeListItem('author')
                .title('👤 Authors & Guests')
                .icon(UserIcon),

            S.divider(),

            // 4. ARTICLES + Smart Filters
            S.listItem()
                .title('📝 Articles')
                .icon(DocumentTextIcon)
                .child(
                    S.list()
                        .title('Articles')
                        .items([
                            S.documentTypeListItem('article').title('All Articles'),

                            S.listItem()
                                .title('⭐ Featured on Homepage')
                                .child(
                                    S.documentList()
                                        .title('Featured Articles')
                                        .filter('_type == "article" && featured == true')
                                        .defaultOrdering([{ field: 'publishDate', direction: 'desc' }])
                                ),

                            S.listItem()
                                .title('🔥 EX Reports')
                                .child(
                                    S.documentList()
                                        .title('EX Reports')
                                        .filter('_type == "article" && format == "EX Report"')
                                        .defaultOrdering([{ field: 'publishDate', direction: 'desc' }])
                                ),
                        ])
                ),

            S.divider(),

            // 5. PODCAST EPISODES
            S.listItem()
                .title('🎙 Podcast Episodes')
                .icon(PlayIcon)
                .child(
                    S.documentList()
                        .title('All Podcast Episodes')
                        .filter('_type == "podcastEpisode"')
                        .defaultOrdering([{ field: 'publishDate', direction: 'desc' }])
                ),

            S.divider(),

            // 6. PRODUCTS
            S.documentTypeListItem('product')
                .title('📦 Products & Publications')
                .icon(PackageIcon),

            S.divider(),

            // 7. TAXONOMY (collapsed)
            S.listItem()
                .title('🔖 Taxonomy')
                .icon(TagIcon)
                .child(
                    S.list()
                        .title('Taxonomy')
                        .items([S.documentTypeListItem('tag').title('Tags')])
                ),
        ])
}

export default deskStructure
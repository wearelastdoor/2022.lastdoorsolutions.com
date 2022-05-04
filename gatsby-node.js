exports.onCreateWebpackConfig = ({stage, loaders, actions}) => {
    if (stage === "build-html" || stage === "develop-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /locomotive-scroll/,
                        use: loaders.null(),
                    },
                ],
            },
        })
    }
}

exports.onCreatePage = async ({ page, actions }) => {
    const { createPage, deletePage } = actions
    if (page.path.match(/^\/[a-z]{2}\/404\/$/)) {
        const oldPage = { ...page }
        const langCode = page.path.split(`/`)[1]
        page.matchPath = `/${langCode}/*`
        // Recreate the modified page
        deletePage(oldPage)
        createPage(page)
    }
}
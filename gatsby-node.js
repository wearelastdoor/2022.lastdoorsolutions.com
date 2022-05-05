const path = require('path')
exports.onCreateWebpackConfig = ({stage, loaders, actions}) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, "src"), "node_modules"],
        },
    })
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


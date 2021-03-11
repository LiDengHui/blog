module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // modules: true,
                            modules: {
                                namedExport: true,
                                localIdentName: 'foo__[name]__[local]',
                            },
                        },
                    },
                ],
            },
        ],
    },
}

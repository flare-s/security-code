const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        index:  './src/loaders/index.js',
        about: './src/loaders/about.js', 
        services: './src/loaders/services.js', 
        blog: './src/loaders/blog.js',
        contact: './src/loaders/contact.js', 
    },  
    output: {
        filename: 'loaders/[name].bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: "",
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
        ],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    "useBuiltIns": "usage",
                                    "corejs": 3
                                }
                            ]
                        ],
                        
                    }
                }
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: 'asset',
                generator: {
                    filename: './img/[hash][ext][query]'
                }
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                type: 'asset',
                generator: {
                    filename: 'fonts/[hash][ext][query]'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    }
                ]
            },
            // {
            //     test: /\.(png|svg|jpg|gif)$/,
            //     use: [
            //     'file-loader',
            //     ],
            // },
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                          sourceMap: true,
                          config: {
                            path: 'postcss.config.js'
                          }
                        }
                    },
                    {
                        loader: "sass-loader"
                    },
                ]
           },
            
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: "./index.html",
            chunks: ['index'],
            template: path.resolve(__dirname, "src", "index.html"),
        }),
        new HtmlWebPackPlugin({
            filename: "./pages/about.html",
            chunks: ['about'],
            template: path.resolve(__dirname, "src/pages", "about.html"),
            publicPath: '../'
            

            
            
        }),
        new HtmlWebPackPlugin({
            filename: "./pages/services.html",
            chunks: ['services'],
            template: "./src/pages/services.html",
            publicPath: '../'
            

            
            
        }),
        new HtmlWebPackPlugin({
            filename: "./pages/blog.html",
            chunks: ['blog'],
            template: "./src/pages/blog.html",
            publicPath: '../'
            

            
            
        }),
        new HtmlWebPackPlugin({
            filename: "./pages/contact.html",
            chunks: ['contact'],
            template: "./src/pages/contact.html",
            publicPath: '../'
            

            
            
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css",
        }),

       

    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 9000,
    },
};




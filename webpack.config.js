const path = require("path");
const webpack = require('webpack');
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
        path: path.join(__dirname, '/dist'),
        publicPath: "",
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
                                    "useBuiltIns": "entry",
                                }
                            ]
                        ],
                        
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif|mp4)$/,
                loader:'file-loader',
                options: {
                    name: 'img/[name].[ext]',
                }
                
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { 
                            minimize: true,
                        }
                    }
                ]
            },
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../"
                        }
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
            template: "./src/index.html",
            filename: "./index.html",
            chunks: ['index'],
            
            
            
        }),
        new HtmlWebPackPlugin({
            template: "./src/about.html",
            filename: "./about.html",
            chunks: ['about'],
            

            
            
        }),
        new HtmlWebPackPlugin({
            template: "./src/services.html",
            filename: "./services.html",
            chunks: ['services'],
            

            
            
        }),
        new HtmlWebPackPlugin({
            template: "./src/blog.html",
            filename: "./blog.html",
            chunks: ['blog'],
            

            
            
        }),
        new HtmlWebPackPlugin({
            template: "./src/contact.html",
            filename: "./contact.html",
            chunks: ['contact'],
            

            
            
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css",
        }),
       

    ],
    devServer: {
        port: 3000,
        disableHostCheck: true,
    }
};




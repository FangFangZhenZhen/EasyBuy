const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports={
    module:{
        rules:[
            {
                test   : /\.(js||jsx)$/,
                exclude: /node_module/,
                use    : {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use : [
                  {
                    loader: 'url-loader',
                  }
                ]
              },
            {
                test: /\.html$/,
                use : {
                    loader : "html-loader",
                    options: {minimize:true}
                }
            },
            {
                test: /\.css$/,
                use : [
                    MiniCssExtractPlugin.loader,"css-loader"
                    ]
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            filename: "./index.html",
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin({
            filename     : "[name].css",
            chunkFilename: "[id].css"
        }),
    ]
}
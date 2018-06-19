var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin('./css/app.css',{
    disable:false,
    allChunks:true
});


function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

function sassRules(){
    return {
        test:/\.(css|sass|scss)$/,
        use:extractSass.extract(['css-loader', 'sass-loader'])
    }
}


function scriptRules(){
    return {
        test:/\.js$/,
        exclude:path.resolve(__dirname,'node_modules'),
        loader:'babel-loader'
    }
}

function fileRules(){
    return {
        test:/\.(woff|woff2|eot|ttf|svg|png)$/,
        use:[
            {
                loader:'url-loader?limit=1024&publicPath=../&name=../fonts/[name].[ext]'
            }
        ]
    }
}

module.exports = {
    entry:{
        app:'./src/app.js'
    },
    output:{
        filename:'js/[name].js',
        path:path.resolve(__dirname,'./public/dist'),
        // chunkFilename:"../js/chunk/[id].chunk.js",
        // publicPath: '/',
    },
    module:{
        rules:[sassRules(),scriptRules(),fileRules()]
    },
    resolve:{},
    plugins:[extractSass]

}
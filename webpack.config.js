const path = require(`path`)
console.log(__dirname)
module.exports = {
    entry : './src/app.js',
    output : {
        path: path.join( __dirname, `public`),
        filename: 'build.js' 
    },
    module: {
        rules:[
            {
                loader:`babel-loader`,
                test: /\.js$/,
                exclude:/node_modules/
            },{
                test:/\.s?css$/,
                use:[
                    `style-loader`,
                    `css-loader`,
                    `sass-loader`
                ]
            }
        ]
    },
    devtool:'cheap-module-eval-source-map',
    devServer:{
        contentBase:path.join(__dirname, `public`)
    },
    mode:'production',
    watch: true
}
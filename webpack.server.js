const path = require('path')
module.exports={
    target:'node',
    entry:'./server.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'build'),
        publicPath:'/build'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel'
            }
        ]
    }
}
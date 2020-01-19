const webPackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config.dev');


const options = {
    contentBase : './dist',
    hot : true,
    host : 'localhost',
    watchOptions :{
        poll : true
    }
    
};


webPackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webPackDevServer(compiler, options);

server.listen(5000, 'localhost' ,() => {
   console.log('개발 서버가 동작중입니다 : 5000');
});

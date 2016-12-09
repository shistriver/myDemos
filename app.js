/**
 * Created by xinyi on 2016/12/9.
 */

var fs = require('fs'),
    express = require('express'),
    swig = require('swig');
var app = express();

//静态文件托管
app.use('/public', express.static(__dirname + '/public'));
//开发 设置缓存
swig.setDefaults({cache:false});
app.engine('html', swig.renderFile);
app.set('views','./views');
app.set('view engine', 'html');

app.use('/',require('./routers/server'));

app.listen(8083);


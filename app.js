/**
 * Created by xinyi on 2016/12/9.
 */

var fs = require('fs'),
    express = require('express'),
    swig = require('swig');
var app = express();

//��̬�ļ��й�
app.use('/public', express.static(__dirname + '/public'));
//���� ���û���
swig.setDefaults({cache:false});
app.engine('html', swig.renderFile);
app.set('views','./views');
app.set('view engine', 'html');

app.use('/',require('./routers/server'));

app.listen(8083);


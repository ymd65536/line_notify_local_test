const Line = require('./line');
const myLine = new Line();

// 環境変数の読み込み
require('dotenv').config();
// LINE Notify トークンセット
myLine.setToken(process.env.LINE_NOTIFY_ACCESS_TOKEN);
// LINE Notify 実行（「こんにちは！」とメッセージを送る）
myLine.notify('Local Test LINE Notify AWS CloudTech');

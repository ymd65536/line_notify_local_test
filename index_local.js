
const Line = require('./line');
const myLine = new Line();

// LINE Notify トークンセット
myLine.setToken(process.env.LINE_TOKEN);
// LINE Notify 実行（「こんにちは！」とメッセージを送る）
myLine.notify('Local Test LINE Notify AWS CloudTech');

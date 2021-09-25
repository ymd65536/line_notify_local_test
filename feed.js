var FeedParser = require('feedparser');
var request = require('request');
var feed = 'https://qiita.com/ymd65536/feed';

// RSSフィードを取得
var req = request(feed);
var feedparser = new FeedParser({});

var items = [];

req.on('error', function (error) {
    // request エラー処理
    console.log('リクエストエラー');
});

req.on('response', function () {
    this.pipe(feedparser);
});

feedparser.on('meta', function (meta) {
    feed_result = '====' + meta.title + '====' + '\n';
});

feedparser.on('readable', function () {
    item = this.read();
    while (item) {
        // console.log(item);
        items.push(item);
        item = this.read();
    }
});

// 上位5つの記事名を取得
feedparser.on('end', function () {
    feed_result = feed_result + items[0].title + '\n' + items[1].title + '\n' + items[2].title + '\n' + items[3].title + '\n' + items[4].title
    console.log(feed_result);
});
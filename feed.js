var FeedParser = require('feedparser');
var request = require('request');
var feed = 'https://qiita.com/ymd65536/feed';

var req = request(feed);
var feedparser = new FeedParser({});

var items = [];

req.on('response', function (res) {
    this.pipe(feedparser);
});

feedparser.on('meta', function (meta) {
    feed_result = '====' + meta.title + '====' + '\n';
});

feedparser.on('readable', function () {
    while (item = this.read()) {
        // console.log(item);
        items.push(item);
    }
});

feedparser.on('end', function () {
    /* show titles
    items.forEach(function (item) {
        console.log('- [' + item.title + ']' + '(' + item.link + ')');
    });
    */


    feed_result = feed_result + items[0].title + '\n' + items[1].title + '\n' + items[2].title + '\n' + items[3].title + '\n' + items[4].title
    console.log(feed_result);

});
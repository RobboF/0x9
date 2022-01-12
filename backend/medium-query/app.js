exports.handler = async (event) => {
    const { parse } = require('rss-to-json');
    // async await
    (async () => {
    
        var rss = await parse('');
    
        console.log(JSON.stringify(rss, null, 3));

    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};

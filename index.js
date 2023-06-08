
const request = require('request');
const cheerio = require('cheerio');

// 크롤링할 웹 페이지의 URL
const url = 'https://digimoncard.co.kr/index.php?mid=cardlist&category=2300';

// request 모듈을 사용하여 웹 페이지 가져오기
request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    // HTML을 cheerio 모듈을 사용하여 파싱
    const $ = cheerio.load(body);

    // "card_name" 클래스 크롤링 및 출력
    $('.card_name').each((index, element) => {
      const cardName = $(element).text();
      console.log(`Card Name: ${cardName}`);

      // "cardinfo_bottom" 클래스 크롤링 및 출력
      const cardInfoBottom = $('.cardinfo_bottom').eq(index).text();
      console.log(`Card Info Bottom (Using next()): ${cardInfoBottom}`);

      console.log('---');
    });
  }
});
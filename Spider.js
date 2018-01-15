var request = require('request');
var cheerio = require('cheerio');

/**
 * request por padrão sem arguemnto executa um get
 * passando a url da requisicao
 */
request("http://www.imdb.com/chart/moviemeter")
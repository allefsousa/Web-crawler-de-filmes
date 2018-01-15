var request = require('request');
var cheerio = require('cheerio');

/**
 * request por padrão sem arguemnto executa um get
 * passando a url da requisicao
 * e passando a função com os parametros de erro responsta e corpo
 */
request("http://www.imdb.com/chart/moviemeter",function(err,res,body){ 
        if(err) console.log ('Erro :' + err);

        var $ = cheerio.load(body); // recebendo o corpo da requisição
        $('.lister-list tr').each(function(){
            var title = $(this).find('.titleColumn a').text().trim();
            var rating = $(this).find('.imdbRating a').text().trim();

            console.log("titulo: "+title);
        });

        
});
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs'); // file system 

/**
 * request por padrão sem arguemnto executa um get
 * passando a url da requisicao
 * e passando a função com os parametros de erro responsta e corpo
 * 
 */
request("http://www.imdb.com/chart/movgit add *iemeter",function(err,res,body){ 
        if(err) console.log ('Erro :' + err);

        var $ = cheerio.load(body); // recebendo o corpo da requisição
        $('.lister-list tr').each(function(){
            var title = $(this).find('.titleColumn a').text().trim();
            var rating = $(this).find('.imdbRating strong').text().trim();


            fs.appendFile("Os 100 melhores filmes.txt",title + ' ' + rating + '\n') // adicionando filmes buscados a um arquivo txt
            console.log("titulo: "+title);
        });

        
});

$(document).ready(function () {

    getNewVerse();
    generateRandomColor();

    $('.new-verse').click(function () {
        getNewVerse();
    });

    function getNewVerse(){
        $.ajax({
            url: "http://labs.bible.org/api/?passage=random&type=json&callback=myfunction",
            jsonp: "callback",
            dataType: "jsonp",
            data: {
                format: "json"
            },
            success: function( response ) {
                var jsonVerse = response[0];
                var text = jsonVerse.text;
                var bookname = jsonVerse.bookname;
                var chapter = jsonVerse.chapter;
                var verse = jsonVerse.verse;
                var quoteAuthorFormated = '- ' + bookname + ' ' + chapter + ':' + verse;
                $(".text-content").html(filterText(text)).hide().fadeIn(1500);
                $(".quote-author").text(quoteAuthorFormated).hide().fadeIn(1500);
                generateRandomColor();
            }
        });
    }

    function filterText(text){
        var text = text.replace('<a style="" target="_blank" href="http://netbible.com/net-bible-preface">&copy;NET</a>', '');
        return text;
    }

    function generateRandomColor(){
        var R = randomRange();
        var G = randomRange();
        var B = randomRange();
        var color = 'rgb(' + R + ', ' + G + ', ' + B + ')';
        $('.color-fixed').css('background-color', color);
        $('.quote-text, .quote-author').css('color', color);
    }

    function randomRange(rangeMin = 0, rangeMax = 255) {
        return Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;
    }
});


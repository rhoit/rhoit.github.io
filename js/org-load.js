function body_load () {
    var fp = new XMLHttpRequest();
    var orgParser = new Org.Parser();
    fp.open('GET', 'blog/001-blog.org', false);
    fp.send();
    var docHTML = orgParser.parse(fp.responseText).convert(Org.ConverterHTML, {translateSymbolArrow: true}).toString();
    document.getElementById("blog").innerHTML=docHTML;
    prettyPrint();
}

body_load();

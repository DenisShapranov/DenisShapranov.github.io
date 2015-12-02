
 var $area = $('body');
 var $allLinks = $("a");
 //console.log($allLinks);
 //var data = $allLinks;
 //console.log(data);
 for (var i = 0; i < $allLinks.length; i++) {
     var elem = $allLinks[i].outerHTML;
     var $elem =  $allLinks.eq(i);
     //console.log($elem);
     if (((~elem.indexOf('href="http://'))&&(!~elem.indexOf('href="http://internal.com'))) || (~elem.indexOf('href="ftp://')))
     {
         $elem.addClass('external');
         console.log($allLinks[i]);
     }
 }


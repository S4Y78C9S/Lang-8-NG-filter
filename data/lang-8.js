var g_text = "";

self.port.on("changePrefs", function(pref) {
  g_text = pref;
  //console.log("changePrefs: " + g_text);
  main();

});

function main() {
    $(function() {
      if ( g_text == "" ) {
        return;
      }
      
      //class="bdb cfx spaced"
      $("div.bdb").each(function() {
        //$(this).css("color", "blue");
        //$(this).remove();
        //$(this).children("div").hide();
        
        var nglist = g_text.split(",");
        for ( var i = 0; i < nglist.length; ++i) {
            var nguser = nglist[i];
            nguser = nguser.replace(/^\s+|\s+$/g, ""); 
            if ( nguser == "" ) {
                continue;
            }
            if ( $(this).children("div").children("a").text() == nguser ) {
                $(this).hide();
            }
        }
        
        
      });
    });
};

main();

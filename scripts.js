// $(document).ready(function() {
  //   // $("button#green").click(function() {
    //   //   $("body").addClass("green-background");
    //   // });
    //   //
    //   // $("button#yellow").click(function() {
      //   //   $("body").addClass("yellow-background");
      //   // });
      //   //
      //   // $("button#red").click(function() {
        //   //   $("body").addClass("red-background");
        //
        //
        //   $("button#red").click(function() {
          //     $("body").addClass("red-background");
          //
          //   });
          //   $("img#walrus").click(function() {
            //     $("img").addClass("hideWalrus");
            //   });
            //   $("#clickable").click(function() {
              //     $("#walrus").fadeTo("slow", 0.5);
              //   });
              // });


              $(document).ready(function() {

                $("#NaN1").click(function(){
                  $("#NaN1").toggle();
                  $("#NaN2").toggle();

                });
                $("#NaN2").click(function(){
                  $("#NaN1").toggle();
                  $("#NaN2").toggle();


                });
                $("#escape1").click(function(){
                  $("#escape1").toggle();
                  $("#escape2").toggle();

                });
                $("#escape2").click(function(){
                  $("#escape1").toggle();
                  $("#escape2").toggle();
                });


                $("#js1").click(function(){
                  $("#js1").toggle();
                  $("#js2").toggle();

                });
                $("#js2").click(function(){
                  $("#js1").toggle();
                  $("#js2").toggle();

                });
              });

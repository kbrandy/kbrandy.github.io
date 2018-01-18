
var questions = [

  "How much space to do you have for your future plants?",

  "How do you plant to place them?",

  "How would you describe the light in your space?",

  "How do you feel about watering plants?"
];

var i=0;
//when you click next button the following question in the array with replace the last
function nextQuestion(){
  if(i<questions.length-1){
    i++;
    console.log(i);
    $("#questions-to-vote-on").attr("for", questions[i]);
  }
}
// this the start button that triggers careds down
//$("#start").on("click",function(event){
//$("img").attr("src", "images/back-of-card.png");
//var back = "images/back-of-card.png"
//var current = 0

$(document).ready(function(){



// this the next button that triggers next survey and
$("#next").on("click",function(event){
var element = $(this);
element.show(questions[0]).addClass("completed")
 })

});


function nextQuestion() {
    $('.next').on('click', function() {
        $('#questions>div').each(function() {
            var id = $(this).index();
            if ($(this).is(':visible')) {
                $(this).hide();
                if (id == $('#questions>div').length - 1) {
                    //$('#questions>div').eq(0).show();
                } else {
                    $('#questions>div').eq(id + 1).show();
                }
                return false;
                }
              });
          });
    }



function backQuestion() {
      $('.back').on('click', function() {
            $('#questions>div').each(function() {
                  var id = $(this).index();
                  if ($(this).is(':visible')) {
                      $(this).show();
                      if (id == $('#questions>div').length - 1) {
                                  //$('#questions>div').eq(0).show();
                      } else {
                        $('#questions>div').eq(id - 1).show();
                      }
                        return true;
                      }
          });
        });
    }


 $(document).ready(function(){
        	$(".next").on("click",nextQuestion);
          $(".back").on("click",backQuestion);
  //  	$("#buttons-wrapper .btn[value='Back']").on("click",backQuestion);
    });
*/

setTimeout(function(){

  $(".pinkgreen,.othergreen").css("animation-play-state","running");
},2000);

var userResponse = {
};

var currentPage = 0;

var plants = [{
  name: 'Norfolk Island Pine',
  light: 'lots of light',
  size: 'large',
  care: 'daily',
  url: 'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=myindoorplant-20&marketplace=amazon&region=US&placement=B07482JRB3&asins=B07482JRB3&linkId=451e709131c5dfd93cd1f4e2a9905df5&show_border=true&link_opens_in_new_window=true'
},

{
  name: 'Butterfly Palm',
  light: 'lots of light',
  size: 'large',
  care: 'weekly or less',
  url: 'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=myindoorplant-20&marketplace=amazon&region=US&placement=B00N1C5BBW&asins=B00N1C5BBW&linkId=9183ebb20667e3105fc6dde1df9ca602&show_border=true&link_opens_in_new_window=true'
},
{
  name: 'Dragon tree',
  light: 'lots of light',
  size: 'medium',
  care: 'daily',
  url: 'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=myindoorplant-20&marketplace=amazon&region=US&placement=B00N03N4DE&asins=B00N03N4DE&linkId=fd594cff64dfe9855b3a459a1f888316&show_border=true&link_opens_in_new_window=true'
},

{
  name: 'Rubber tree',
  light: 'lots of light',
  size: 'medium',
  care: 'daily',
  url: 'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=myindoorplant-20&marketplace=amazon&region=US&placement=B013J9TTYG&asins=B013J9TTYG&linkId=c866714f2f0e690166ed806554b42852&show_border=true&link_opens_in_new_window=true'
},
{
  name: 'Ponytail Palm',
  light: 'lots of light',
  size: 'medium',
  care: 'weekly or less',
  url: 'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=myindoorplant-20&marketplace=amazon&region=US&placement=B075QS11WP&asins=B075QS11WP&linkId=65e79db5e798ad5c1bb9b2375e4b796e&show_border=true&link_opens_in_new_window=true'
},

{
  name: 'Succulents',
  light: 'lots of light',
  size: 'small',
  care: 'weekly or less',
  url: 'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=myindoorplant-20&marketplace=amazon&region=US&placement=B06XRBJDTN&asins=B06XRBJDTN&linkId=e974de330dc4b24e89ce367c2d7c30e9&show_border=true&link_opens_in_new_window=true'
},
{
  name: 'Aloe Plant',
  light: 'lots of light',
  size: 'small',
  care: 'weekly or less',
  url: 'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=myindoorplant-20&marketplace=amazon&region=US&placement=B00JYNVT7C&asins=B00JYNVT7C&linkId=a88cf9763a2761477323abf70c64e4a1&show_border=true&link_opens_in_new_window=true'
},
{
  name: 'Jade plant',
  light: 'lots of light',
  size: 'small',
  care: 'weekly or less',
  url: 'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=myindoorplant-20&marketplace=amazon&region=US&placement=B00OI1RXD4&asins=B00OI1RXD4&linkId=5d78198883c827dd5a995c3de12a7eac&show_border=true&link_opens_in_new_window=true'
},
{
  name: 'Fiddle Leaf Fig Tree',
  light: 'medium light',
  size: 'large',
  care: 'daily',
  url: 'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=myindoorplant-20&marketplace=amazon&region=US&placement=B00NYNTRPO&asins=B00NYNTRPO&linkId=9551a91b599ef5f2967cc8e9a29c7486&show_border=true&link_opens_in_new_window=true'
},
{
  name: 'Kentia Palm',
  light: 'medium light',
  size: 'large',
  care: 'weekly or less',
  url: 'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=myindoorplant-20&marketplace=amazon&region=US&placement=B00AFTPISK&asins=B00AFTPISK&linkId=0b075d24085d29fd597a19f85db33103&show_border=true&link_opens_in_new_window=true'
},
{
  name: 'Peace Lily',
  light: 'medium light',
  size: 'medium',
  care: 'daily',
  url: 'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=myindoorplant-20&marketplace=amazon&region=US&placement=B01ERMWI9M&asins=B01ERMWI9M&linkId=8387bc7f7e7ad291266178b44c7e88d4&show_border=true&link_opens_in_new_window=true'
},
{
  name: 'Spider Plant',
  light: 'medium light',
  size: 'medium',
  care: 'weekly or less',
  url: 'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=myindoorplant-20&marketplace=amazon&region=US&placement=B075TQ4NHX&asins=B075TQ4NHX&linkId=0190ebb6d1f24d55aa101d709e33a020&show_border=true&link_opens_in_new_window=true'
},
{
  name: 'ZZ Plant',
  light: 'medium light',
  size: 'medium',
  care: 'weekly or less',
  url: 'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=myindoorplant-20&marketplace=amazon&region=US&placement=B01ERMWUFO&asins=B01ERMWUFO&linkId=4b6719f10fe9a5426c5e030bef4830ab&show_border=true&link_opens_in_new_window=true'
},
{
  name: 'African Violet',
  light: 'medium light',
  size: 'small',
  care: 'daily',
  url: 'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=myindoorplant-20&marketplace=amazon&region=US&placement=B01DN72ZPE&asins=B01DN72ZPE&linkId=6f80ffa6e9316225ad701824a91942ff&show_border=true&link_opens_in_new_window=true'
},
{
  name: 'Snake Plant',
  light: 'medium light',
  size: 'small',
  care: 'weekly or less',
  url: 'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=myindoorplant-20&marketplace=amazon&region=US&placement=B01ERMWBGW&asins=B01ERMWBGW&linkId=bf1707ebec6c3c0b33390e868fbbe3eb&show_border=true&link_opens_in_new_window=true'
},
{
  name: 'Parlor Palm',
  light: 'low light',
  size: 'large',
  care: 'daily',
  url: 'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=myindoorplant-20&marketplace=amazon&region=US&placement=B072QWSCXQ&asins=B072QWSCXQ&linkId=cd84bf7bbabf73c52f14a470eab98ac7&show_border=true&link_opens_in_new_window=true'
},

{
  name: 'Parlor Palm',
  light: 'low light',
  size: 'large',
  care: 'weekly or less',
  url: 'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=myindoorplant-20&marketplace=amazon&region=US&placement=B072QWSCXQ&asins=B072QWSCXQ&linkId=cd84bf7bbabf73c52f14a470eab98ac7&show_border=true&link_opens_in_new_window=true'
},
{
  name: 'Peperomia Plant',
  light: 'low light',
  size: 'medium',
  care: 'daily',
  url: 'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=myindoorplant-20&marketplace=amazon&region=US&placement=B072N69CLF&asins=B072N69CLF&linkId=fb445a94043d310e7d3dbec47e63db17&show_border=true&link_opens_in_new_window=true'
},
{
  name: 'Fern',
  light: 'low light',
  size: 'medium',
  care: 'daily',
  url: 'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=myindoorplant-20&marketplace=amazon&region=US&placement=B01ERMWBCG&asins=B01ERMWBCG&linkId=f09a762d949e008e011d7e5f7eddf782&show_border=true&link_opens_in_new_window=true'
},
{
  name: 'Red Aglaonema',
  light: 'low light',
  size: 'medium',
  care: 'weekly or less',
  url: 'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=myindoorplant-20&marketplace=amazon&region=US&placement=B00RQOMZDI&asins=B00RQOMZDI&linkId=5d05535e70685dcd280aa998e8cdf7c6&show_border=true&link_opens_in_new_window=true'
},
{
  name: 'Pothos',
  light: 'low light',
  size: 'medium',
  care: 'weekly or less',
  url: 'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=myindoorplant-20&marketplace=amazon&region=US&placement=B00725704A&asins=B00725704A&linkId=6431d67f4f8cd384c3ca1a6425fdc521&show_border=true&link_opens_in_new_window=true'
},
{
  name: 'ZZ Plant',
  light: 'low light',
  size: 'medium',
  care: 'weekly or less',
  url: 'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=myindoorplant-20&marketplace=amazon&region=US&placement=B01ERMWUFO&asins=B01ERMWUFO&linkId=4b6719f10fe9a5426c5e030bef4830ab&show_border=true&link_opens_in_new_window=true'
},
{
  name: 'Anthurium',
  light: 'low light',
  size: 'small',
  care: 'daily',
  url: 'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=myindoorplant-20&marketplace=amazon&region=US&placement=B0785TW5VJ&asins=B0785TW5VJ&linkId=4f1b8f9dd6049cd0200c27bf9c09897b&show_border=true&link_opens_in_new_window=true'
},
{
  name: 'Fern',
  light: 'low light',
  size: 'small',
  care: 'daily',
  url: 'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=myindoorplant-20&marketplace=amazon&region=US&placement=B01ERMWBCG&asins=B01ERMWBCG&linkId=f09a762d949e008e011d7e5f7eddf782&show_border=true&link_opens_in_new_window=true'
},
{
  name: 'Rosary Ivy',
  light: 'low light',
  size: 'small',
  care: 'daily',
  url:'https://ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=myindoorplant-20&marketplace=amazon&region=US&placement=B01MFFV15Q&asins=B01MFFV15Q&linkId=8869968a2ff8a752cec2774504a7dbe1&show_border=true&link_opens_in_new_window=true'
}
];
//inputs for survey
  $("a.again").hide()

function updateUserResponse(){
  var lightInput = $('input[name=question0]:checked');
  var sizeInput = $('input[name=question1]:checked');
  var careInput = $('input[name=question2]:checked');

  if(lightInput.length !== 0) {
    userResponse['light'] = lightInput[0].value;
  }

  if(sizeInput.length !== 0) {
    userResponse['size']= sizeInput[0].value;
  }
  if(careInput.length !== 0) {
    userResponse['care']= careInput[0].value;
  }

  console.log(userResponse);
  console.log(currentPage);


  if(currentPage == 3){
    $("results").empty

    plants.forEach(function(plant) {
      if (userResponse.light === plant.light
        && userResponse.size === plant.size
        && userResponse.care === plant.care) {

        $("#plant_results").append( '<div class="resultPlant"> <h3>' + plant.name + '</h3> <iframe style="width:300px;height:250px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src=" '+ plant.url +' "></iframe></div>')

      }
    })
    $("a.again").show()
    $(".next").hide()
    $(".back").hide()
  }
};
//save state on next this

function nextQuestion() {
        $('#questions>div').each(function() {
            var id = $(this).index();
            if ($(this).is(':visible')) {
                $(this).hide();
                if (id == $('#questions>div').length - 1) {
                    $('#results').show();
                    currentPage = 0;
                } else {
                    $('#questions>div').eq(id + 1).show();
                    currentPage = id + 1;
                }
                return false;
            }
        });

        updateUserResponse()
    }
function backQuestion() {
        $('#questions>div').each(function() {
            var id = $(this).index();
            if ($(this).is(':visible')) {
                $(this).hide();
                if (id == $('#questions>div').length - 1) {
                    $('#questions>div').eq(0).show();
                    currentPage = 0;
                } else {
                    $('#questions>div').eq(id - 1).show();
                    currentPage = id - 1;
                }
                return false;
            }
        });
        updateUserResponse()
    }


//next button and back button

   $(document).ready(function(){
     $(".next").on("click",nextQuestion);
     $(".back").on("click",backQuestion);
   });


//This is for the neon h1 title
  var textHolder = $('#pink')[0];
  var text = textHolder.innerHTML;
 	var chars = text.length;
 	var newText = '';
 	var i;

 for (i = 0; i < chars; i += 1) {
 	newText += '<i>' + text.charAt(i) + '</i>';
 }

 textHolder.innerHTML = newText;



 function randomFromInterval(from,to) {
 	return Math.floor(Math.random()*(to-from+1)+from);
 }

 function hasClass(element, cls) {
     return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
 }

 function flicker() {
 	counter += 1;

 	if (counter === flickerNumber) {
 		return;
 	}

 	setTimeout(function () {
 		if(hasClass(randomLetter, 'on')) {
 			randomLetter.className = '';
 		}
 		else {
 			randomLetter.className = 'on';
 		}

 		flicker();
 	}, 0);
 }

$( document ).ready(function() {
 $(window).scroll(function(){
   if ($(this).scrollTop() > 400) {
     $("#imageleft img").animate({ width: '400px', height: '300px' }, 1200, )
      $("#imageright img").animate({ width: '400px', height: '300px' }, 1200, )
   }
 })
});



// Initialize and add the map
function initMap() {
  // The location of Mississauga
  var miss = {lat: 43.580260, lng:-79.616900};
  // The map, centered at Mississauga
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 10, center: miss});
  // The marker, positioned at Mississauga
  var marker = new google.maps.Marker({position: miss, map: map});
}

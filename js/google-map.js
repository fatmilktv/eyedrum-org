$(document).ready(function() {

	var onMobile = false;
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		onMobile = true;
	}

  if (onMobile == false){
    $(window).load(function(){
      //Google Map          
      var latlng = new google.maps.LatLng(33.7521292,-84.3938684);
      var settings = {
        zoom: 17,
        center: new google.maps.LatLng(33.7521292,-84.3938684), mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        scrollwheel: false,
        draggable: true,
        mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
        navigationControl: false,
        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
        mapTypeId: google.maps.MapTypeId.ROADMAP};
      var map = new google.maps.Map(document.getElementById("map_canvas"), settings); 
      google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
      }); 
      var contentString = 
        '<div id="content">'+
        '  <h3>Eyedrum</h3>'+
        '  <div id="bodyContent">'+
        '    <p>88 Forsyth Street, Atlanta, GA 30303</p>'+
        '  </div>'+
        '</div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      }); 
      var companyImage = new google.maps.MarkerImage('img/marker.png',
        new google.maps.Size(63,68), //Width and height of the marker
        new google.maps.Point(0,0),
        new google.maps.Point(35,20) //Position of the marker
      );
      var companyPos = new google.maps.LatLng(33.7521292,-84.3938684); 
      var companyMarker = new google.maps.Marker({
        position: companyPos,
        map: map,
        icon: companyImage,               
        title:"Eyedrum",
        zIndex: 3});
      google.maps.event.addListener(companyMarker, 'click', function() {
        infowindow.open(map,companyMarker);
      });
    });
  }else{
    $('#map_canvas').addClass('map-bg-mobile');
  }
  
});

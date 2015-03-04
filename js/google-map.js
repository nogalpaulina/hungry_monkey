function init() {
	var myLatLng = new google.maps.LatLng(41.493191,-71.310520);

	var mapOptions = {
		center: myLatLng,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		zoom: 18
	};

	var venueMap = new google.maps.Map(document.getElementById('map'),mapOptions);

	var marker = new google.maps.Marker({
      position: myLatLng,
      map: venueMap,
      title: 'Hungry Monkey'
  	});

}
function loadScript() {
	var script = document.createElement('script');
	script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
	document.body.appendChild(script);
}
window.onload = loadScript;

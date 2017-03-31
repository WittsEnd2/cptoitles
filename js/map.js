// $(document).ready(function(){
//     var eventId = [];
//     var allLatLng = []
//     var allMarkers = [];
//     var eventName = [];
//     var eventDescription = [];
//     var infowindow = null;
    
//     var pos;
//     var userCords;
//     var tempMarkerHolder = [];
    
//     if(navigator.geolocation){
//         function error(err){
//             console.warn('Error(' + err.code + '): ' + err.message);
//         }
//         function success(pos){
//             userCords = pos.coords;
//         }
//         navigator.geolocation.getCurrentPosition(success, error);
//     } else {
//         alert("Geolocation is not supported by your browser");
//     }
    
//     var mapOptions = {
//         zoom: 5,
//         center: new google.maps.LatLng(37.09024,-100.712891),
//         panControl: false,
//         panControlOptions: {
//             position: google.maps.ControlPosition.BOTTOM_LEFT
//         },
//         zoomControl: true,
//         zoomControlOptions: {
//             style: google.maps.ZoomControlStyle.LARGE,
//             position: google.maps.ControlPosition.RIGHT_CENTER
//         },
//         scaleControl: false
//     };
//     infowindow = new google.maps.InfoWindow({
//         content: "holding..."
//     });
//     map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    
    
// });

var database = firebase.database();
var testValue = "";
database.ref('/DataPoint').once('value').then(function(snapshot){
    testValue = snapshot.val();
});
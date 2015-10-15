var map = L.map('map', {
  center: [-3.146934, -78.103972],
  zoom: 0,
  minZoom: 2,
  maxZoom: 0,
  scrollWheelZoom: false,
  doubleClickZoom: false,
  dragging: false,
  touchZoom: false,
  zoomControl: false
});
/* Define options of bouncing for all markers */
L.Marker.setBouncingOptions({
        bounceHeight  : 10,   // height of the bouncing
        bounceSpeed   : 45,   // bouncing speed coefficient
        exclusive     : true, // if this marker bouncing all others must stop
        elastic       : true, // activate contract animation when marker touch the ground
        contractSpeed : 34,   // contracting speed coefficient, default: 52
        contractHeight: 8,   // how much marker will contract when it touch the ground (px), default: 12
});

var Thunderforest_Outdoors = L.tileLayer('http://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png',
{
  attribution: '&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  minZoom: 1,
  maxZoom: 16
}).addTo(map);

var markers = [];

var marker = L.marker([-32.9264482,-68.813779]);
marker.addTo(map);
marker.bindPopup("Mendoza, Argentina").openPopup();
markers.push(marker);

var marker = L.marker([-8.7565456,-63.8549068]);
marker.addTo(map);
marker.bindPopup("Porto Velho, Brasil").openPopup();
markers.push(marker);

var marker = L.marker([14.62622,-90.4925605]);
marker.addTo(map);
marker.bindPopup("Mixco, Guatemala").openPopup();
markers.push(marker);

var marker = L.marker([25.782324,-80.2310801]);
marker.addTo(map);
marker.bindPopup("Miami, Florida USA").openPopup();
markers.push(marker);

var marker = L.marker([19.2902231,-81.369597]);
marker.addTo(map);
marker.bindPopup("George Town, Cayman Islands").openPopup();
markers.push(marker);

var marker = L.marker([32.8245525,-117.0951632]);
marker.addTo(map);
marker.bindPopup("Main Office <br> San Diego, California USA").openPopup();
markers.push(marker);



_.each(markers, function(marker, key) {
  var bouncing = false;
  marker.on('mouseover', function() {
    if (bouncing == false)
    {
      bouncing = true;
      this.bounce(1);
      setTimeout(function() { bouncing = false; }, 1000); // bouncing=false after 1000ms/1s
    }
  });
});

 var map = L.map('map3', {
  center: [46.8180695,1.321565],
  zoom: 6,
  minZoom: 6,
  maxZoom: 6,
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


var markers_data = {
  bordeaux:      {name: 'bordeaux',     extraClasses:'', coord:[44.8423155,-0.5813319],  modal:'#bordeaux',     icon:{type:'wine_tasting wine_tasting-glass',   color:'darkpurple'}, marker:null},
  cahors:        {name: 'cahors',       extraClasses:'', coord:[44.456522,1.4390129],    modal:'#cahors',       icon:{type:'wine_tasting wine_tasting-glass',   color:'darkpurple'}, marker:null},
  champagne:     {name: 'champagne',    extraClasses:'', coord:[48.976054, 4.382627],    modal:'#champagne',    icon:{type:'wine_tasting wine_tasting-glass',   color:'darkpurple'}, marker:null},
  rhonevalley:   {name: 'rhonevalley',  extraClasses:'', coord:[44.0758227,4.6704557],    modal:'#rhonevalley', icon:{type:'wine_tasting wine_tasting-glass',   color:'darkpurple'}, marker:null},
  

};

_.map(markers_data, function(data, key){
  var icon = L.AwesomeMarkers.icon({
    icon: data.icon.type,
    markerColor: data.icon.color,
    iconColor: 'white',
    extraClasses: data.name + ' ' + data.extraClasses
  });
  var marker = L.marker(data.coord, {icon: icon}).addTo(map);
  var bouncing = false;
  marker.on('mouseover', function() {
    $('.jumbotron p[data-name='+data.name+']').addClass('hover');
    if (bouncing == false)
    {
      bouncing = true;
      this.bounce(1);
      setTimeout(function() { bouncing = false; }, 1000); // bouncing=false after 1000ms/1s
    }
  })
  marker.on('mouseout', function() {
    $('.jumbotron p[data-name='+data.name+']').removeClass('hover');
  })
  marker.on('click', function() {
    console.log(data.modal);
    $(data.modal).modal('toggle');
  });
  data.marker = marker;
});



var overShow = function(name) {
  _.map(markers_data, function(data, k){
    if ((name != k) && (data.marker.options.opacity != 0.2))
      data.marker.setOpacity(0.2);
    else if (data.marker.options.opacity != 1)
      data.marker.setOpacity(1);
  });
};
var allTheSame = function() {
  _.map(markers_data, function(data, k){
    if (data.marker.options.opacity != 1)
      data.marker.setOpacity(1);
  });
};

$('#french_wines p[data-name]').each(function(index, element) {
  var key = $(element).attr('data-name');
  var marker = markers_data[key].marker;
  $(element).on('mouseleave', allTheSame);
  $(element).on('mouseover', function(e) {
   overShow(key);
 });
  $(element).on('click', function() {
    $(markers_data[key].modal).modal('toggle');
  });

});




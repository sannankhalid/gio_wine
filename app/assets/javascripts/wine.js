 var map = L.map('map2', {
  center: [41.7924601, 12.5736108],
  zoom: 6,
  minZoom: 6,
  maxZoom: 6,
  scrollWheelZoom: false,
  doubleClickZoom: false,
  dragging: false,
  touchZoom: false,
  zoomControl: false
});
map.dragging.disable();
/* Define options of bouncing for all markers */
L.Marker.setBouncingOptions({
        bounceHeight  : 10,   // height of the bouncing
        bounceSpeed   : 45,   // bouncing speed coefficient
        exclusive     : true, // if this marker bouncing all others must stop
        elastic       : true, // activate contract animation when marker touch the ground
        contractSpeed : 34,   // contracting speed coefficient, default: 52
        contractHeight: 8,   // how much marker will contract when it touch the ground (px), default: 12
});

// var Esri_WorldShadedRelief = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}', {
//   attribution: 'Tiles &copy; Esri &mdash; Source: Esri',
//                 minZoom: 1,
//                 maxZoom: 16
//               }).addTo(map);




var Thunderforest_Outdoors = L.tileLayer('http://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png',
              {
                attribution: '&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                minZoom: 1,
                maxZoom: 16
              }).addTo(map);
//ORIGINAL
 // var Stamen_Watercolor = L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png', {
//   attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//   subdomains: 'abcd',
//   minZoom: 1,
//   maxZoom: 16
// }).addTo(map);


var markers_data = {
  planeta:      {name: 'planeta',     extraClasses:'', coord:[37.8816289,15.1218875],  modal:'#myModal',   icon:{type:'wine_tasting wine_tasting-glass',   color:'darkpurple'}, marker:null},
  batasiolo:    {name: 'batasiolo',   extraClasses:'', coord:[44.6376169,7.9421806],   modal:'#myModal2',  icon:{type:'wine_tasting wine_tasting-glass',   color:'darkpurple'}, marker:null},
  maschio:      {name: 'maschio',     extraClasses:'', coord:[44.773463,10.513811],    modal:'#myModal3',  icon:{type:'wine_tasting wine_tasting-glass',   color:'darkpurple'}, marker:null},
  mazzei:       {name: 'mazzei',      extraClasses:'', coord:[43.435532,11.306296],    modal:'#myModal4',  icon:{type:'wine_tasting wine_tasting-glass',   color:'darkpurple'}, marker:null},
  farnese:      {name: 'farnese',     extraClasses:'', coord:[42.352734,14.201073],    modal:'#myModal5',  icon:{type:'wine_tasting wine_tasting-glass',   color:'darkpurple'}, marker:null},
  fantinel:     {name: 'fantinel',    extraClasses:'', coord:[46.106565,12.836795],    modal:'#myModal6',  icon:{type:'wine_tasting wine_tasting-glass',   color:'darkpurple'}, marker:null},
  riunite:      {name: 'riunite',     extraClasses:'', coord:[44.4355049,10.9767866],  modal:'#myModal7',  icon:{type:'wine_tasting wine_tasting-glass',   color:'darkpurple'}, marker:null},
  casanova:     {name: 'casanova',    extraClasses:'', coord:[43.057149,11.5219],      modal:'#myModal8',  icon:{type:'wine_tasting wine_tasting-glass',   color:'darkpurple'}, marker:null},
  masi:         {name: 'masi',        extraClasses:'', coord:[45.523359,10.863783],    modal:'#myModal9',  icon:{type:'wine_tasting wine_tasting-glass',   color:'darkpurple'}, marker:null},
  lazzaroni:    {name: 'lazzaroni',   extraClasses:'', coord:[45.4015845,9.059264],    modal:'#myModal10', icon:{type:'wine_tasting wine_tasting-glass',   color:'darkpurple'}, marker:null},
  casale:       {name: 'casale',      extraClasses:'', coord:[41.880312,12.286956],    modal:'#myModal11', icon:{type:'wine_tasting wine_tasting-glass',   color:'darkpurple'}, marker:null},
  cecchi:       {name: 'cecchi',      extraClasses:'', coord:[43.863751,10.248668],    modal:'#myModal12', icon:{type:'wine_tasting wine_tasting-glass',   color:'darkpurple'}, marker:null},
  vesevo:       {name: 'vesevo',      extraClasses:'', coord:[40.861278,14.737792],    modal:'#myModal13', icon:{type:'wine_tasting wine_tasting-glass',   color:'darkpurple'}, marker:null},
  roncaia:      {name: 'roncaia',     extraClasses:'', coord:[46.210658,13.303138],    modal:'#myModal16', icon:{type:'wine_tasting wine_tasting-glass',   color:'darkpurple'}, marker:null},
  monaci:       {name: 'monaci',      extraClasses:'', coord:[40.288626,18.079691],    modal:'#monaci',    icon:{type:'wine_tasting wine_tasting-glass',   color:'darkpurple'}, marker:null},
  salento:      {name: 'salento',     extraClasses:'', coord:[40.3534148,17.6184901],  modal:'#salento',   icon:{type:'wine_tasting wine_tasting-glass',   color:'darkpurple'}, marker:null},
  fontana:      {name: 'fontana',     extraClasses:'', coord:[41.830486,12.907034],    modal:'#fontana',   icon:{type:'wine_tasting wine_tasting-glass',   color:'darkpurple'}, marker:null},
  vulture:      {name: 'vulture',     extraClasses:'', coord:[40.798203,15.962222],    modal:'#vulture',   icon:{type:'wine_tasting wine_tasting-glass',   color:'darkpurple'}, marker:null},
  rustichella:  {name: 'rustichella', extraClasses:'', coord:[42.396833,13.56532],     modal:'#myModal14', icon:{type:'glyphicon glyphicon-cutlery',       color:'green'},      marker:null},
  ferrarelle:   {name: 'ferrarelle',  extraClasses:'', coord:[41.26142,14.1498185],    modal:'#myModal15', icon:{type:'glyphicon glyphicon-cutlery',       color:'green'},      marker:null},
  amaretti:     {name: 'amaretti',    extraClasses:'', coord:[45.6867005,8.9315245],   modal:'#myModal17', icon:{type:'glyphicon glyphicon-cutlery',       color:'green'},      marker:null},
  mutti:        {name: 'mutti',       extraClasses:'', coord:[44.150763,10.9380075],   modal:'#mutti',     icon:{type:'glyphicon glyphicon-cutlery',       color:'green'},      marker:null},
  olio:         {name: 'olio',        extraClasses:'', coord:[37.6042748,12.9660447],  modal:'#myModal18', icon:{type:'glyphicon glyphicon-cutlery',       color:'green'},      marker:null}
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

$('#the_foods p[data-name]').each(function(index, element) {
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
$('#the_wines p[data-name]').each(function(index, element) {
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

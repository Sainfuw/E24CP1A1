var red = 30;
var green = 30;
var blue = 30;

var setColors = function() {
  color = 'rgb(' + red + ',' + green + ',' + blue + ')';
  $('#colorRGB')[0].innerHTML = color
  $('#box')[0].style.backgroundColor = color;
}

$(document).on('turbolinks:load', function() {
  setColors();
  $('.knob').knob({
    'min': 0,
    'max': 255,
    'lineCap': 'round',
    change: function(v) {
      if (this.$[0].dataset.fgcolor == 'red') {
        red = parseInt(v);
      } else if (this.$[0].dataset.fgcolor == 'green') {
        green = parseInt(v);
      } else {
        blue = parseInt(v);
      }
      setColors();
    }
  });
  $('.knob').bind('change', function(){
    if (this.dataset.fgcolor == "red") {
      red = parseInt($(this).val());
    } else if (this.dataset.fgcolor == "green") {
      green = parseInt($(this).val());
    } else {
      blue = parseInt($(this).val());
    }
    setColors();
  });
});

// $(document).on('turbolinks:load', function () {
//   $('#red').knob({
//     'min': 0,
//     'max': 255,
//     'lineCap': 'round',
//     'fgColor': 'red',
//     change: function (v) {
//       red = parseInt(v);
//       setColors();
//     }
//   });
//   $('#green').knob({
//     'min': 0,
//     'max': 255,
//     'lineCap': 'round',
//     'fgColor': 'green',
//     change: function (v) {
//       green = parseInt(v);
//       setColors();
//     }
//   });
//   $('#blue').knob({
//     'min': 0,
//     'max': 255,
//     'lineCap': 'round',
//     'fgColor': 'blue',
//     change: function (v) {
//       blue = parseInt(v);
//       setColors();
//     }
//   });
// });
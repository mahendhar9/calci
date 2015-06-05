Calci = {

    keyCodes: {
    27: 'AC',
    42: '*',
    47: '/',
    48: '0',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9',
    13: '=',
    8: 'DEL',
    43: '+',
    45: '-'
  },

  lastKeyWasOp: false,
  lastKeyWasDot: false,

  clearDisplay: function() {
    $('#preview').text("");
    $('#result').text("0");

  },



  del: function() {
    var preview = $('#preview').text();
    $('#preview').html($('#preview').text().slice(0,preview.length-1));
  },

  calculate: function() {
    var result = eval($('#preview').text());
    $('#result').html(result);

  },

  keyClick: function(val) {

    switch (val) {
      case 'AC':
        Calci.clearDisplay();
        break; 

      case 'DEL':
        Calci.del();
        break;

      case '=':
        Calci.calculate();
        break;

      default:

      if(['+','*','-','/'].indexOf(val) != -1 && Calci.lastKeyWasOp) {
        Calci.del();
      } 
        var preview = $('#preview').text();
        $('#preview').html(preview + val);
      
      
  }
  if(['+','-','*','/'].indexOf(val) == -1) {
    Calci.lastKeyWasOp = false;
  } else {
    Calci.lastKeyWasOp = true;
  }
},

  

  
  keyPress: function() {
    $(document).keypress(function(event) {

      var keycode = event.keyCode || event.which;
      Calci.keyClick(Calci.keyCodes[keycode]);

    });
  }

};


$(document).ready(function(){
  
  $('.key').click(function(){
    console.log($(this).text());
    Calci.keyClick($(this).text());
  });

  Calci.keyPress();

});


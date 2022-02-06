(function () {

    var name = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    
    for (var k = 0; k < name.length; k++) {
      var firstL = name[k].charAt(0).toLowerCase();
    
      if (firstL === 'j') {
        bye(name[k]);
      }
      else {
        hello(name[k]);
      }
    }
    
    })();

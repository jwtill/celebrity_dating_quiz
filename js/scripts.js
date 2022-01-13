$(document).ready(function() {
  $("form#userInfo").submit( function() {
    event.preventDefault();
    const age = parseInt($("#age").val());
    console.log(age);
    const color = $("#color").val();
    console.log(color);
    const gender = $("input:radio[name=gender]:checked").val();
    console.log(gender);

    if (isNaN(age)) {
      $("#error").show();
      return age;
    }
    
    else
    {
      if ( gender === "female")
      {
        if (age < 35 )
        {
          $("#celeb").text("You get to date Justin Bieber");
        }
        else if (age >= 35 && color === "green" )
        {
          $("#celeb").text("You get to date Justin Timberlake");
        }
        else
        {
          $("#celeb").text("You get to date Will Smith");
        }
      }
      else if (gender === "other")
      {
        if (color === "red")
        {
          $("#celeb").text("You get to date Reba McIntyre");
        }
        else  
        { 
          $("#celeb").text("You get to date Jake Gyllenhall");
        }
      }
      else  
      {
        if ( color === "blue")
        {
          $("#celeb").text("You get to date hugh jackman");
        }
        else 
        {
          $("#celeb").text("You get to date Lady Gaga");
        }
      }
    }


    
  });
});
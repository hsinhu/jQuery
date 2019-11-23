$("#ch3form").submit(function(){
    var fruit = $("input[name='fruit']:checked").length
    var standing = $("input[name='standing']:checked").length
    if (fruit && standing) {
        return true
    }

    if (fruit) alert("You must pick a standing!")
    if (standing) alert("You must pick a fruit!")
    if (!(fruit||standing)) alert("You must pick a fruit and a standing!")
    event.preventDefault();
  })

$(function() {
  var favArray = [];
  $("#favoriteThings").submit(function() {
    event.preventDefault();
    favArray.push($("#firstThing").val());
    favArray.push($("#secondThing").val());
    favArray.push($("#thirdThing").val());
    favArray.push($("#fourthThing").val());
    favArray.push($("#fifthThing").val());

    var newArray = [favArray[1], favArray[0], favArray[2]];
    console.log(newArray);

    $("#arrayOne").text(newArray[0]);
    $("#arrayTwo").text(newArray[1]);
    $("#arrayThree").text(newArray[2]);

  });
});

$(".draggable").draggable({
    grid:[140,140],
    containment:".container",
    scroll:false,
    stack:".draggable",
    revert: "valid",
});


  $( function() {
    $( ".draggable" ).draggable();
    $( ".droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
      }
    });
  } );
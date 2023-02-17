$(function() {
  $(".note-container").sortable({
    connectWith: ".note-container",
    handle: ".note-header",
    placeholder: "note-placeholder",
    start: function(event, ui) {
      ui.item.toggleClass("highlight");
    },
    stop: function(event, ui) {
      ui.item.toggleClass("highlight");
    }
  }).disableSelection();
});

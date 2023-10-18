
/*$('#local_vid').draggable({
  containment: 'body',
  zIndex: 10000,
  // set start position at bottom right
  start: function (event, ui) {
    ui.position.left = $(window).width() - ui.helper.width();
    ui.position.top = $(window).height() - ui.helper.height();
  },
}).draggable("option", "delay", 600);*/

function touchHandler(event) {
    var touch = event.changedTouches[0];

    var simulatedEvent = document.createEvent("MouseEvent");
        simulatedEvent.initMouseEvent({
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup"
    }[event.type], true, true, window, 1,
        touch.screenX, touch.screenY,
        touch.clientX, touch.clientY, false,
        false, false, false, 0, null);

    //event.preventDefault();

    touch.target.dispatchEvent(simulatedEvent);
}

function patchElementTouchDrag(elem) {
    elem.addEventListener("touchstart", touchHandler, true);
    elem.addEventListener("touchmove", touchHandler, true);
    elem.addEventListener("touchend", touchHandler, true);
    elem.addEventListener("touchcancel", touchHandler, true);
}


function makeDragable(elem) {
	patchElementTouchDrag(elem)

	$(elem).draggable({
		containment: 'body',
  zIndex: 100,
  // set start position at bottom right
  start: function (event, ui) {
    //Stop the touchmove event:
  	$('body').bind('touchmove', function(e){e.preventDefault()});
    ui.position.left = $(window).width() - ui.helper.width();
    ui.position.top = $(window).height() - ui.helper.height();
  },
		stop: function (e) {
      //Unbind to re-enable scrolling
      $('body').unbind('touchmove');
		},
	});
}

makeDragable(document.getElementById("local_vid"))


function checkVideoLayout() {

  const video_grid = document.getElementById("video_grid");
  const videos = video_grid.querySelectorAll("video");
  const video_count = videos.length;

  if (video_count == 0) { } else if (video_count == 1) {
    videos[0].style.width = "100%";
    videos[0].style.height = "100vh";
    videos[0].style.objectFit = "cover";
  } else if (video_count == 2) {
    videos[0].style.width = "100%";
    videos[0].style.height = "50vh";
    videos[0].style.objectFit = "cover";
    videos[1].style.width = "100%";
    videos[1].style.height = "50vh";
    videos[1].style.objectFit = "cover";
  } else if (video_count == 3) {
    videos[0].style.width = "100%";
    videos[0].style.height = "50vh";
    videos[0].style.objectFit = "cover";
    videos[1].style.width = "50%";
    videos[1].style.height = "50vh";
    videos[1].style.objectFit = "cover";
    videos[2].style.width = "50%";
    videos[2].style.height = "50vh";
    videos[2].style.objectFit = "cover";
  } else {
    videos[0].style.width = "50%";
    videos[0].style.height = "50vh";
    videos[0].style.objectFit = "cover";
    videos[1].style.width = "50%";
    videos[1].style.height = "50vh";
    videos[1].style.objectFit = "cover";
    videos[2].style.width = "50%";
    videos[2].style.height = "50vh";
    videos[2].style.objectFit = "cover";
    videos[3].style.width = "50%";
    videos[3].style.height = "50vh";
    videos[3].style.objectFit = "cover";
  }
}
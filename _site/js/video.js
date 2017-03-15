(function() {
   // your page initialization code here
   // the DOM will be available here
    var video = document.getElementById('deko_vid');

    var x = window.innerWidth / 2;
    var y = 0;

    var loaded = false;

    document.onclick = function(e) {
        window.parent.postMessage('feature:click', '*');
    };

    // function elementAtMousePosition() {
    //     return document.elementFromPoint(x, y);
    // }

    // document.addEventListener('click', function(event) {
    //     var newEvent = new Event(event.type);
    //     elementAtMousePosition().dispatchEvent(newEvent);
    // });

    document.onmousemove = function(vent) {
        event = event || window.event;
        x = event.clientX;
        y = event.clientY;

        if (loaded) {
            throttledSeek();
        }
    };


    var seek = function() {
        var spins = 3;

        var pos = (x - (window.innerWidth / spins * 0.5)) / (window.innerWidth / spins);

        pos -= Math.floor(pos);

        video.currentTime = pos * video.duration;
    };

    var throttle = function(delay, callback) {
        var previousCall = new Date().getTime();
        return function() {
            var time = new Date().getTime();
            if ((time - previousCall) >= delay) {
                previousCall = time;
                callback.apply(null, arguments);
            }
        };
    };

    var throttledSeek = throttle(1000 / 16, seek);

    function onload() {
      loaded = true;
    };

    video.load();

    video.addEventListener("canplaythrough", function() {
      this.play();
      this.pause();

      onload();
    });

})();

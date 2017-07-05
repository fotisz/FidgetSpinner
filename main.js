function resizeMe() {
    initialOffset = $(".handle").position().top
}
function spin() {
    $(".handle").pep({
        drag: updatePos,
        easing: updatePos
    }),
    initialOffset = $(".handle").position().top,
    spinner = $(".spinner").propeller({
        inertia: .999,
        speed: .5,
        onDragStop: function() {
            backgroundInit = !0
        },
        onDragStart: function() {
            backgroundInit = !1
        },
        onRotate: function() {
           // updateBackground(this.speed)
        }
    })
}
function updateBackground(t) {
    var e = "rgb(" + Math.floor(256 * Math.random()) + "," + Math.floor(256 * Math.random()) + "," + Math.floor(256 * Math.random()) + ")";
    if (!backgroundAnimating && backgroundInit) {
        var n = Math.abs(1e3 - 10 * Math.abs(t));
        backgroundAnimating = !0,
        $("body").animate({
            backgroundColor: e
        }, n, function() {
            backgroundAnimating = !1
        })
    }
}
function doDrag(t, e) {
    onDragStart,
    updatePos(t, e)
}
function updatePos(t, e) {
    var n = $(e.el);
    $(".spinner").css({
        top: n.position().top - initialOffset,
        left: n.position().left - initialOffset
    })
}
var initialOffset = 0, backgroundInit = !1, backgroundAnimating = !1, spinner;

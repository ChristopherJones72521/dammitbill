// Begin JQuery

    $(function () {

    var cvs = $("canvas"),
        cvsWidth = cvs.width(),
        cvsHeight = cvs.height(),
        ctx = cvs[0].getContext("2d"),
        top = $("#top"),
        bottom = $("#bottom");

    function writeCaption(text, y) {
        var size = 150;

        do {
            size--;
            ctx.font = size + 'px Impact';
            ctx.lineWidth = size / 32;
        } while (ctx.measureText(text).width > cvsWidth)

        ctx.fillText(text, cvsWidth / 2, y);
        ctx.strokeText(text, cvsWidth / 2, y);

    }

    // Setup basic canvas settings
    $.extend(ctx, {
        strokeStyle: "#000000",
        textAlign: 'center',
        fillStyle: "#ffffff",
        lineCap: "round"
    })

    $("<img />")
        .load(function () {

        var img = this;

        $(document.body).on("keyup", function () {
            var topText = top.val(),
                bottomText = bottom.val();

            ctx.clearRect(0, 0, cvsWidth, cvsHeight);
            ctx.drawImage(img, 0, 0);
            ctx.textBaseline = 'top';
            writeCaption(topText, 0)

            ctx.textBaseline = 'bottom';
            writeCaption(bottomText, cvsHeight)

        }).trigger("keyup");

    })
        .attr("src", "doge.jpg");

});
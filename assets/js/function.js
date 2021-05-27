$(document).ready(function() {
    $(".sidenav").sidenav();
    $(".carousel").carousel();
    setInterval(function() {
        $(".carousel").carousel("next");
    }, 5000)
})
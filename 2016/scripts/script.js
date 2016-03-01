$(document).ready(function() {
    var love = ["people", "data scientists", "computational scientists",
                "Python developers", "open source enthusiasts",
                "thinkers", "community members", "scientists"];

    var index = 0;
    $(".header-swap").text(love[0]);

    setInterval(function() {
        if (index == love.length) {
            index = 0;
        } else {
            index++;
        }

        $(".header-swap").text(love[index]);
    }, 2000);
});

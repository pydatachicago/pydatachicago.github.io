$(document).ready(function() {
    var love = ["data", "Chicago", "open source", "Python", "community",
                "Julia", "data visualizations", "R", "knowledge", "learning",
                "machine learning", "statistics", "each other", "pizza", 
                "open data", "solving problems"];

    var index = 0;
    $(".header-swap").text(love[0]);

    setInterval(function() {
        if (index == love.length) {
            index = 0;
        } else {
            index++;
        }

        $(".header-swap").text(love[index]);
    }, 2500);
});

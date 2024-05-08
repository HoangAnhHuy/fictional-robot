document.addEventListener("DOMContentLoaded", function() {
    var boxItems = document.querySelectorAll(".boxitem");

    boxItems.forEach(function(boxitem) {
        var item = boxitem.querySelector(".item");
        var dropdownList = boxitem.querySelector(".dropdown-list");

        item.addEventListener("click", function() {
            if (dropdownList.style.display === "none") {
                dropdownList.style.display = "block";
            } else {
                dropdownList.style.display = "none";
            }
        });
    });
});
var noSelectElement = document.querySelector(".no-select");

noSelectElement.addEventListener('selectstart', function(e) {
    e.preventDefault();
});




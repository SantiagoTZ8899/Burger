$(function() {
    // adding a new burger
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };

        // send the POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added a new burger");
            // reload page to get latest update to show
            location.reload();
        });
    });

    $(".eatburger").on("click", function(event) {
        event.preventDefault();
        let id = $(this).data("id");
        let devouredState = {
            devoured: 1
        };

        // send a PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function() {
            console.log("burger has been devoured");
            location.reload();
        });
    });

    $(".trashburger").on("click", function(event) {
        event.preventDefault();
        let id = $(this).data("id");
        // send DELETE request
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });
})
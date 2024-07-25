$(document).ready(function() {
    // Bind to the form submit event
    $("#contactForm").on("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Send form data using AJAX
        $.ajax({
            url: $(this).attr("action"),
            type: "POST",
            data: $(this).serialize(),
            success: function() {
                // Success message
                $('#success').html(`
                    <div class='alert alert-success'>
                        <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>
                        <strong>Your message has been sent.</strong>
                    </div>
                `);
                // Clear all fields
                $('#contactForm').trigger("reset");
            },
            error: function() {
                // Error message
                $('#success').html(`
                    <div class='alert alert-danger'>
                        <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>
                        <strong>Sorry, it seems that my mail server is not responding. Please try again later!</strong>
                    </div>
                `);
                // Clear all fields
                $('#contactForm').trigger("reset");
            }
        });
    });

    // Hide success message when focusing on the name field
    $('#name').focus(function() {
        $('#success').html('');
    });

    // Enable tab switching
    $("a[data-toggle='tab']").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

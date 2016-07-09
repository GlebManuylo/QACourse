$(document).ready(function(){
    $('#name-if').focus();
    var feedbackFormValidator = new FeedbackFormValidator();
    $('#feedback-form').submit(function (event) {
        $('[id=incorrect-input-error-message]').each(function () {
            $(this).remove();
        });
        if (feedbackFormValidator.validateForm()){
            event.preventDefault();
        }
    })
});

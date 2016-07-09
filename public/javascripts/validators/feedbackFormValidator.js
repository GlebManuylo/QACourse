function FeedbackFormValidator(){
    var formHasErrors = false;

    FeedbackFormValidator.prototype.validateForm = function () {
        formHasErrors = false;
        checkNameInputField();
        checkEmailInputFieldValue();
        checkSubjectInputFieldValue();
        checkAttachmentInputFieldValue();
        checkMessageInputFieldValue();
        return formHasErrors;
    };

    var checkNameInputField = function () {
        var nameInputField = $('#name-if');
        var nameInputFieldValue = nameInputField.val();
        var nameInputFieldPattern = /^[\w&$-]+$/;
        if (nameInputFieldValue != ''){
            if(!nameInputFieldPattern.test(nameInputFieldValue)){
                nameInputField.after("<span id='incorrect-input-error-message'><br/> Incorrect data. Please fix it before submitting the form </span>");
                reportError();
            }
        } else {
            nameInputField.after("<span id='incorrect-input-error-message'><br/> This field is required and can not be empty </span>");
            reportError();
        }
    };

    var checkEmailInputFieldValue = function(){
        var emailInputField = $('#email-if');
        var emailInputFieldValue = emailInputField.val();
        var emailInputFieldPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailInputFieldValue != ''){
            if(!emailInputFieldPattern.test(emailInputFieldValue)){
                emailInputField.after("<span id='incorrect-input-error-message'><br/> Please enter a vaild E-mail </span>");
                reportError();
            }
        } else {
            emailInputField.after("<span id='incorrect-input-error-message'><br/> This field is required and can not be empty </span>");
            reportError();
        }
    };

    var checkSubjectInputFieldValue = function () {
        var subjectInputField = $('#subject-if');
        var subjectInputFieldPattern = /\.*/;
        var subjectInputFieldValue = subjectInputField.val();
        if(subjectInputFieldValue.length > 256 || !subjectInputFieldPattern.test(subjectInputFieldValue)){
            subjectInputField.after("<span id='incorrect-input-error-message'><br/> Please enter a valid subject text </span>");
            reportError();
        }
    };

    var checkAttachmentInputFieldValue = function () {
        var attachmentInputField = $('#attachment-if');
        var attachmentInputFieldValue = attachmentInputField[0].files[0];
        if (attachmentInputFieldValue != null) {
            var attachmentInputSize = attachmentInputField[0].files[0].size;
            if(/\.doc$/.test(attachmentInputField[0].files[0].name) || attachmentInputSize >= 1572864){
                attachmentInputField.after("<span id='incorrect-input-error-message'><br/> This file is not supported </span>");
                reportError();
            }
        }
    };

    var checkMessageInputFieldValue = function () {
        var messageInputField = $('#message-if');
        var messageInputFieldPattern = /^[^<>#]*$/m;
        var messageInputFieldValue = messageInputField.val();
        if (messageInputFieldValue != ''){
            if(messageInputFieldValue.length > 800 || !messageInputFieldPattern.test(messageInputFieldValue)){
                messageInputField.after("<span id='incorrect-input-error-message'><br/> Incorrect data. Please fix it before submitting the form </span>");
                reportError();
            }
        } else {
            messageInputField.after("<span id='incorrect-input-error-message'><br/> This field is required and can not be empty </span>");
            reportError();
        }
    };

    var reportError = function () {
            formHasErrors = true;
    };

}

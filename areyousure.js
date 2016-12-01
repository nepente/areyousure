var areyousure = (function() {
  'use strict';

  var formAttribute = 'data-confirm-submission';
  var buttonAttribute = 'data-confirm-message';
  var buttonSelector = '[' + buttonAttribute + ']';

  function transitToQuestionState(form, button) {
    var message = button.getAttribute(buttonAttribute);
    var original = button.textContent;
    button.textContent = message;
    button.setAttribute(buttonAttribute, original);
    form.setAttribute(formAttribute, 'true');
  }

  function init(form) {
    form.addEventListener('submit', function(e) {
      var confirmButton = form.querySelector(buttonSelector);
      var haveConfirmed = form.getAttribute(formAttribute) === 'true';
      if (!haveConfirmed) {
        transitToQuestionState(form, confirmButton);
        e.preventDefault();
        e.stopPropagation();
      }
    });
  }

  return {
    init: init
  };
}());

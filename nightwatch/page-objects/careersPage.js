module.exports = {
  url: "https://inhouse.decemberlabs.com/careers/",
  elements: {
    applyNowButton: ".content_culture .launch-modal-join-us",
    sendButton:
      ".content_what_we_offer.row .get-in-touch-modal.wpforms-container > form[method='post']  button[name='wpforms[submit]']",
    formPopup:
      ".content_what_we_offer.row .get-in-touch-modal.wpforms-container > form[method='post'] > .wpforms-field-container",
    formTitle: ".content_what_we_offer.row .center.contact-form-heading",
    nameField:
      ".content_what_we_offer.row .get-in-touch-modal.wpforms-container > form[method='post'] > .wpforms-field-container > .wpforms-field.wpforms-field-name.wpforms-first.wpforms-one-half > input[name='wpforms[fields][0]']",
    emailField:
      ".content_what_we_offer.row .get-in-touch-modal.wpforms-container > form[method='post'] > .wpforms-field-container > .wpforms-field.wpforms-field-email.wpforms-first.wpforms-one-half > input[name='wpforms[fields][1]']",
    linkedinField: "div:nth-of-type(4) > input[name='wpforms[fields][20]']",
    commentField:
      ".content_what_we_offer.row .get-in-touch-modal.wpforms-container > form[method='post'] > .wpforms-field-container > .wpforms-field.wpforms-field-textarea.wpforms-one-half > textarea[name='wpforms[fields][2]']",
  },
  commands: [
    {
      clickApplyNow() {
        return this.click("@applyNowButton");
      },
      clickSend() {
        return this.click("@sendButton");
      },
      assertFormPopupVisible() {
        return this.assert.visible("@formPopup");
      },
      assertFormTitle(expectedTitle) {
        return this.assert.containsText("@formTitle", expectedTitle);
      },
      assertFieldIsRed: function (fieldSelector) {
        return this.getAttribute(
          fieldSelector,
          "aria-invalid",
          function (result) {
            this.assert.equal(result.value, "true");
          }
        );
      },

      fillFieldAndAssertNotRed(field, text) {
        return this
          .clearValue(field)
          .setValue(field, text)
          .click('@formTitle') // Asumiendo que @submitButton es el selector del botón que debes hacer clic
          .getAttribute(field, 'aria-invalid', function(result) {
            this.assert.equal(result.value, 'false')
          })
      }
    },
  ],
};

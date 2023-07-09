require('chai');

describe("Verify apply now input fields", function () {
  it("Test", function (browser) {
    browser.window.fullscreen(function () {
        console.log('window in fullscreen mode');
      });
    browser.navigateTo('https://inhouse.decemberlabs.com/careers/')
    browser.element.find('[data-subject="Join Our Team"]').click()
    browser.element.find('[class="wpforms-field-container"]').assert.visible()
    browser.element.find('[class="contact-form-heading center"]').assert.visible()
    browser.element.find('[id="wpforms-870-field_0"]').assert.visible()
    browser.element.find('[type="submit"]').click()
    assertNumberOfErrorFields(browser, 4)
    browser.element.find('#wpforms-870-field_0').sendKeys(['test', browser.Keys.ENTER])
    assertNumberOfErrorFields(browser, 3)
    browser.element.find('#wpforms-870-field_1').sendKeys(['test@test.co', browser.Keys.ENTER])
    assertNumberOfErrorFields(browser, 2)
    browser.element.find('#wpforms-870-field_20').sendKeys(['www.linkedin.com/in/test', browser.Keys.ENTER])
    assertNumberOfErrorFields(browser, 1)
    browser.element.find('#wpforms-870-field_2').sendKeys(['test comment', browser.Keys.ENTER])
    browser.element.find('[type="submit"]').click()
    browser.element.find('.big_text.row').assert.visible()
  });
});

function assertNumberOfErrorFields(browser, expectedNumber) {
    browser.elements('css selector', '[class="wpforms-field-large wpforms-field-required wpforms-error"]', result => {
        browser.assert.equal(result.value.length, expectedNumber);
    });
  }
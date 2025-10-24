Feature: Sauce Demo Cart Validation

    Scenario: Add and Remove Items from Cart
        Given I am on the SauceDemo Login Page
        When I log in as "standard_user" with password "secret_sauce"
        And I add product "Sauce Labs Bolt T-Shirt" to the cart
        Then I should see "Sauce Labs Bolt T-Shirt" in the cart
        When I remove product "Sauce Labs Bolt T-Shirt" from the cart
        Then the cart should be empty
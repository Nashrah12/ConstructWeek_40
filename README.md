# ConstructWeek_40
## Puma Website Automation Testing Project - Tested with Cypress
### 📌 Project Overview

This project focuses on the automation testing of the Puma e-commerce website using Cypress. The primary goal is to validate core functionalities, ensuring that essential features like user authentication, product search, cart and wishlist management, and checkout processes function correctly across different devices. The test suite is designed with reusability and scalability in mind to support future enhancements.
### 🛠️ Tools and Technologies Used

- Cypress

- JavaScript

- GitHub

- Page Object Model (POM)
### 📂 Features Tested

## User Authentication:

Verified login and registration functionality with valid and invalid credentials.

Tested password recovery to ensure users can reset their credentials.

## Search Functionality:

Ensured that the search results accurately match user queries.

Validated the functionality of filters such as category, price range, and brand.

## Cart and Wishlist Management:

Verified the ability to add, update, and remove products from the cart and wishlist.

Ensured the cart retains items across user sessions.

## Checkout Process:

Tested the complete checkout workflow, including applying promo codes, entering shipping details, and processing payments.

Ensured that the order confirmation page displays correctly after successful purchases.

## UI Testing and Responsiveness:

Verified that the website adapts well to different screen sizes, including desktop, tablet, and mobile.

Ensured that UI elements such as buttons, forms, and navigation bars are correctly aligned and functional across devices.
### 📄 Artifacts Included

This project includes various documentation and reports to ensure comprehensive test coverage and traceability:

## Test Scripts:

Modular Cypress test scripts using the Page Object Model (POM) for better reusability and maintainability.

Test cases cover authentication, search, cart management, and checkout workflows.

## RTM (Requirements Traceability Matrix):

A detailed RTM mapping test cases to application requirements, ensuring complete test coverage.

## Test Plan:

A detailed test plan specifying objectives, scope, testing approach, tools, resources, and timelines.

Defines both manual and automated testing strategies.


## Manual Test Cases for Functional and  Non-Functional Testing:

Manual test cases covering performance and usability testing.

Ensures that the website can handle peak user traffic and offers a seamless user experience.

## Bug Report:

A structured bug report documenting identified issues with details such as bug ID, description, severity, steps to reproduce, and current status.

## Test Summary Report:

A high-level summary of test execution results, including the number of test cases passed, failed, and skipped.

Provides recommendations for improvement based on findings.
### 🐞 Key Bugs Identified

Bug ID

Feature

Description

Severity

Status

BUG-001

Wishlist

Wishlist button not appearing for some products

High

Open

BUG-002

Checkout

Promo code field missing on the checkout page

Medium

Open

BUG-003

UI Responsiveness

Layout misalignment on smaller screens

High

Open

### ✨ Highlights

Page Object Model (POM): Implemented for better test maintainability and reusability.

Comprehensive Test Coverage: Functional, non-functional, UI, and regression testing.

Cross-Device Testing: Ensured a seamless experience across desktops, tablets, and mobile devices.

Bug Identification: Documented critical issues to assist the development team in prioritizing fixes.

Detailed Documentation: Includes essential test artifacts such as the Test Plan, Test Summary, and Bug Report for transparency.

### 📝 Conclusion

This project successfully automated the testing of the Puma e-commerce website using Cypress. It covered key functionalities such as user authentication, product search, cart and wishlist management, and checkout workflows. The Page Object Model (POM) was implemented to ensure modular and scalable test scripts, reducing maintenance efforts.

Identified bugs have been reported and shared with the development team for resolution. With detailed RTM, Test Plan, and other artifacts, the testing process remains structured and traceable.

### 🚀 Future Enhancements

Expanding test coverage to include more non-functional tests such as performance and security.

Integrating test execution into a Continuous Integration (CI) pipeline for automated test execution with every code change.

Adding more complex test cases to cover edge scenarios and multi-step workflows.


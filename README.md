# Feed_Reader_Testing

### Introduction:
* In this, Jasmine Testing Suite is used to test for various conditions of the given feed reader assets.

* To start, open index.html in your browser.

* The tests were written in the jasmine/spec/feedreader.js . The test results are displayed at the bottom of index.html page.

* The Tests which have passed are depicted by green color while the failed tests are depicted by red color.

### Tasks:
1. test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.

2. test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.

3. Write a new test suite named "The menu".

4. test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.

5. test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.

6. Write a test suite named "Initial Entries".

7. test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.

8. Write a test suite named "New Feed Selection".
9. test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.

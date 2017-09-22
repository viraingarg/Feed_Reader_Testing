/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        // checks whether all field are defined or not and they are not empty.
        it('allFeeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(false);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        //check if all feeds have url's and aren't null
        it('Has URLs of allFeeds defined and not null', function() {
            for (var a = 0; a < allFeeds.length; a++) {
                expect(allFeeds[a].url).toBeDefined();
                expect(allFeeds[a].url.length >= 1).toBe(true);
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        //check if all feeds have names's and aren't null
        it('Has Names of allFeeds defined and not null', function() {
            for (var a = 0; a < allFeeds.length; a++) {
                expect(allFeeds[a].name).toBeDefined();
                expect(allFeeds[a].name.length >= 1).toBe(true);
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('The Menu is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        it('Display and hide the menu on click', function() {
            $('.menu-icon-link').click(); //click to show menu
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').click(); //Click to hide the menu
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        //Checks for atleast 1 entry
        it('Have atleast 1 Entry', function(done) {
            expect($('.feed .entry').length > 0).toBe(true);
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New feed Selection', function() {

        it('New Feeds Loads or not', function(done) {
            var initialFeed;
            var newFeed;
            loadFeed(0, function() {
                initialFeed = $('.feed').html();
                /* TODO: Write a test that ensures when a new feed is loaded
                 * by the loadFeed function that the content actually changes.
                 * Remember, loadFeed() is asynchronous.
                 */
                //checks whether new content is loaded or not

                loadFeed(1, function() {
                    newFeed = $('.feed').html();
                    expect(initialFeed).not.toEqual(newFeed); //compares the first feed with the second
                    done();
                });
            });
        });
    });

}());
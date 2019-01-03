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
        /* Test to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('variable is defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('name is defined', function() {
            allFeeds.forEach( function(feed) {
                expect(feed.name).toBeDefined();
                expect((feed.name).length).not.toBe(0);
            });

        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('url is not empty', function() {
            allFeeds.forEach( function(feed){
                expect(feed.url).toBeDefined();
                expect((feed.url).length).not.toBe(0);
            });

        });

     });


    /* "The menu" test suite */
    describe('The menu', function() {
        var body,
            menuIcon;

        beforeEach(function(){
            body = document.querySelector('body');
            menuIcon = document.querySelector('.menu-icon-link');
        });

        /* Test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('menu is hidden by default', function() {
            expect(body.className).toContain('menu-hidden');
         });

         /* Test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('menu changes visibility onclick', function() {
            menuIcon.click();
            expect(body.className).not.toContain('menu-hidden');
            menuIcon.click();
            expect(body.className).toContain('menu-hidden');
         });
    });


    /* "Initial Entries" test suite */
    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         it('feeds are loaded properly', function() {
            expect($('.feed .entry').length).not.toBe(0);
         })
         
    });

    /* "New Feed Selection" test suite */
    describe('New Feed Selection', function() {
        var feedOne,
            feedTwo;

        beforeEach(function(done) {
            loadFeed(0, function() {
                feedOne = $('.feed .entry');
                loadFeed(1, function() {
                    feedTwo = $('.feed .entry');
                    done();
                });
            });
        });

        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         it('content is changed properly', function() {
            expect(feedOne).not.toEqual(feedTwo);
         })

    });

}());
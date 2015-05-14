describe("StupidHistory", function () {
    var history;

    beforeEach(function () {
        history = new StupidHistory();
    });

    it("should be able to add an object", function () {
        history.add("foo");
        expect(history.get()).toEqual("foo");
    });

    it("should navigate one object down and return it", function () {
        history.add("foo");
        history.add("bar");
        history.navigateDown();
        expect(history.get()).toEqual("bar");
    });

    it("should return the last object if navigateDown() got called after it already reached the bottom object", function () {
        history.add("foo");
        history.add("bar");
        history.navigateDown();
        history.navigateDown();
        expect(history.get()).toEqual("bar");
    });

    it("shoud navigate one object up and return it", function () {
        history.add("foo");
        history.add("bar");
        history.navigateDown();
        history.navigateUp();
        expect(history.get()).toEqual("foo");
    });

    it("should return the first object if navigateUp() got called after it already reached the top object", function () {
        history.add("foo");
        history.navigateUp();
        history.navigateUp();
        expect(history.get()).toEqual("foo");
    });

    it("should reset the history", function () {
        history.add("foo");
        history.add("bar");
        history.clear();
        expect(history.get()).toEqual(false);
    });

    it("should reset the navigation offset", function(){
        history.add("foo");
        history.add("bar");
        history.navigateDown();
        history.resetOffset();
        expect(history.get()).toEqual("foo");
    })
});
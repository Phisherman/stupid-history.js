/**
 * @description The History class provides methods to save and navigate to an _history of items
 * @constructor
 */
function History() {
    this._history = [];
    this._offset = 0;
}

/**
 * @description Navigates in the _history one item up
 * @returns {boolean|*} returns the navigated item or false if there is no _history
 */
History.prototype.navigateUp = function () {
    var history = this._history;

    if (this._offset > 0) {
        this._offset--;
    }

    if (history && history.length > 0) {
        return (history[history.length - this._offset - 1]);
    }
    else
        return false;
};

/**
 * @description Navigates in the _history one item down
 * @returns {boolean|*} returns the navigated item or false if there is no _history
 */
History.prototype.navigateDown = function () {
    var history = this._history;

    if (this._offset + 1 < history.length) {
        this._offset++;
    }

    if (history && history.length > 0) {
        return (history[history.length - this._offset - 1]);
    }
    else
        return false;
};

/**
 * @description Clears the _history
 */
History.prototype.clear = function () {
    this._history = [];
    this._offset = 0;
};

/**
 * @description Adds an item to the _history
 * @param obj The passed object, can be everything
 */
History.prototype.add = function (obj) {
    this._history.push(obj);
    this._offset = 0;
};

/**
 * @description Returns the current navigated _history item
 * @returns {boolean|*} returns the navigated item or false if there is no _history
 */
History.prototype.get = function () {
    if (this._offset === undefined ||
        this._history === undefined ||
        this._history.length === 0)
        return false;
    return this._history[this._offset];
};

History.prototype.resetOffset = function () {
    this._offset = 0;
};
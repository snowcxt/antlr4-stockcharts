import assert from 'assert';
import validate from '../lib/validate';

describe("validation", function () {
    it("a()", function () {
        assert.deepEqual([], validate('a()'));
    });

    it("func AND func", function () {
        assert.deepEqual([], validate('id() and id2();'));
    });

    it("func AND (func OR func)", function () {
        assert.deepEqual([], validate('a() and (b() or c())'));
    });

    // it("a())", function () {
    //     assert.deepEqual([{
    //         "column": 3,
    //         "length": 1,
    //         "line": 0,
    //         "text": "extraneous input ')' expecting ';'"
    //     }], validate('a())'));
    // });
});
import assert from 'assert';
import validate from '../lib/validate';

describe("validation", function () {
    it('a()', function () {
        assert.deepEqual([], validate('a()'), []);
    });

    it('(id() and id2())', function () {
        assert.deepEqual([], validate('(id() and id2())'), []);
    });

    it('a() and (b() or c())', function () {
        assert.deepEqual(validate('a() and (b() or c())'), []);
    });

    it("a()) - extraneous input ')'", function () {
        assert.deepEqual(validate('a())'), [{
            "column": 3,
            "length": 1,
            "line": 0,
            "text": "extraneous input ')' expecting '<EOF>'"
        }]);
    });

    it("comment", function () {
        assert.deepEqual(validate(`// some comments
        /*
            mutiple line coment
        */
        abc()`
        ), []);
    });
});
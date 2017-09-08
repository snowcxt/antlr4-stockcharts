import { InputStream } from 'antlr4/InputStream';
import { CommonTokenStream } from 'antlr4/CommonTokenStream';
import { ErrorListener } from 'antlr4/error/ErrorListener';
import { ExprLexer } from './parser/ExprLexer';
import { ExprParser } from './parser/ExprParser';


class MyErrorListener extends ErrorListener {
    constructor() {
        super();
        this.errors = [];
    }
    syntaxError(recognizer, offendingSymbol, line, column, text, e) {
        var length = 1, col = column, start;
        if (e && e.ctx && e.ctx.start) {
            col = e.ctx.start.column;
            start = e.ctx.start.start;
            length = e.ctx.start.stop - start + 1;
            if (length < 1) {
                length = 1;
            }
        }
        this.errors.push({
            line: line - 1,
            column: col,
            length,
            text
        });
    }
}

export default function validate(input) {
    var listener = new MyErrorListener();

    var chars = new InputStream(`${input}<EOF>`);
    var lexer = new ExprLexer(chars);
    lexer.removeErrorListeners();
    lexer.addErrorListener(listener);

    var tokens = new CommonTokenStream(lexer);

    var parser = new ExprParser(tokens);
    parser.buildParseTrees = false;
    parser.removeErrorListeners();
    parser.addErrorListener(listener);

    parser.prog();
    return listener.errors;
}
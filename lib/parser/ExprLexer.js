// Generated from lib/Expr.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\f4\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0003\t\u0005\t\'\n\t\u0003\t\u0003\t\u0003\n\u0006\n,\n\n",
    "\r\n\u000e\n-\u0003\u000b\u0006\u000b1\n\u000b\r\u000b\u000e\u000b2",
    "\u0002\u0002\f\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007",
    "\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0003\u0002\u0004\u0003\u0002",
    "2;\u0004\u0002C\\c|\u00026\u0002\u0003\u0003\u0002\u0002\u0002\u0002",
    "\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002",
    "\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002",
    "\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002",
    "\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002",
    "\u0015\u0003\u0002\u0002\u0002\u0003\u0017\u0003\u0002\u0002\u0002\u0005",
    "\u0019\u0003\u0002\u0002\u0002\u0007\u001b\u0003\u0002\u0002\u0002\t",
    "\u001d\u0003\u0002\u0002\u0002\u000b\u001f\u0003\u0002\u0002\u0002\r",
    "!\u0003\u0002\u0002\u0002\u000f#\u0003\u0002\u0002\u0002\u0011&\u0003",
    "\u0002\u0002\u0002\u0013+\u0003\u0002\u0002\u0002\u00150\u0003\u0002",
    "\u0002\u0002\u0017\u0018\u0007?\u0002\u0002\u0018\u0004\u0003\u0002",
    "\u0002\u0002\u0019\u001a\u0007,\u0002\u0002\u001a\u0006\u0003\u0002",
    "\u0002\u0002\u001b\u001c\u00071\u0002\u0002\u001c\b\u0003\u0002\u0002",
    "\u0002\u001d\u001e\u0007-\u0002\u0002\u001e\n\u0003\u0002\u0002\u0002",
    "\u001f \u0007/\u0002\u0002 \f\u0003\u0002\u0002\u0002!\"\u0007*\u0002",
    "\u0002\"\u000e\u0003\u0002\u0002\u0002#$\u0007+\u0002\u0002$\u0010\u0003",
    "\u0002\u0002\u0002%\'\u0007\u000f\u0002\u0002&%\u0003\u0002\u0002\u0002",
    "&\'\u0003\u0002\u0002\u0002\'(\u0003\u0002\u0002\u0002()\u0007\f\u0002",
    "\u0002)\u0012\u0003\u0002\u0002\u0002*,\t\u0002\u0002\u0002+*\u0003",
    "\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002",
    "-.\u0003\u0002\u0002\u0002.\u0014\u0003\u0002\u0002\u0002/1\t\u0003",
    "\u0002\u00020/\u0003\u0002\u0002\u000212\u0003\u0002\u0002\u000220\u0003",
    "\u0002\u0002\u000223\u0003\u0002\u0002\u00023\u0016\u0003\u0002\u0002",
    "\u0002\u0006\u0002&-2\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function ExprLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

ExprLexer.prototype = Object.create(antlr4.Lexer.prototype);
ExprLexer.prototype.constructor = ExprLexer;

ExprLexer.EOF = antlr4.Token.EOF;
ExprLexer.T__0 = 1;
ExprLexer.T__1 = 2;
ExprLexer.T__2 = 3;
ExprLexer.T__3 = 4;
ExprLexer.T__4 = 5;
ExprLexer.T__5 = 6;
ExprLexer.T__6 = 7;
ExprLexer.NEWLINE = 8;
ExprLexer.INT = 9;
ExprLexer.ID = 10;

ExprLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

ExprLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

ExprLexer.prototype.literalNames = [ null, "'='", "'*'", "'/'", "'+'", "'-'", 
                                     "'('", "')'" ];

ExprLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                      null, null, "NEWLINE", "INT", "ID" ];

ExprLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                  "T__5", "T__6", "NEWLINE", "INT", "ID" ];

ExprLexer.prototype.grammarFileName = "Expr.g4";



exports.ExprLexer = ExprLexer;


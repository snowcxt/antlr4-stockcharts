// Generated from lib/Expr.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u000fd\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\f\u0003\f\u0007\f=\n\f\f\f\u000e\f@\u000b\f\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0007\rF\n\r\f\r\u000e\rI\u000b\r\u0003\r\u0005\rL\n\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0007\rS\n\r\f\r\u000e\rV\u000b\r",
    "\u0003\r\u0003\r\u0005\rZ\n\r\u0003\r\u0003\r\u0003\u000e\u0006\u000e",
    "_\n\u000e\r\u000e\u000e\u000e`\u0003\u000e\u0003\u000e\u0003T\u0002",
    "\u000f\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f",
    "\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u0003",
    "\u0002\u0006\u0005\u0002C\\aac|\u0006\u00022;C\\aac|\u0004\u0002\f\f",
    "\u000f\u000f\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002i\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b",
    "\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f",
    "\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013",
    "\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017",
    "\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b",
    "\u0003\u0002\u0002\u0002\u0003\u001d\u0003\u0002\u0002\u0002\u0005#",
    "\u0003\u0002\u0002\u0002\u0007%\u0003\u0002\u0002\u0002\t\'\u0003\u0002",
    "\u0002\u0002\u000b)\u0003\u0002\u0002\u0002\r,\u0003\u0002\u0002\u0002",
    "\u000f.\u0003\u0002\u0002\u0002\u00111\u0003\u0002\u0002\u0002\u0013",
    "3\u0003\u0002\u0002\u0002\u00157\u0003\u0002\u0002\u0002\u0017:\u0003",
    "\u0002\u0002\u0002\u0019Y\u0003\u0002\u0002\u0002\u001b^\u0003\u0002",
    "\u0002\u0002\u001d\u001e\u0007>\u0002\u0002\u001e\u001f\u0007G\u0002",
    "\u0002\u001f \u0007Q\u0002\u0002 !\u0007H\u0002\u0002!\"\u0007@\u0002",
    "\u0002\"\u0004\u0003\u0002\u0002\u0002#$\u0007*\u0002\u0002$\u0006\u0003",
    "\u0002\u0002\u0002%&\u0007+\u0002\u0002&\b\u0003\u0002\u0002\u0002\'",
    "(\u0007>\u0002\u0002(\n\u0003\u0002\u0002\u0002)*\u0007>\u0002\u0002",
    "*+\u0007?\u0002\u0002+\f\u0003\u0002\u0002\u0002,-\u0007@\u0002\u0002",
    "-\u000e\u0003\u0002\u0002\u0002./\u0007@\u0002\u0002/0\u0007?\u0002",
    "\u00020\u0010\u0003\u0002\u0002\u000212\u0007.\u0002\u00022\u0012\u0003",
    "\u0002\u0002\u000234\u0007c\u0002\u000245\u0007p\u0002\u000256\u0007",
    "f\u0002\u00026\u0014\u0003\u0002\u0002\u000278\u0007q\u0002\u000289",
    "\u0007t\u0002\u00029\u0016\u0003\u0002\u0002\u0002:>\t\u0002\u0002\u0002",
    ";=\t\u0003\u0002\u0002<;\u0003\u0002\u0002\u0002=@\u0003\u0002\u0002",
    "\u0002><\u0003\u0002\u0002\u0002>?\u0003\u0002\u0002\u0002?\u0018\u0003",
    "\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002AB\u00071\u0002\u0002BC",
    "\u00071\u0002\u0002CG\u0003\u0002\u0002\u0002DF\n\u0004\u0002\u0002",
    "ED\u0003\u0002\u0002\u0002FI\u0003\u0002\u0002\u0002GE\u0003\u0002\u0002",
    "\u0002GH\u0003\u0002\u0002\u0002HK\u0003\u0002\u0002\u0002IG\u0003\u0002",
    "\u0002\u0002JL\u0007\u000f\u0002\u0002KJ\u0003\u0002\u0002\u0002KL\u0003",
    "\u0002\u0002\u0002LM\u0003\u0002\u0002\u0002MZ\u0007\f\u0002\u0002N",
    "O\u00071\u0002\u0002OP\u0007,\u0002\u0002PT\u0003\u0002\u0002\u0002",
    "QS\u000b\u0002\u0002\u0002RQ\u0003\u0002\u0002\u0002SV\u0003\u0002\u0002",
    "\u0002TU\u0003\u0002\u0002\u0002TR\u0003\u0002\u0002\u0002UW\u0003\u0002",
    "\u0002\u0002VT\u0003\u0002\u0002\u0002WX\u0007,\u0002\u0002XZ\u0007",
    "1\u0002\u0002YA\u0003\u0002\u0002\u0002YN\u0003\u0002\u0002\u0002Z[",
    "\u0003\u0002\u0002\u0002[\\\b\r\u0002\u0002\\\u001a\u0003\u0002\u0002",
    "\u0002]_\t\u0005\u0002\u0002^]\u0003\u0002\u0002\u0002_`\u0003\u0002",
    "\u0002\u0002`^\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002\u0002ab\u0003",
    "\u0002\u0002\u0002bc\b\u000e\u0002\u0002c\u001c\u0003\u0002\u0002\u0002",
    "\t\u0002>GKTY`\u0003\b\u0002\u0002"].join("");


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
ExprLexer.T__7 = 8;
ExprLexer.T__8 = 9;
ExprLexer.T__9 = 10;
ExprLexer.ID = 11;
ExprLexer.COMMENT = 12;
ExprLexer.WS = 13;

ExprLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

ExprLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

ExprLexer.prototype.literalNames = [ null, "'<EOF>'", "'('", "')'", "'<'", 
                                     "'<='", "'>'", "'>='", "','", "'and'", 
                                     "'or'" ];

ExprLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                      null, null, null, null, null, "ID", 
                                      "COMMENT", "WS" ];

ExprLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                  "T__5", "T__6", "T__7", "T__8", "T__9", 
                                  "ID", "COMMENT", "WS" ];

ExprLexer.prototype.grammarFileName = "Expr.g4";



exports.ExprLexer = ExprLexer;


// Generated from lib/Expr.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ExprVisitor = require('./ExprVisitor').ExprVisitor;

var grammarFileName = "Expr.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0010,\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u0013",
    "\n\u0003\f\u0003\u000e\u0003\u0016\u000b\u0003\u0005\u0003\u0018\n\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003\u001c\n\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0007\u0003\'\n\u0003\f\u0003\u000e\u0003*\u000b",
    "\u0003\u0003\u0003\u0002\u0003\u0004\u0004\u0002\u0004\u0002\u0003\u0003",
    "\u0002\u0003\u0006\u00020\u0002\u0006\u0003\u0002\u0002\u0002\u0004",
    "\u001b\u0003\u0002\u0002\u0002\u0006\u0007\u0005\u0004\u0003\u0002\u0007",
    "\u0003\u0003\u0002\u0002\u0002\b\t\b\u0003\u0001\u0002\t\n\u0007\u0007",
    "\u0002\u0002\n\u000b\u0005\u0004\u0003\u0002\u000b\f\u0007\b\u0002\u0002",
    "\f\u001c\u0003\u0002\u0002\u0002\r\u000e\u0007\n\u0002\u0002\u000e\u0017",
    "\u0007\u0007\u0002\u0002\u000f\u0014\u0005\u0004\u0003\u0002\u0010\u0011",
    "\u0007\t\u0002\u0002\u0011\u0013\u0005\u0004\u0003\u0002\u0012\u0010",
    "\u0003\u0002\u0002\u0002\u0013\u0016\u0003\u0002\u0002\u0002\u0014\u0012",
    "\u0003\u0002\u0002\u0002\u0014\u0015\u0003\u0002\u0002\u0002\u0015\u0018",
    "\u0003\u0002\u0002\u0002\u0016\u0014\u0003\u0002\u0002\u0002\u0017\u000f",
    "\u0003\u0002\u0002\u0002\u0017\u0018\u0003\u0002\u0002\u0002\u0018\u0019",
    "\u0003\u0002\u0002\u0002\u0019\u001c\u0007\b\u0002\u0002\u001a\u001c",
    "\u0007\u000e\u0002\u0002\u001b\b\u0003\u0002\u0002\u0002\u001b\r\u0003",
    "\u0002\u0002\u0002\u001b\u001a\u0003\u0002\u0002\u0002\u001c(\u0003",
    "\u0002\u0002\u0002\u001d\u001e\f\b\u0002\u0002\u001e\u001f\u0007\u000b",
    "\u0002\u0002\u001f\'\u0005\u0004\u0003\t !\f\u0007\u0002\u0002!\"\u0007",
    "\f\u0002\u0002\"\'\u0005\u0004\u0003\b#$\f\u0006\u0002\u0002$%\t\u0002",
    "\u0002\u0002%\'\u0005\u0004\u0003\u0007&\u001d\u0003\u0002\u0002\u0002",
    "& \u0003\u0002\u0002\u0002&#\u0003\u0002\u0002\u0002\'*\u0003\u0002",
    "\u0002\u0002(&\u0003\u0002\u0002\u0002()\u0003\u0002\u0002\u0002)\u0005",
    "\u0003\u0002\u0002\u0002*(\u0003\u0002\u0002\u0002\u0007\u0014\u0017",
    "\u001b&("].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'<'", "'<='", "'>'", "'>='", "'('", "')'", "','" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, "ID", 
                      "AND", "OR", "IS", "NEWLINE", "COMMENT", "WS" ];

var ruleNames =  [ "prog", "expr" ];

function ExprParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ExprParser.prototype = Object.create(antlr4.Parser.prototype);
ExprParser.prototype.constructor = ExprParser;

Object.defineProperty(ExprParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ExprParser.EOF = antlr4.Token.EOF;
ExprParser.T__0 = 1;
ExprParser.T__1 = 2;
ExprParser.T__2 = 3;
ExprParser.T__3 = 4;
ExprParser.T__4 = 5;
ExprParser.T__5 = 6;
ExprParser.T__6 = 7;
ExprParser.ID = 8;
ExprParser.AND = 9;
ExprParser.OR = 10;
ExprParser.IS = 11;
ExprParser.NEWLINE = 12;
ExprParser.COMMENT = 13;
ExprParser.WS = 14;

ExprParser.RULE_prog = 0;
ExprParser.RULE_expr = 1;

function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ProgContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitProg(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.ProgContext = ProgContext;

ExprParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ExprParser.RULE_prog);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 4;
        this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function ParenContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenContext.prototype = Object.create(ExprContext.prototype);
ParenContext.prototype.constructor = ParenContext;

ExprParser.ParenContext = ParenContext;

ParenContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
ParenContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitParen(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CompareContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CompareContext.prototype = Object.create(ExprContext.prototype);
CompareContext.prototype.constructor = CompareContext;

ExprParser.CompareContext = CompareContext;

CompareContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
CompareContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitCompare(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BlankContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BlankContext.prototype = Object.create(ExprContext.prototype);
BlankContext.prototype.constructor = BlankContext;

ExprParser.BlankContext = BlankContext;

BlankContext.prototype.NEWLINE = function() {
    return this.getToken(ExprParser.NEWLINE, 0);
};
BlankContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitBlank(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function OrContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.left = null; // ExprContext;
    this.right = null; // ExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OrContext.prototype = Object.create(ExprContext.prototype);
OrContext.prototype.constructor = OrContext;

ExprParser.OrContext = OrContext;

OrContext.prototype.OR = function() {
    return this.getToken(ExprParser.OR, 0);
};

OrContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
OrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitOr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FuncContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FuncContext.prototype = Object.create(ExprContext.prototype);
FuncContext.prototype.constructor = FuncContext;

ExprParser.FuncContext = FuncContext;

FuncContext.prototype.ID = function() {
    return this.getToken(ExprParser.ID, 0);
};

FuncContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
FuncContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitFunc(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AndContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.left = null; // ExprContext;
    this.right = null; // ExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AndContext.prototype = Object.create(ExprContext.prototype);
AndContext.prototype.constructor = AndContext;

ExprParser.AndContext = AndContext;

AndContext.prototype.AND = function() {
    return this.getToken(ExprParser.AND, 0);
};

AndContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
AndContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitAnd(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ExprParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, ExprParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 25;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ExprParser.T__4:
            localctx = new ParenContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 7;
            this.match(ExprParser.T__4);
            this.state = 8;
            this.expr(0);
            this.state = 9;
            this.match(ExprParser.T__5);
            break;
        case ExprParser.ID:
            localctx = new FuncContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 11;
            this.match(ExprParser.ID);
            this.state = 12;
            this.match(ExprParser.T__4);
            this.state = 21;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExprParser.T__4) | (1 << ExprParser.ID) | (1 << ExprParser.NEWLINE))) !== 0)) {
                this.state = 13;
                this.expr(0);
                this.state = 18;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===ExprParser.T__6) {
                    this.state = 14;
                    this.match(ExprParser.T__6);
                    this.state = 15;
                    this.expr(0);
                    this.state = 20;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }

            this.state = 23;
            this.match(ExprParser.T__5);
            break;
        case ExprParser.NEWLINE:
            localctx = new BlankContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 24;
            this.match(ExprParser.NEWLINE);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 38;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 36;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new AndContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 27;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 28;
                    this.match(ExprParser.AND);
                    this.state = 29;
                    localctx.right = this.expr(7);
                    break;

                case 2:
                    localctx = new OrContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 30;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 31;
                    this.match(ExprParser.OR);
                    this.state = 32;
                    localctx.right = this.expr(6);
                    break;

                case 3:
                    localctx = new CompareContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 33;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 34;
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExprParser.T__0) | (1 << ExprParser.T__1) | (1 << ExprParser.T__2) | (1 << ExprParser.T__3))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 35;
                    this.expr(5);
                    break;

                } 
            }
            this.state = 40;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


ExprParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ExprParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);
		case 1:
			return this.precpred(this._ctx, 5);
		case 2:
			return this.precpred(this._ctx, 4);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ExprParser = ExprParser;

// Generated from lib/Expr.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ExprVisitor = require('./ExprVisitor').ExprVisitor;

var grammarFileName = "Expr.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u000f9\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "\u0014\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003\u001b\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0007\u0003(\n\u0003\f\u0003\u000e\u0003+\u000b",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u00040\n\u0004\f\u0004",
    "\u000e\u00043\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0002\u0003\u0004\u0007\u0002\u0004\u0006\b\n\u0002",
    "\u0003\u0003\u0002\u0006\t\u00029\u0002\f\u0003\u0002\u0002\u0002\u0004",
    "\u001a\u0003\u0002\u0002\u0002\u0006,\u0003\u0002\u0002\u0002\b4\u0003",
    "\u0002\u0002\u0002\n6\u0003\u0002\u0002\u0002\f\r\u0005\u0004\u0003",
    "\u0002\r\u000e\u0007\u0003\u0002\u0002\u000e\u0003\u0003\u0002\u0002",
    "\u0002\u000f\u0010\b\u0003\u0001\u0002\u0010\u0011\u0007\r\u0002\u0002",
    "\u0011\u0013\u0007\u0004\u0002\u0002\u0012\u0014\u0005\u0006\u0004\u0002",
    "\u0013\u0012\u0003\u0002\u0002\u0002\u0013\u0014\u0003\u0002\u0002\u0002",
    "\u0014\u0015\u0003\u0002\u0002\u0002\u0015\u001b\u0007\u0005\u0002\u0002",
    "\u0016\u0017\u0007\u0004\u0002\u0002\u0017\u0018\u0005\u0004\u0003\u0002",
    "\u0018\u0019\u0007\u0005\u0002\u0002\u0019\u001b\u0003\u0002\u0002\u0002",
    "\u001a\u000f\u0003\u0002\u0002\u0002\u001a\u0016\u0003\u0002\u0002\u0002",
    "\u001b)\u0003\u0002\u0002\u0002\u001c\u001d\f\u0006\u0002\u0002\u001d",
    "\u001e\u0005\b\u0005\u0002\u001e\u001f\u0005\u0004\u0003\u0007\u001f",
    "(\u0003\u0002\u0002\u0002 !\f\u0005\u0002\u0002!\"\u0005\n\u0006\u0002",
    "\"#\u0005\u0004\u0003\u0006#(\u0003\u0002\u0002\u0002$%\f\u0004\u0002",
    "\u0002%&\t\u0002\u0002\u0002&(\u0005\u0004\u0003\u0005\'\u001c\u0003",
    "\u0002\u0002\u0002\' \u0003\u0002\u0002\u0002\'$\u0003\u0002\u0002\u0002",
    "(+\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002)*\u0003\u0002",
    "\u0002\u0002*\u0005\u0003\u0002\u0002\u0002+)\u0003\u0002\u0002\u0002",
    ",1\u0005\u0004\u0003\u0002-.\u0007\n\u0002\u0002.0\u0005\u0004\u0003",
    "\u0002/-\u0003\u0002\u0002\u000203\u0003\u0002\u0002\u00021/\u0003\u0002",
    "\u0002\u000212\u0003\u0002\u0002\u00022\u0007\u0003\u0002\u0002\u0002",
    "31\u0003\u0002\u0002\u000245\u0007\u000b\u0002\u00025\t\u0003\u0002",
    "\u0002\u000267\u0007\f\u0002\u00027\u000b\u0003\u0002\u0002\u0002\u0007",
    "\u0013\u001a\')1"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'<EOF>'", "'('", "')'", "'<'", "'<='", "'>'", 
                     "'>='", "','", "'and'", "'or'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, "ID", "COMMENT", "WS" ];

var ruleNames =  [ "prog", "expr", "exprList", "and", "or" ];

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
ExprParser.T__7 = 8;
ExprParser.T__8 = 9;
ExprParser.T__9 = 10;
ExprParser.ID = 11;
ExprParser.COMMENT = 12;
ExprParser.WS = 13;

ExprParser.RULE_prog = 0;
ExprParser.RULE_expr = 1;
ExprParser.RULE_exprList = 2;
ExprParser.RULE_and = 3;
ExprParser.RULE_or = 4;

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
        this.state = 10;
        this.expr(0);
        this.state = 11;
        this.match(ExprParser.T__0);
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

function AndExContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.left = null; // ExprContext;
    this.right = null; // ExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AndExContext.prototype = Object.create(ExprContext.prototype);
AndExContext.prototype.constructor = AndExContext;

ExprParser.AndExContext = AndExContext;

AndExContext.prototype.and = function() {
    return this.getTypedRuleContext(AndContext,0);
};

AndExContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
AndExContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitAndEx(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function OrExContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.left = null; // ExprContext;
    this.right = null; // ExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OrExContext.prototype = Object.create(ExprContext.prototype);
OrExContext.prototype.constructor = OrExContext;

ExprParser.OrExContext = OrExContext;

OrExContext.prototype.or = function() {
    return this.getTypedRuleContext(OrContext,0);
};

OrExContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
OrExContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitOrEx(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CompareExContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.left = null; // ExprContext;
    this.right = null; // ExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CompareExContext.prototype = Object.create(ExprContext.prototype);
CompareExContext.prototype.constructor = CompareExContext;

ExprParser.CompareExContext = CompareExContext;

CompareExContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
CompareExContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitCompareEx(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FuncExContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FuncExContext.prototype = Object.create(ExprContext.prototype);
FuncExContext.prototype.constructor = FuncExContext;

ExprParser.FuncExContext = FuncExContext;

FuncExContext.prototype.ID = function() {
    return this.getToken(ExprParser.ID, 0);
};

FuncExContext.prototype.exprList = function() {
    return this.getTypedRuleContext(ExprListContext,0);
};
FuncExContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitFuncEx(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParenExContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenExContext.prototype = Object.create(ExprContext.prototype);
ParenExContext.prototype.constructor = ParenExContext;

ExprParser.ParenExContext = ParenExContext;

ParenExContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
ParenExContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitParenEx(this);
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
        this.state = 24;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ExprParser.ID:
            localctx = new FuncExContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 14;
            this.match(ExprParser.ID);
            this.state = 15;
            this.match(ExprParser.T__1);
            this.state = 17;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ExprParser.T__1 || _la===ExprParser.ID) {
                this.state = 16;
                this.exprList();
            }

            this.state = 19;
            this.match(ExprParser.T__2);
            break;
        case ExprParser.T__1:
            localctx = new ParenExContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 20;
            this.match(ExprParser.T__1);
            this.state = 21;
            this.expr(0);
            this.state = 22;
            this.match(ExprParser.T__2);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 39;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 37;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new AndExContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 26;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 27;
                    this.and();
                    this.state = 28;
                    localctx.right = this.expr(5);
                    break;

                case 2:
                    localctx = new OrExContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 30;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 31;
                    this.or();
                    this.state = 32;
                    localctx.right = this.expr(4);
                    break;

                case 3:
                    localctx = new CompareExContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 34;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 35;
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExprParser.T__3) | (1 << ExprParser.T__4) | (1 << ExprParser.T__5) | (1 << ExprParser.T__6))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 36;
                    localctx.right = this.expr(3);
                    break;

                } 
            }
            this.state = 41;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
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

function ExprListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_exprList;
    return this;
}

ExprListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprListContext.prototype.constructor = ExprListContext;

ExprListContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitExprList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.ExprListContext = ExprListContext;

ExprParser.prototype.exprList = function() {

    var localctx = new ExprListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ExprParser.RULE_exprList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 42;
        this.expr(0);
        this.state = 47;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ExprParser.T__7) {
            this.state = 43;
            this.match(ExprParser.T__7);
            this.state = 44;
            this.expr(0);
            this.state = 49;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
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

function AndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_and;
    return this;
}

AndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AndContext.prototype.constructor = AndContext;


AndContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitAnd(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.AndContext = AndContext;

ExprParser.prototype.and = function() {

    var localctx = new AndContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ExprParser.RULE_and);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        this.match(ExprParser.T__8);
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

function OrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_or;
    return this;
}

OrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OrContext.prototype.constructor = OrContext;


OrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitOr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.OrContext = OrContext;

ExprParser.prototype.or = function() {

    var localctx = new OrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ExprParser.RULE_or);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 52;
        this.match(ExprParser.T__9);
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
			return this.precpred(this._ctx, 4);
		case 1:
			return this.precpred(this._ctx, 3);
		case 2:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ExprParser = ExprParser;

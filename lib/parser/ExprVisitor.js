// Generated from lib/Expr.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by ExprParser.

function ExprVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

ExprVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
ExprVisitor.prototype.constructor = ExprVisitor;

// Visit a parse tree produced by ExprParser#prog.
ExprVisitor.prototype.visitProg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#paren.
ExprVisitor.prototype.visitParen = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#compare.
ExprVisitor.prototype.visitCompare = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#blank.
ExprVisitor.prototype.visitBlank = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#or.
ExprVisitor.prototype.visitOr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#func.
ExprVisitor.prototype.visitFunc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#and.
ExprVisitor.prototype.visitAnd = function(ctx) {
  return this.visitChildren(ctx);
};



exports.ExprVisitor = ExprVisitor;
grammar Expr;
prog  : stat+ ;
stat  : expr NEWLINE                      #print
      | ID '=' expr NEWLINE               #assign
      | NEWLINE                           #blank
      ;
expr  : left=expr op=('*'|'/') right=expr #opExpr
      | left=expr op=('+'|'-') right=expr #opExpr
      | '(' expr ')'                      #parenExpr
      | INT                               #atomExpr
      | ID                                #idExpr
      ;
NEWLINE : '\r'? '\n';
INT     : [0-9]+ ;
ID      : [a-zA-Z]+;
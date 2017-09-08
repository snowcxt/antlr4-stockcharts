grammar Expr;
prog  
      : expr '<EOF>'
      ;

expr
      : ID '(' exprList? ')'                                #funcEx
      | left=expr and right=expr                            #andEx
      | left=expr or right=expr                             #orEx
      | left=expr ( '<' | '<=' | '>' | '>=' ) right=expr    #compareEx
      | '(' expr ')'                                        #parenEx
      ;

exprList : expr (',' expr)*; 
and : 'and';
or : 'or';

ID : [a-zA-Z_] [a-zA-Z_0-9]*;
COMMENT : ( '--' ~[\r\n]* '\r'? '\n' | '/*' .*? '*/') -> skip;
WS      : [ \t\r\n]+ -> skip;
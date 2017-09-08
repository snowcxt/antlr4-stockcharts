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
      | NEWLINE                                             #blankEx
      ;

exprList : expr (',' expr)* ;   // arg list
and : 'and';
or : 'or';

ID : [a-zA-Z_] [a-zA-Z_0-9]*;
NEWLINE : '\r'? '\n';
COMMENT : ( '//' ~[\r\n]* '\r'? '\n' | '/*' .*? '*/') -> skip;
WS      : [ \t]+ -> skip;


fragment DIGIT : [0-9];

fragment A : [aA];
fragment B : [bB];
fragment C : [cC];
fragment D : [dD];
fragment E : [eE];
fragment F : [fF];
fragment G : [gG];
fragment H : [hH];
fragment I : [iI];
fragment J : [jJ];
fragment K : [kK];
fragment L : [lL];
fragment M : [mM];
fragment N : [nN];
fragment O : [oO];
fragment P : [pP];
fragment Q : [qQ];
fragment R : [rR];
fragment S : [sS];
fragment T : [tT];
fragment U : [uU];
fragment V : [vV];
fragment W : [wW];
fragment X : [xX];
fragment Y : [yY];
fragment Z : [zZ];
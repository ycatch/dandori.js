
<html>
<head>
<title>tiny script</title>
<script type="text/javascript">
<!--

/* Prototype file of JavaScript parser.
 * Written by MORI Koichiro
 * This file is PUBLIC DOMAIN.
 */

var buffer;
var token;
var toktype;

var YYERRTOK = 256;
var NUMBER = 257;
var IDENT = 258;
var STRING = 259;

  
/*
  #define yyclearin (yychar = -1)
  #define yyerrok (yyerrflag = 0)
  #define YYRECOVERING (yyerrflag != 0)
  #define YYERROR  goto yyerrlab
*/


/** Debug mode flag **/
var yydebug = false;

/** lexical element object **/
var yylval = null;

/** Dialog window **/
var yywin = null;
var yydoc = null;

function yydocopen() {
  if (yywin == null) {
    yywin = window.open("", "yaccdiag", "resizable,status,width=600,height=400");
    yydoc = null;
  }
  if (yydoc == null)
    yydoc = yywin.document;
  yydoc.open();
}

function yyprintln(msg)
{
  if (yydoc == null)
    yydocopen();
  yydoc.write(msg + "<br>");
}

function yyflush()
{
  if (yydoc != null) {
    yydoc.close();
    yydoc = null;
    yywin = null;
  }
}



var yytranslate = [
      0,    9,    9,    9,    9,    9,    9,    9,    9,    9,
      9,    9,    9,    9,    9,    9,    9,    9,    9,    9,
      9,    9,    9,    9,    9,    9,    9,    9,    9,    9,
      9,    9,    9,    9,    9,    9,    9,    9,    9,    9,
      5,    6,    9,    9,    7,    9,    9,    9,    9,    9,
      9,    9,    9,    9,    9,    9,    9,    9,    9,    9,
      9,    8,    9,    9,    9,    9,    9,    9,    9,    9,
      9,    9,    9,    9,    9,    9,    9,    9,    9,    9,
      9,    9,    9,    9,    9,    9,    9,    9,    9,    9,
      9,    9,    9,    9,    9,    9,    9,    9,    9,    9,
      9,    9,    9,    9,    9,    9,    9,    9,    9,    9,
      9,    9,    9,    9,    9,    9,    9,    9,    9,    9,
      9,    9,    9,    9,    9,    9,    9,    9,    9,    9,
      9,    9,    9,    9,    9,    9,    9,    9,    9,    9,
      9,    9,    9,    9,    9,    9,    9,    9,    9,    9,
      9,    9,    9,    9,    9,    9,    9,    9,    9,    9,
      9,    9,    9,    9,    9,    9,    9,    9,    9,    9,
      9,    9,    9,    9,    9,    9,    9,    9,    9,    9,
      9,    9,    9,    9,    9,    9,    9,    9,    9,    9,
      9,    9,    9,    9,    9,    9,    9,    9,    9,    9,
      9,    9,    9,    9,    9,    9,    9,    9,    9,    9,
      9,    9,    9,    9,    9,    9,    9,    9,    9,    9,
      9,    9,    9,    9,    9,    9,    9,    9,    9,    9,
      9,    9,    9,    9,    9,    9,    9,    9,    9,    9,
      9,    9,    9,    9,    9,    9,    9,    9,    9,    9,
      9,    9,    9,    9,    9,    9,    1,    2,    3,    4
  ];

var YYBADCH = 9;
var YYMAXLEX = 260;
var YYTERMS = 9;
var YYNONTERMS = 7;

var yyaction = [
     18,   17,   19,    0,    1,    0,    5,    2,   12,    3,
     13
  ];

var YYLAST = 11;

var yycheck = [
      2,    3,    4,    0,    5,   -1,    3,    8,    6,    7,
      6
  ];

var yybase = [
      0,    4,   -2,   -2,    3,   -1,    2,    0,   -2
  ];

var YY2TBLSTATE = 2;

var yydefault = [
      1,32767,32767,32767,32767,32767,32767
  ];



var yygoto = [
     16,   15
  ];

var YYGLAST = 2;

var yygcheck = [
      6,    6
  ];

var yygbase = [
      0,    0,    0,    0,    0,    0,   -2
  ];

var yygdefault = [
  -32768,    4,    9,   10,   11,    6,   14
  ];

var yylhs = [
      0,    1,    1,    2,    2,    3,    3,    5,    5,    4,
      6,    6,    6
  ];

var yylen = [
      1,    0,    2,    1,    1,    4,    3,    1,    3,    3,
      1,    1,    1
  ];

var YYSTATES = 18;
var YYNLSTATES = 7;
var YYINTERRTOK = 1;
var YYUNEXPECTED = 32767;
var YYDEFAULT = -32766;

/*
 * Parser entry point
 */

function yyparse()
{
  var yyastk = new Array();
  var yysstk = new Array();

  yystate = 0;
  yychar = -1;

  yysp = 0;
  yysstk[yysp] = 0;
  yyerrflag = 0;
  for (;;) {
    if (yybase[yystate] == 0)
      yyn = yydefault[yystate];
    else {
      if (yychar < 0) {
        if ((yychar = yylex()) <= 0) yychar = 0;
        yychar = yychar < YYMAXLEX ? yytranslate[yychar] : YYBADCH;
      }

      if (((yyn = yybase[yystate] + yychar) >= 0
	    && yyn < YYLAST && yycheck[yyn] == yychar
           || (yystate < YY2TBLSTATE
               && (yyn = yybase[yystate + YYNLSTATES] + yychar) >= 0
               && yyn < YYLAST && yycheck[yyn] == yychar))
	  && (yyn = yyaction[yyn]) != YYDEFAULT) {
        /*
         * >= YYNLSTATE: shift and reduce
         * > 0: shift
         * = 0: accept
         * < 0: reduce
         * = -YYUNEXPECTED: error
         */
        if (yyn > 0) {
          /* shift */
          yysp++;

          yysstk[yysp] = yystate = yyn;
          yyastk[yysp] = yylval;
          yychar = -1;
          
          if (yyerrflag > 0)
            yyerrflag--;
          if (yyn < YYNLSTATES)
            continue;
            
          /* yyn >= YYNLSTATES means shift-and-reduce */
          yyn -= YYNLSTATES;
        } else
          yyn = -yyn;
      } else
        yyn = yydefault[yystate];
    }
      
    for (;;) {
      /* reduce/error */
      if (yyn == 0) {
        /* accept */
        yyflush();
        return 0;
      }
      else if (yyn != YYUNEXPECTED) {
        /* reduce */
        yyl = yylen[yyn];
        yyval = yyastk[yysp-yyl+1];
        /* Following line will be replaced by reduce actions */
        switch(yyn) {
        case 3:
{} break;
        case 4:
{} break;
        case 5:
{} break;
        case 6:
{} break;
        case 7:
{} break;
        case 8:
{} break;
        case 9:
{} break;
        case 10:
{} break;
        }
        /* Goto - shift nonterminal */
        yysp -= yyl;
        yyn = yylhs[yyn];
        if ((yyp = yygbase[yyn] + yysstk[yysp]) >= 0 && yyp < YYGLAST
            && yygcheck[yyp] == yyn)
          yystate = yygoto[yyp];
        else
          yystate = yygdefault[yyn];
          
        yysp++;

        yysstk[yysp] = yystate;
        yyastk[yysp] = yyval;
      }
      else {
        /* error */
        switch (yyerrflag) {
        case 0:
          yyerror("syntax error");
        case 1:
        case 2:
          yyerrflag = 3;
          /* Pop until error-expecting state uncovered */

          while (!((yyn = yybase[yystate] + YYINTERRTOK) >= 0
                   && yyn < YYLAST && yycheck[yyn] == YYINTERRTOK
                   || (yystate < YY2TBLSTATE
                       && (yyn = yybase[yystate + YYNLSTATES] + YYINTERRTOK) >= 0
                       && yyn < YYLAST && yycheck[yyn] == YYINTERRTOK))) {
            if (yysp <= 0) {
              yyflush();
              return 1;
            }
            yystate = yysstk[--yysp];
          }
          yyn = yyaction[yyn];
          yysstk[++yysp] = yystate = yyn;
          break;

        case 3:
          if (yychar == 0) {
            yyflush();
            return 1;
          }
          yychar = -1;
          break;
        }
      }
        
      if (yystate < YYNLSTATES)
        break;
      /* >= YYNLSTATES means shift-and-reduce */
      yyn = yystate - YYNLSTATES;
    }
  }
}



/* Lexical analyzer */

var buffer;
var token;
var toktype;


function isletter(c)
{
  return ('a' <= c && c <= 'z') || ('A' <= c && c <= 'Z');
}

function isdigit(c)
{
  return ('0' <= c && c <= '9');
}

function yylex()
{
  while (buffer != ""
         && (buffer.charAt(0) == ' ' || buffer.charAt(0) == '\t')) {
    buffer = buffer.substr(1);
  }
  if (buffer.length == 0)
    return 0;
  if (isletter(buffer.charAt(0))) {
    var i;
    for (i = 0; i < buffer.length; i++) {
      if (!isletter(buffer.charAt(i)) && !isdigit(buffer.charAt(i)))
        break;
    }
    token = buffer.substr(0, i);
    buffer = buffer.substr(i);
    return IDENTIFIER;
  } else if (isdigit(buffer.charAt(0))) {
    var i;
    for (i = 0; i < buffer.length; i++) {
      if (!isdigit(buffer.charAt(i)))
        break;
    }
    token = buffer.substr(0, i);
    buffer = buffer.substr(i);
    yylval = token - 0;
    return NUMBER;
  } else {
    token = buffer.substr(0, 1);
    buffer = buffer.substr(1);
    return token.charCodeAt(0);
  }
}

function yyerror(msg) {
  yyprintln(msg);
}

var _bro = (window.opera?
            4:(window.external?3:(window.controllers?1:(document.layers?2:0))));
var _ie5 = (navigator.appName.indexOf('Microsoft Internet Explorer')>=0 &&
            document.getElementById)?1:0;

// C
// _dom : kind of DOM.
//        IE4 = 1, IE5+ = 2, NN4 = 3, NN6+ = 4, others = 0
var _dom =  document.all ? (document.getElementById ? 2 : 1)
           : document.getElementById ? 4
           : document.layers ? 3 : 0;

function getDivFromName(nm) {
  if (_dom==4 || _dom==2)
    return document.getElementById(nm);
  if (_dom==1)
    return document.all(nm);
  if (_dom==3) {
    var s = '';
    for (var i = 1; i < arguments.length; i++)
      s += 'document.layers.'+arguments[i]+'.';
    return eval(s+'document.layers.'+nm);
  }
  return null;
}

function writeDivHTML(div,html) { 
  if (document.layers) {
    div.document.open();
    div.document.write(html);
    div.document.close();
  }
  else if (typeof div.innerHTML!="undefined") { 
    div.innerHTML = html;
  }
}

function setAnswer(ans) {
  writeDivHTML(getDivFromName("answer"), ans);
}

function main() {
  buffer = document.compiledtext.one.value;
  yyparse();
  return false;
}
// -->
</script>
</head>
<body>
Enter expression to compute:
<form name="compiledtext" id="compiledtext" onsubmit="return main()">
<input type="text" name="one" id="one" size=100>
<input name="answer" type="button" value="ANSWER" onclick="main()">
</form>
<hr>
<div id="answer">
</div>
<hr>
</body>
</html>
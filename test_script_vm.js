
<html>
<head>
<title>Calculator</title>
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
var IDENTIFIER = 258;

  
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
      0,   14,   14,   14,   14,   14,   14,   14,   14,   14,
     10,   14,   14,   14,   14,   14,   14,   14,   14,   14,
     14,   14,   14,   14,   14,   14,   14,   14,   14,   14,
     14,   14,   14,   14,   14,   14,   14,    8,   14,   14,
     12,   13,    6,    4,   14,    5,   14,    7,   14,   14,
     14,   14,   14,   14,   14,   14,   14,   14,   14,   14,
     14,   11,   14,   14,   14,   14,   14,   14,   14,   14,
     14,   14,   14,   14,   14,   14,   14,   14,   14,   14,
     14,   14,   14,   14,   14,   14,   14,   14,   14,   14,
     14,   14,   14,   14,    9,   14,   14,   14,   14,   14,
     14,   14,   14,   14,   14,   14,   14,   14,   14,   14,
     14,   14,   14,   14,   14,   14,   14,   14,   14,   14,
     14,   14,   14,   14,   14,   14,   14,   14,   14,   14,
     14,   14,   14,   14,   14,   14,   14,   14,   14,   14,
     14,   14,   14,   14,   14,   14,   14,   14,   14,   14,
     14,   14,   14,   14,   14,   14,   14,   14,   14,   14,
     14,   14,   14,   14,   14,   14,   14,   14,   14,   14,
     14,   14,   14,   14,   14,   14,   14,   14,   14,   14,
     14,   14,   14,   14,   14,   14,   14,   14,   14,   14,
     14,   14,   14,   14,   14,   14,   14,   14,   14,   14,
     14,   14,   14,   14,   14,   14,   14,   14,   14,   14,
     14,   14,   14,   14,   14,   14,   14,   14,   14,   14,
     14,   14,   14,   14,   14,   14,   14,   14,   14,   14,
     14,   14,   14,   14,   14,   14,   14,   14,   14,   14,
     14,   14,   14,   14,   14,   14,   14,   14,   14,   14,
     14,   14,   14,   14,   14,   14,    1,    2,    3
  ];

var YYBADCH = 14;
var YYMAXLEX = 259;
var YYTERMS = 14;
var YYNONTERMS = 6;

var yyaction = [
     17,   -5,   -5,   -5,   -5,    0,-32766,-32766,   11,   42,
      7,   -5,   35,   -5,   12,   13,   14,   15,   16,   17,
     -1,   33,   34,   18,   43,   20,    0,    0,    0,    0,
     31,    0,    0,    0,   10
  ];

var YYLAST = 35;

var yycheck = [
      9,    0,    1,    2,    3,    0,    4,    5,   11,   13,
     12,   10,   13,   12,    4,    5,    6,    7,    8,    9,
      0,    1,   13,    3,    2,    3,   -1,   -1,   -1,   -1,
     10,   -1,   -1,   -1,   12
  ];

var yybase = [
      0,   -4,   -1,   20,   10,    1,   10,    9,    2,    2,
     22,   22,   22,   22,   22,   22,   22,   22,   -3,    5,
     -2,   -9,   -9,   -9,   -9,    0,   10,   10,   22,    0,
      0,    0,   22,   10,   10,    0,    0,    0,    0,    0,
      0,    0,    0,   -2
  ];

var YY2TBLSTATE = 19;

var yydefault = [
      2,32767,32767,32767,    4,   20,    7,32767,   11,   12,
  32767,32767,32767,32767,32767,32767,32767,32767,   19,32767,
     19,   13,   14,   15,   16
  ];



var yygoto = [
      2,    5,    0,    1,    6,    8,    9,   21,   22,   23,
     24
  ];

var YYGLAST = 11;

var yygcheck = [
      4,    5,   -1,    4,    4,    4,    4,    4,    4,    4,
      4
  ];

var yygbase = [
      0,    0,    0,    0,   -7,   -2
  ];

var yygdefault = [
  -32768,   19,    3,   28,    4,   45
  ];

var yylhs = [
      0,    1,    2,    2,    3,    3,    3,    3,    3,    5,
      5,    4,    4,    4,    4,    4,    4,    4,    4,    4,
      4
  ];

var yylen = [
      1,    1,    0,    2,    1,    1,    1,    3,    1,    3,
      4,    3,    3,    3,    3,    3,    3,    3,    1,    1,
      1
  ];

var YYSTATES = 33;
var YYNLSTATES = 25;
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
{ yyval = yyastk[yysp-(2-1)] + yyastk[yysp-(2-2)]; } break;
        case 4:
{ answers += yyastk[yysp-(1-1)] + "<br>"; setAnswer(answers); } break;
        case 6:
{ yyval = "(empty line ignored)<br>"; } break;
        case 7:
{ calc_vars[yyastk[yysp-(3-1)]] = yyastk[yysp-(3-3)]; } break;
        case 8:
{ yyval = ""; } break;
        case 9:
{ answers += "Hello" + "<br>"; setAnswer(answers);} break;
        case 10:
{ answers += yyastk[yysp-(4-1)] + ":" + yyastk[yysp-(4-3)] + "<br>"; setAnswer(answers);} break;
        case 11:
{ yyval = yyastk[yysp-(3-1)] + yyastk[yysp-(3-3)]; } break;
        case 12:
{ yyval = yyastk[yysp-(3-1)] - yyastk[yysp-(3-3)]; } break;
        case 13:
{ yyval = yyastk[yysp-(3-1)] * yyastk[yysp-(3-3)]; } break;
        case 14:
{ yyval = yyastk[yysp-(3-1)] / yyastk[yysp-(3-3)]; } break;
        case 15:
{ yyval = yyastk[yysp-(3-1)] % yyastk[yysp-(3-3)]; } break;
        case 16:
{ yyval = Math.pow(yyastk[yysp-(3-1)],yyastk[yysp-(3-3)]); } break;
        case 17:
{ yyval = yyastk[yysp-(3-2)]; } break;
        case 18:
{ yyval = yyastk[yysp-(1-1)]; } break;
        case 19:
{ yyval = calc_vars[yyastk[yysp-(1-1)]]; } break;
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
var yylval;
var toktype;
var answers = "";
var calc_vars = {};


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
    yylval = token + ""; 
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

function clearAnswer() {
  calc_vars = {};
  answers = "";
  setAnswer(answers);
}

function main() {
  buffer = document.compiledtext.one.value;
  clearAnswer();
  yyparse();
  return false;
}
// -->
</script>
</head>
<body>
<p>Enter expression to compute eg.+, -, *, /, %, ^</p>:
<form name="compiledtext" id="compiledtext" onsubmit="return main()">
<textarea name="one" id="one" rows="4" cols="40"></textarea>
<input name="answer" type="button" value="ANSWER" onclick="main()">
<input name="clear" type="reset" value="CLEAR" onclick="clearAnswer()">
</form>
<hr>
<div id="answer">
</div>
<hr>
</body>
</html>

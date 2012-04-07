
<html>
<head>
<title>Tiny Script</title>
<script type="text/javascript">
<!--
var outputs = "";

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
var COMMENT = 260;

  
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
      0,   15,   15,   15,   15,   15,   15,   15,   15,   15,
     15,   15,   15,   15,   15,   15,   15,   15,   15,   15,
     15,   15,   15,   15,   15,   15,   15,   15,   15,   15,
     15,   15,   15,   15,   15,   15,   15,   10,   15,   15,
     11,   12,    8,    6,   13,    7,   15,    9,   15,   15,
     15,   15,   15,   15,   15,   15,   15,   15,   15,   15,
     15,   14,   15,   15,   15,   15,   15,   15,   15,   15,
     15,   15,   15,   15,   15,   15,   15,   15,   15,   15,
     15,   15,   15,   15,   15,   15,   15,   15,   15,   15,
     15,   15,   15,   15,   15,   15,   15,   15,   15,   15,
     15,   15,   15,   15,   15,   15,   15,   15,   15,   15,
     15,   15,   15,   15,   15,   15,   15,   15,   15,   15,
     15,   15,   15,   15,   15,   15,   15,   15,   15,   15,
     15,   15,   15,   15,   15,   15,   15,   15,   15,   15,
     15,   15,   15,   15,   15,   15,   15,   15,   15,   15,
     15,   15,   15,   15,   15,   15,   15,   15,   15,   15,
     15,   15,   15,   15,   15,   15,   15,   15,   15,   15,
     15,   15,   15,   15,   15,   15,   15,   15,   15,   15,
     15,   15,   15,   15,   15,   15,   15,   15,   15,   15,
     15,   15,   15,   15,   15,   15,   15,   15,   15,   15,
     15,   15,   15,   15,   15,   15,   15,   15,   15,   15,
     15,   15,   15,   15,   15,   15,   15,   15,   15,   15,
     15,   15,   15,   15,   15,   15,   15,   15,   15,   15,
     15,   15,   15,   15,   15,   15,   15,   15,   15,   15,
     15,   15,   15,   15,   15,   15,   15,   15,   15,   15,
     15,   15,   15,   15,   15,   15,    1,    2,    3,    4,
      5
  ];

var YYBADCH = 15;
var YYMAXLEX = 261;
var YYTERMS = 15;
var YYNONTERMS = 9;

var yyaction = [
     40,   19,   42,    9,   10,    9,   10,    0,   28,    7,
     17,   37,   24,   11,   12,   13,   27,    8,    0,    2,
      6
  ];

var YYLAST = 21;

var yycheck = [
      2,    3,    4,    6,    7,    6,    7,    0,   12,   11,
      3,   12,    5,    8,    9,   10,   12,   13,   -1,   11,
     14
  ];

var yybase = [
      0,   -1,   -4,   -3,   -3,   -3,   -2,   -2,   -2,   -2,
     -2,   -2,   -2,   -2,    7,    5,    5,    6,    4,    8,
      0,    5,   -2,    5,    5,    5,    0,    0,    0,    0,
      0,    0,    0,    0,    0,    0,    0,    8
  ];

var YY2TBLSTATE = 18;

var yydefault = [
      1,32767,32767,    9,   11,   10,32767,32767,32767,32767,
  32767,32767,32767,32767,32767,   12,   13,32767,32767,   21
  ];



var yygoto = [
      4,    1,    5,   15,   16,   34,   35,   36,    0,   26
  ];

var YYGLAST = 10;

var yygcheck = [
      7,    7,    7,    7,    7,    7,    7,    7,   -1,    5
  ];

var yygbase = [
      0,    0,    0,    0,    0,   -5,    0,   -6,    0
  ];

var yygdefault = [
  -32768,   14,   22,   23,   25,   38,   18,    3,   39
  ];

var yylhs = [
      0,    1,    1,    2,    2,    3,    3,    5,    5,    6,
      6,    4,    7,    7,    7,    7,    7,    7,    7,    7,
      8,    8,    8
  ];

var yylen = [
      1,    0,    2,    1,    1,    1,    1,    4,    3,    1,
      3,    3,    3,    3,    3,    3,    3,    3,    1,    1,
      1,    1,    1
  ];

var YYSTATES = 35;
var YYNLSTATES = 20;
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
        case 2:
{ outputs += yyastk[yysp-(2-2)]; setAnswer(outputs); } break;
        case 3:
{ yyval = yyastk[yysp-(1-1)] + "<br>";} break;
        case 4:
{ yyval = yyastk[yysp-(1-1)] + "<br>";} break;
        case 7:
{ yyval = yyastk[yysp-(4-1)] + '(' + yyastk[yysp-(4-3)] + ')';} break;
        case 8:
{ yyval = yyastk[yysp-(3-1)] + '()';} break;
        case 10:
{ yyval = yyastk[yysp-(3-1)] + ',' + yyastk[yysp-(3-3)];} break;
        case 11:
{ yyval = yyastk[yysp-(3-1)] + '=' + yyastk[yysp-(3-3)];} break;
        case 12:
{ yyval = yyastk[yysp-(3-1)] + '+' + yyastk[yysp-(3-3)]; } break;
        case 13:
{ yyval = yyastk[yysp-(3-1)] + '-' + yyastk[yysp-(3-3)]; } break;
        case 14:
{ yyval = yyastk[yysp-(3-1)] + '*' + yyastk[yysp-(3-3)]; } break;
        case 15:
{ yyval = yyastk[yysp-(3-1)] + '/' + yyastk[yysp-(3-3)]; } break;
        case 16:
{ yyval = yyastk[yysp-(3-1)] + '%' + yyastk[yysp-(3-3)]; } break;
        case 17:
{ yyval = yyastk[yysp-(3-2)]; } break;
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

function yylex() {
	//cut for space and tabs
	var res = buffer.match(/^\s+/);
	if (res != null) {
		buffer = buffer.substr(res[0].length);
	}
	//Empty
	if (buffer.length == 0) {
		return 0;
	}
	
	//COMMENT
	res = buffer.match(/^\/+/);
	if (res != null) {
		var index = buffer.indexOf("\n");
		if (index == "-1") {
			token = buffer;
		} else {
			token = buffer.substr(0, index);
		}
		buffer = buffer.substr(token.length);
		yylval = token + ""; 
		return COMMENT;
	}

	//IDENT
	res = buffer.match(/^[a-zA-Z_]\w*/);
	if (res != null) {
		token = res[0];
		buffer = buffer.substr(res[0].length);
		yylval = token + ""; 
		return IDENT;
	}
	//NUMBER
	res = buffer.match(/^\d+(\.\d+)?/);
	if (res != null) {
		token = res[0];
		buffer = buffer.substr(res[0].length);
		yylval = token - 0; //return numeric-data
		return NUMBER;
	}
	//Text String
	res = buffer.match(/^".*"|'.*'/);
	if (res != null) {
		token = res[0].substr(1, res[0].length - 2);
		buffer = buffer.substr(res[0].length);
		yylval = token + ""; 
		return STRING;
	}
	//Single symbol
	token = buffer.substr(0, 1);
    buffer = buffer.substr(1);
    return token.charCodeAt(0);
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
  writeDivHTML(getDivFromName("output"), ans);
}

function clearAnswer() {
  calc_vars = {};
  outputs = "";
  setAnswer(outputs);
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
<p>Enter your script</p>:
<form name="compiledtext" id="compiledtext" onsubmit="return main()">
<textarea name="one" id="one" rows="4" cols="40"></textarea>
<input name="answer" type="button" value="Run" onclick="main()">
<input name="clear" type="reset" value="Clear" onclick="clearAnswer()">
</form>
<hr>
<div id="output">
</div>
<hr>
</body>
</html>

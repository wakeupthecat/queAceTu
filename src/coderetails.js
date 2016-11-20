/**
 * coderetails - result of a search
 * Copyright (c) 2015, Alejandro Xalabarder (MIT Licensed)
 */

function coderetails (fileOb, regg)
{
   "use strict";

   var STYLE_DIV4FILE = "background: #ffffff;border:solid gray;border-width:.1em;padding:.8em .6em; font-family: Consolas, \"Liberation Mono\", Menlo, Courier, monospace;";
   //var STYLE_MATCH    = "background: #B5D5FF";
   //var STYLE_CODE     = "margin: 0; background: #E5F5FF ";
   var STYLE_MATCH    = "background: #B5E61D";
   var STYLE_CODE     = "margin: 0; background: #EBFEE9;";
   //var STYLE_LINENUM  = "margin: 0; background: #F0F0F0; border: solid #eee;border-width: 0 2px 0 0;";
   var STYLE_LINENUM  = "margin: 0; background: #F0F0F0; ";

   //EBFEE9
   //D9FDD5
   //B5E61D

   var textHtml = [],
       currFileName = "",
       LINE = 0,
       linstr = "",
       linFormated = "",
       params = "",
       p1 = 0,
       maxi = 0;

   //var regg = new RegExp (verbo, "g");
   var mat;

   // trim for IE8
   if (typeof String.prototype.trim !== 'function') {
      String.prototype.trim = function() {
         return this.replace(/^\s+|\s+$/g, '');
      }
   }

   // fileOb = fileStr (filo);

   var firstLineInRange = false;
   var PREVHTML = "";

   while (! fileOb.eof ())
   {
      linstr = fileOb.getLine ();

      if (checkFile ()) continue;
      if (checkRange ())
      {
         firstLineInRange = true;
         continue;
      }

      if (linstr.length != 0)
      {
         if (linstr.indexOf (" ") == 0)
         {
            linstr = linstr.substr (1);
            linFormated = "";
            maxi = 0;

            while ((mat = regg.exec (linstr)) !== null)
            {
               linFormated += escapeHtml (linstr.substr (maxi, mat.index-maxi));
               linFormated += "<span style=\"" + STYLE_MATCH + "\">";
               linFormated += escapeHtml(mat[0]);
               linFormated += "</span>";
               maxi = mat.index + mat[0].length;
            }

            linFormated += escapeHtml (linstr.substr (maxi));
            params = "'" + currFileName + "', " + LINE;
            LINE ++ ;
            //textHtml.push ("<span onclick=\"clickText("+params+")\" onselect=\"selectedPart (this, " + params + ")\">" + linFormated + "</span>");
            //textHtml.push ("<span onselect=\"selectedPart (this, " + params + ")\">" + linFormated + "</span>");

            if (PREVHTML.length > 0)
               textHtml.push (PREVHTML);

            if (firstLineInRange)
            {
               PREVHTML = "<td><pre style=\"" + STYLE_CODE + "\">";
               firstLineInRange = false;
            }
            else PREVHTML = "";
            //PREVHTML += "<span onclick=\"clickText(this, "+params+")\">" + (linFormated.length != 0 ? linFormated: "<br>") + "</span>";
            PREVHTML += "<span onclick=\"clickText(this, "+params+")\">" + linFormated + "</span>";
         }
      }
   }
   closeTagsFile ();

   return textHtml.join ("\n");
   // ........................ return

   // ===============================
   // === functions

   function escapeHtml(str)
   {
      return String(str).replace(/&/g, '&amp;')
                        .replace(/"/g, '&quot;')
                        .replace(/'/g, '&#39;')
                        .replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;');
   }

   function checkRange()
   {
      var c1 = linstr.indexOf ("range:");
      if (c1 != 0) return false;

      var rang = linstr.substr ("range:".length).split (" ");
      if (rang.length != 2) return false;

      LINE = parseInt (rang[0]);
      var fin = parseInt (rang[1]);

      if (PREVHTML.length !== 0)
      {
         textHtml.push (PREVHTML + "</pre><tr><td><pre>...</pre></td><td><pre> .................................. </pre></td>");
         PREVHTML = "";
      }

      textHtml.push ("<tr><td><pre style=\"" + STYLE_LINENUM + "\">" + LINE);

      for (var ii = LINE+1; ii <= fin; ii ++)
         textHtml.push (ii);

      textHtml.push ("</pre></td>");

      return true;
   }

   function closeTagsFile ()
   {
      if (PREVHTML.length > 0)
         textHtml.push (PREVHTML + "</pre>");
      PREVHTML = "";
      if (currFileName.length > 0)
      {
         textHtml.push ("</table></div><br><br>");
      }
   }

   function checkFile()
   {
      var c1 = linstr.indexOf ("file:");
      if (c1 != 0) return false;

      closeTagsFile ();
      currFileName = linstr.substr ("file:".length);
      textHtml.push ("<pre> FILE: " + escapeHtml (currFileName) + "</pre>");
      textHtml.push ("<div style=\"" + STYLE_DIV4FILE + "\">");
      textHtml.push ("<table>");
      return true;
   }
}


/**
 * fileStr - split lines from a text file given as string handling all possible combinations of CR and LF characters
 * Copyright (c) 2015, Alejandro Xalabarder (MIT Licensed)
 */

//// use
// var textal = fileStr (strfilo);
// while (! textal.eof ())
//    out (textal.getLine ());
//
function fileStr (strcontent, arrayLines)
{
   var textArr = arrayLines || strcontent.split("\n");
   var indx = 0, restales = "", au, resp;

   return {
      eof : eof,
      getLine : getLine,
      rewind : indx = 0,
      getCountLines : function () { return textArr.length; }
   };

   function eof ()
   {
      return indx >= textArr.length && restales.length == 0;
   }

   function getLine ()
   {
      if (eof ()) return;
      if (restales.length == "")
         restales = textArr[indx ++];

      au = restales.indexOf("\r");
      if (au >= 0)
      {
         resp = restales.substr(0,au);
         restales = restales.substr(au+1);
         return resp;
      }
      resp = restales;
      restales = "";
      return resp;
   }
}

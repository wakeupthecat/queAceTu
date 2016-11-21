
// rename it to gFile to be able to test it without goRhino
// (i.e. in a browser)
//
function gaFile ()
{
   var nL = 0;
   var acu = ["first line", 
              "second one()", 
              "", 
              "precious was empty", 
              "end of this file"];
   this.readLine = function () {
      return nL < acu.length ? acu[nL++]: null;
   }
   this.fopen = function () {
      return true;
   }
   this.feof = function () {
      return nL >= acu.length;
   }
   this.fclose = function () {
   }
}

// to be used with goRhino
// uses gFile class
//
function fileToRangos (fileName, regg, arrayout)
{
   var sal = arrayout || [];
   
   //var regg = new RegExp (verbo, "g");

   var fix = new gFile ();
   var leos = 0;
   var NL_MARGIN = 6;
   var NL = 0;
   var range = [];  
   
   function add2array (arr, plusarr) {
      for (ele in plusarr) arr.push(plusarr[ele]);
   }
  
   function foundRange () {
      var matcho = [];
      var rgMa;
   
      range = [];
      
      function findMatch () {
         matcho = [];
         var found = false;
      
         while (!found && (leos = fix.readLine ()) !== null) {
            NL ++;
            found = (regg.exec (leos) !== null);
            if (matcho.length >= NL_MARGIN)
               matcho = matcho.slice (1);
            matcho.push (" " + leos);
         }
         var last = NL;

         while ((NL-last) < NL_MARGIN && (leos = fix.readLine ()) !== null) {
            NL ++;
            if (regg.exec (leos)) last = NL;
            matcho.push (" " + leos);
         }
         return found;
      }
      
      if (findMatch ())
         add2array (range, matcho);
      
      return range.length > 0;
   }
   //
   var first = true;
   if (fix.fopen (fileName, "r")) {
      while (foundRange ()) {
         if (first)
         {
            sal.push ("file:" + fileName);
            first = false;
         }
         sal.push ("range:" + (NL - range.length + 1) + " " + NL);
         add2array (sal, range);
      }
      fix.fclose ();
   }
   
   return sal;
}

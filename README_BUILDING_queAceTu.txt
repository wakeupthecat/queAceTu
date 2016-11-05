
-------- Structure of queAceTu.jar

   queAceTu.jar contains actually gastona.jar, so you can
   build it from a copy of gastona.jar with the following procedure:
   
   copy gastona.jar to queAceTu.jar 
   add following files within the given structures

      queAceTu.jar
         |
         (whole gastona.jar)
         .
         .
         |
         |---- autoStart.gast
         |---- LICENSES_README.txt
         |---- LICENSE_ACE_EDITOR.txt
         |---- queAceTu.gast
         |---- queAceTuHTML.lsx
         |---- queAceTu_ace.gasti
         |---- queAceTu_textarea.gasti
         |
         ---- META-GASTONA
               |
               |---- help
               |     |
               |     |---- favoicon.ico
               |     |---- queAceTuGUI.PNG
               |     |---- queAceTuHelp.mktes
               |
               |---- ace
               |     |
               |     |---- favoicon.ico
               |     |---- (ace.js and whole content of ace src)

            
   NOTE: ace source is not part of the repository. Either you get it from
         https://github.com/ajaxorg/ace/tree/master/lib/ace
         or you use the one included in any queAceTu.jar existing binary.
         
        
   get gastona.jar from 
   
      https://sourceforge.net/projects/gastona/
      
   or simply get queAceTu.jar which contains gastona.jar already from
   
      https://sourceforge.net/projects/queacetu.gastona.p/

      NOTE: the ACE editor source included currently in queAceTu.jar distribution
            is based on a original copy from 2015-July

# queAceTu

Simple text search tool that open matches in multiple ACE editors

queAceTu is actually a gastona application so in this repository
we only keep the scripts (src), help and some other readme and 
license files.
   
For building queAceTu.jar see README_BUILDING_queAceTu.txt
   
For a copy of queAceTu.jar, it can be downloaded from

      https://sourceforge.net/projects/queacetu.gastona.p/

## Running queAceTu.jar

Copy queAceTu.jar in some folder and run it either with a double click
or from the command line typing
   
      java -jar queAceTu.jar
      
the first time the application is launched it opens also a Help site in the browser.

## Modifying the script (src)

For doing changes in the script itself (folder src) copy the wanted file or files, for instance
queAceTuHTML.lsx, queAceTu.gast etc, you may extract them also from queAceTu.jar and put them
in the same folder. Make the desired modifications and test it just running queAceTu.jar.

Now on launching queAceTu.jar the changes are taken into account because when loading scripts
or resources the files found in the directory are used instead of loading the equivalent 
files from the jar. 

To have a single jar containing the changes just pack the files into the existing jar. For that
you can use a tool like 7z or similar.

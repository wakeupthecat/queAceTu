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

For doing changes in the script itself (folder src) copy the changed file, for instance
queAceTuHTML.lsx or queAceTu.gast or both etc, or extract them from queAceTu.jar file
in the same folder.

When launching now queAceTu.jar the changes will be take into account. This 
is because the copies found in the directory are used instead of loading the equivalent 
files from the jar. 

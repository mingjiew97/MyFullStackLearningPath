Welcome to the Blunderful web application!

This is a small Java Servlet application that is riddled with coding mistakes
and problems, i.e. it's full of blunders; and, trust me, there are some pretty
big problems lurking in there.

Your mission, should you choose to accept it, is to find as many things wrong 
with this code as you can. Be merciless! No nit is too small to pick! If you
wouldn't write code this way, please speak up and explain why.

Treat the code as if it is currently deployed in a production environment and 
you alone will be responsible for maintaining it. With this in mind, don't 
constrain yourself to just "bugs"; design flaws and poor programming practices 
are fair game also.

You can safely ignore the .jsp files; while they have their own issues,
almost all of the problems are located in the one .java file, so you'll want to 
focus your attention there. The .jsp files are mostly there to support the main 
servlet and allow it to be run.

While a general list of known issues does exist, there really is no exact right
or wrong number of flaws. This is not a test with defined pass/fail conditions,
but rather an exercise to gauge level of experience.

You are free to run the code on your machine. Don't expose it to the Internet 
unless you want to invite hackers to mess with your machine. 

It is considered an "open book" test. Feel free to use whatever non-human
resources you may have, including books, the Internet, etc. Asking other people
is not allowed.

You may run this code through any static code analysis tool that you would
typically expect to use in your job. However, I would suggest that you don't 
bother; the code has already been run through two of the most popular tools
and only the most trivial of issues can be found this way.

There is no time limit. You may take as much time as you feel is necessary.

Good Luck and Happy Bug Hunting!


-- Running the App --
If you would like to deploy the app to a app server, you will need to create a 
DataSource in JNDI at the path: java:comp/env/jdbc/BlunderfulDB 

Here is a link to how to setup a JNDI resource in Tomcat:
http://tomcat.apache.org/tomcat-5.5-doc/jndi-resources-howto.html

The underlying database needs to have a single table, called 'users'. You can find
SQL scripts in /sql that can create the table in various databases. You may have
to adapt a script for whatever database you have available to you.


# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.
When I go to Techtonics website my browser initiates a request to the server that the techtonic url is hosted at. The server will search for the appropriate documents, and after finding them, will send back to my computer where my browser will attempt to display the documents.
## From start to finish, how does data reach you to be rendered in the browser?
When a user types in a URL and presses enter, the URL gets translated to the IP address of the host server, followed by instructions to retrieve the correct files. The users computer will then send a request to receive the data from the host server. The host server will receive the request and, if valid, will process through it's database to find the correct files that will then be sent back to the Users computer to be rendered by the browser.
## What code is rendered in the browser?
Browsers may typically render HTML along with CSS, JavaScript and ES6.
## What is the server-side code’s main function?
The server-side code's purpose is to manage the requests of information that come to the server, searches it's databases for said information and then properly distributes that information to the correct requesting client. It does this using server-side applications such as ASP.NET or VB.NET
## What is the client-side code’s main function?
The client-side codes main function is to manipulate how each user sees the data that comes from the server. The difference between client-side and server-side code is you typically won't see regular JavaScript on the server-side but may see a JS.node. Client side code is faster to be ran on the clients computer as well.
## What is runtime?
From what I understand runtime is the time in which a program is running. However when I think of a runtime error I think of something like a divide by 0 case where the very basic functions the language is built on has been misused. I found this definition of what happens when a program enters runtime phase. "When a program is in the runtime phase, the application is loaded into RAM. This includes the executable file and any libraries, frameworks, or other files referenced by the program. When the program is quit, the runtime period ends and the memory used by the program is made available for use by other programs."
https://techterms.com/definition/runtime <-- link to the article.
## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?
Only 1 instance per page hit should be created within the client-side. However with certain assets it can differ. Some static information may be downloaded from the sites server to be quickly used later.
## How many instances of the server-side code are available at any given time?
I believe this answer depends on the capabilities of each server. However I'm positive there are ways to limit the amount of traffic incoming to each server. This can be implemented with a queue and works well in certain cases. A quick example of queue implementation would be ticket sales.
## How many instances of the databases connected to the server application are created?
I think this question is again dependent on what application the database is using, what the database is being used for and why an instance needs to be created. From what I understand you can have multiple instances to a single database but not create an instance of multiple databases.

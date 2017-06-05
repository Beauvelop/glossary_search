angular.module("eggApp1")
  .factory("wordFacservice", function() {
      var WordData = {};
WordData.vocab = [{
  "word": "anti-pattern",
  "meaning": "If we consider that a pattern represents a best practice, an anti-pattern represents a lesson that has been learned. What is wrong, why and how do we fix it. To summarize, an anti-pattern is a bad design that is worthy of documenting",
  "example": "inASentence",
  "tag": ["web", "CS"]
}, {
  "word": "bitwise comparison",
  "meaning": "Simple comparison of values.",
  "example": "In JavaScript, you can use a double bitwise negation (~~n) as a replacement for Math.floor(n) (if n is a positive number) or parseInt(n, 10) (even if n is negative).",
  "tag": ["Web", "CS"]
}, {
  "word": "albumen",
  "meaning": "Egg white which surrounds the yolk.",
  "example": "Whether it’s Crockford’s protective albumen or the dry and narrow minded confines of computer science classes, doctrine and dogma are the enemies of good JavaScript. The joy of JavaScript is rooted in its lack of rigidity and the infinite possibilities that this allows for. Natural languages hold the same promise.",
  "tag": ["gre", "web", "CS"]
}, {
  "word": "isomorphic code",
  "meaning": "definition",
  "example": "inASentence",
  "tag": ["CS"]
}, {
  "word": "Dirty Checking",
  "meaning": "Dirty Checking",
  "example": "The process of checking every watch to detect the changes, is called dirty checking. There could be two scenarios. First –Get a watch from list, Check whether item has been changed, If there is no change in item then No Action taken. Move to next item in watch list. Second– Get a watch from list,Check whether item has been changed,If there is Change in an item,DOM needs to be updated,return to digest loop.--In second case,loop continues till it finds no changes in the entire loop.And once it completes DOM gets updated if required.",
"tag": ["Angular"]
}, {
  "word": "Digest Cycle",
  "meaning": "This cycle can be considered as a loop, during which Angular checks if there are any changes to all the variables watched by all the $scopes. So if you have $scope.myVar defined in your controller and this variable was marked for being watched, then you are explicitly telling Angular to monitor the changes on myVar in each iteration of the loop. NOTE: The digest cycle, on average, can fire over 50 times per second!",
  "example": "The process of checking every watch to detect the changes, is called dirty-checking. There could be two scenarios. First –Get a watch from list, Check whether item has been changed, If there is no change in item then No Action taken. Move to next item in watch list. Second– Get a watch from list, Check whether item has been changedIf there is Change in an item,DOM needs to be updated,return to digest loop.* * In second case,loop continues till it finds no changes in the entire loop.And once it completes DOM gets updated if required.",
"tag": ["Web", "CS", "Angular"]
}, {
  "word": "The Hollywood Principle",
  "meaning": "'Don't call me. I'll call you'...--Also 'Inversion of Control': The Dependency Injection pattern uses a builder object to initialize objects and provide the required dependencies to the object.",
  "example": "inASentence",
  "tag": [ "CS", "Web"]
}, {
  "word": "Dependency Injection",
  "meaning": "Each piece of code in a heirarchy specifies it's dependencies. In a Dependency Injection system, those dependencies are pre-resolved and passes (or injects) those dependencies into the heirarchy as needed. Code components register themselves and their needed dependencies",
  "example": "inASentence",
  "tag": [ "CS", "Web"]
}, {
  "word": "Shallow watch",
  "meaning": "$watchCollection will only watch the 'first level' of an array or object,",
  "example": "inASentence",
  "tag": ["Web", "CS"]
}, {
  "word": "Duct-Typing",
  "meaning": "You can add anything onto any array at any time: this.toggleFavorite = function(index) { data[index].myFav = !data[index].myFav; }. First time user arrives at it if it doesn't exist on the array (or on any object), it's value is undefined. the '=' represents CHANGE(!). So if it doesn't exist, '=' will change it into existence! If it DOES exist, it will change.",
  "example": "inASentence",
  "tag": ["CS"]
}, {
  "word": "Singleton",
  "meaning": "One copy only ever exists.",
  "example": "An Angular service is an example of a Singleton.",
  "tag": ["CS"]
}, {
  "word": "smarm",
  "meaning": "ingratiating behavior.",
  "example": "John's smarm is what turns me off.",
  "tag": ["GRE"]
}, {
  "word": "Selection Bias",
  "meaning": "Selection bias is the selection of individuals, groups or data for analysis in such a way that proper randomization is not achieved, thereby ensuring that the sample obtained is not representative of the population intended to be analyzed. It is sometimes referred to as the selection effect.",
  "example": "The selection bias inherent in the data dump from Wikileaks skews perceptions.",
  "tag": ["gre"]
}, {
  "word": "Declarative HTML",
  "meaning": "HTML 5 is behavioral. Each link has an href that says what happens when you click it. Each form has an action that says what happens when you submit it. Select dropdowns open when you click them. Radio buttons and checkboxes toggle when you select them.",
  "example": "ng-controllers are Angular's way of exploiting the features of the behavioral features of HTML 5.",
  "tag": ["CS", "Web"]
}, {
  "word": "2-way Data Binding",
  "meaning": "definition",
  "example": "in Angular. ng-click directives bind to {{tab}}. Upon click, tab's value gets updated in the page. So... if the UI is updated, so is the variable in the js. If the var in the js is updated, so is the UI",
  "tag": ["Web", "CS"]
}, {
  "word": "V8",
  "meaning": "V8 is a JavaScript engine build in the google development center in Germany. It is open source and written in C++. It is used for both client side (Google Chrome) and server side (node.js) JavaScript applications",
  "example": "The part that reads the html css and js for chrome. For FFox its called spider-monkey. V8 parses out JavaScript and runs it.",
  "tag": ["Web", "CS"]
}, {
  "word": "header",
  "meaning": "The meta-information that explains how to parse the messages sent recieved",
  "example": "inASentence",
  "tag": ["Web", "CS"]
}, {
  "word": "regression analysis",
  "meaning": "In statistical modeling, regression analysis is a statistical process for estimating the relationships among variables.",
  "example": "A line of best fit in a scatter-plot may describe/predict a relationship between two variables (ie education and salary). The 'residual term' is a variable unaccounted for in the regression model (i.e. gender, height, race, etc.)",
  "tag": ["Web", "CS",  "gre"]
}, {
  "word": "Server",
  "meaning": "a computer.",
  "example": "The universal language http is the protocol used for servers and computers to talk to each other.",
  "tag": ["tag", "CS"]
}, {
  "word": "NFS",
  "meaning": "The Network File System (NFS) is a client/server application that lets a computer user view and optionally store and update files on a remote computer as though they were on the user's own computer. The NFS protocol is one of several distributed file system standards for network-attached storage (NAS).",
  "example": "inASentence",
  "tag": ["tag", "CS"]
}, {
  "word": "buffer",
  "meaning": "The buffer cache is used to cache all filesystem blocks, both disk and network based. Thus, NFS encodes NFS handle and file offset information into the device and block numbers it caches it's blocks under while real disk devices use their actual device and block numbers for caching blocks.",
  "example": "inASentence",
  "tag": ["tag", "CS"]
}, {
  "word": "CSRF",
  "meaning": "Cross-Site Request Forgery (CSRF) is a type of attack that occurs when a malicious web site, email, blog, instant message, or program causes a user's web browser to perform an unwanted action on a trusted site for which the user is currently authenticated.",
  "example": "inASentence",
  "tag": ["tag", "CS"]
}, {
  "word": "statusCode 500",
  "meaning": "Internal Server Error",
  "example": "inASentence",
  "tag": ["web", "CS"]
}, {
  "word": "post request",
  "meaning": "one of many request methods supported by the HTTP protocol used by the World Wide Web. By design, the POST request method requests that a web server accepts and stores the data enclosed in the body of the request message. It is often used when uploading a file or submitting a completed web form.",
  "example": "Nodes connect module uses bodyParser() to prepare data. This is useful when using post requests",
  "tag": ["web", "CS"]
}, {
  "word": "promise-chaining",
  "meaning": "I don't have your data yet, but I promise I will have it when call your data back on the function",
  "example": "inASentence",
  "tag": ["tag", "CS"]
}, {
  "word": "MVC",
  "meaning": "Model View Controller",
  "example": "Model: REPRESENTATION & ORGANIZATION OF DATA...business logic & processing • View: Code that deals with user interface (UI) It decides what gets rendered and what it looks like--The UI shouldn't know how to change data • Controller: Between Model & View, it is the intermediary dealing with navigation & input",
  "tag": ["tag", "CS"]
}, {
  "word": "Single-threaded Application",
  "meaning": "definition",
  "example": ".js is a Single-threaded Application.",
  "tag": ["tag", "CS"]
}, {
  "word": "CRUD",
  "meaning": "create, read, update, delete.",
  "example": "I really need to make a simple CRUD app",
  "tag": ["web", "CS"]
}, {
  "word": "asynchronous",
  "meaning": "It simply means 'more than one at a time'. Start a fn. Tell it to execute...then move on to run and execute other javascript. I'll call that fn again when it's done doing its thing. Synchronous is to execute and wait--execution happens line-by-line...until it's performed all its stuff and then moves on",
  "example": " Text",
  "tag": ["CS", "web"]
}, {
  "word": "web request",
  "meaning": "Any communication over the net to an api or to query data over the net",
  "example": "I need the proper syntax for this web request to get jquery",
  "tag": ["cs", "web"]
}, {
  "word": "time-to-first-byte",
  "meaning": "(TTFB) is a measurement used as an indication of the responsiveness of a webserver or other network resource. TTFB measures the duration from the user or client making an HTTP request to the first byte of the page being received by the client's browser.",
  "example": "I need the proper syntax for this web request to get jquery",
  "tag": ["cs", "web"]
}, {
  "word": "REST",
  "meaning": "A protocol. A set of rules. 'if this happens, we do this'--a set of guidelines for making web requests. GET, PUT, POST, DELETE are the CRUD of REST. PUT updates data while POST adds new data--This data is shared between multiple languages.",
  "example": "GET, PUT, POST, DELETE are the four main rules (or methods) for REST",
  "tag": ["cs", "web"]
}, {
  "word": "concurrency",
  "meaning": "Concurrency patterns are those types of design patterns that deal with the multi-threaded programming paradigm",
  "example": "Building an app, one day you will introduce some complex concurrency requests to facebook, etc.",
  "tag": ["web", "CS"]
}, {
  "word": "expiate",
  "meaning": "atone for (guilt or sin)",
  "example": "their sins must be expiated by sacrifice",
  "tag": ["gre"]
}, {
  "word": "poleax",
  "meaning": "hit, kill, or knock down with or as if with a poleax, to cause great shock to (someone).",
  "example": "I was poleaxed by this revelation",
  "tag": ["gre"]
}, {
  "word": "bespoke",
  "meaning": "made to order, customized",
  "example": "this is a bespoke template for users of grunt",
  "tag": ["gre", "web", "CS"]
}, {
  "word": "maieutic",
  "meaning": "of or denoting the Socratic mode of inquiry, which aims to bring a person's latent ideas into clear consciousness.",
  "example": "He teaches in a maieutic method whereby the student eventually wakes up to hisown understanding",
  "tag": ["gre"]
}, {
  "word": "armistice",
  "meaning": "an agreement made by opposing sides in a war to stop fighting for a certain time; a truce.",
  "example": "armistice was declared on June 25th 1945",
  "tag": ["gre"]
}, {
  "word": "bawdy",
  "meaning": "dealing with sexual matters in a comical way; humorously indecent.",
  "example": "His bawdy humour is not acceptable in an office setting",
  "tag": ["gre"]
}, {
  "word": "bucolic",
  "meaning": "of or relating to the pleasant aspects of the countryside and country life.",
  "example": "He has shown a preference for bucolic scenery",
  "tag": ["gre"]
}, {
  "word": "bromide",
  "meaning": "a platitude or trite saying.",
  "example": "He coughed behind the podium as if to choke on hisown bromides",
  "tag": ["gre"]
}, {
  "word": "confute",
  "meaning": "to prove (a person) to be wrong by argument or proof:",
  "example": "This evidence confutes the claim that the economy is improving",
  "tag": ["gre"]
}, {
  "word": "evanescence",
  "meaning": "to disappear gradually; vanish; fade away.",
  "example": "The evanescence of the clouds adds mystery to the transition from overcast to clear",
  "tag": ["gre"]
}, {
  "word": "arbitrage",
  "meaning": "The purchase of securities on one market for immediate resale on another market in order to profit from a price discrepancy.",
  "example": "I'm buying it only to sell it on the principles of arbitrage.",
  "tag": ["gre"]
}, {
  "word": "effervescence",
  "meaning": "to show enthusiasm, excitement, liveliness, etc.",
  "example": "Her lack of effervescence indicates that she wasn't entirely pleased with the result",
  "tag": ["gre"]
}, {
  "word": "depredation",
  "meaning": "the act of preying upon or plundering; robbery; ravage.",
  "example": "The depredation of the weak and defenseless is the wont of people in power.",
  "tag": ["gre"]
}, {
  "word": "insidious",
  "meaning": "intended to entrap or beguile; stealthily treacherous or deceitful; operating or proceeding in an inconspicuous or seemingly harmless way but actually with grave effect",
  "example": "The campaign to undermine the legitimacy of the polls was so insidious as to render their results moot while it's true purpose remains undetected",
  "tag": ["gre"]
}, {
  "word": "traduce",
  "meaning": "to speak maliciously and falsely of; slander; defame:",
  "example": "You accuse me of traducing you, when I have done nothing other than list the facts!",
  "tag": ["gre"]
}, {
  "word": "welter",
  "meaning": "n. a confused mass; a jumble or muddle; v. to roll, toss, writhe about; to be entangled or extensively involved in",
  "example": "Among the welter of seemingly useless data, these three facts are indicative of a significant and remarkable trend",
  "tag": ["gre"]
}, {
  "word": "proviso",
  "meaning": "stipulation or condition",
  "example": "He agreed to the contract with the proviso that circumstances may prevent him from showing up at the office on time every day",
  "tag": ["gre"]
}, {
  "word": "anodyne",
  "meaning": "not likely to provoke dissent or offense; inoffensive, often deliberately so.",
  "example": "She delivered an anodyne speech full of empty bromides that left us cold.",
  "tag": ["gre"]
}, {
  "word": "succor",
  "meaning": "help; relief; aid; assistance.",
  "example": "The RedCross provides succor to the masses of displaced people around the world.",
  "tag": ["tag"]
}, {
  "word": "canard",
  "meaning": "a false or baseless, usually derogatory story, report, or rumor.",
  "example": "Let's just shoot that canard before it poops all over a truer understanding of the case!",
  "tag": ["gre"]
}, {
  "word": "syncretism",
  "meaning": "the combination of different forms of belief or practice",
  "example": "He has a rather syncretic approach to learning in that he believes in both, a deep focus on one subject, and a broad dabbling, survey of the material generally.",
  "tag": ["gre"]
}, {
  "word": "menagerie",
  "meaning": "a collection of animals kept especially to be shown to the public",
  "example": "He kept his images on the page as a kind of managerie to display to all who visited the site.",
  "tag": ["gre"]
}, {
  "word": "toolchain",
  "meaning": " the set of programming tools that is used to perform a complex software development task or to create a software product. The toolchain may consist of a compiler and linker (which transform the source code into an executable program), libraries, and a debugger. ",
  "example": "There are some 7 or 8 steps in the DevOps toolchain in the software development lifecycle. https://en.wikipedia.org/wiki/DevOps_toolchain.",
  "tag": ["web", "CS"]
}, {
  "word": "elegiac",
  "meaning": "mourning or expressing sorrow for that which is irrecoverably past",
  "example": "I have no time for your elegiac whining of your lost innocence",
  "tag": ["gre"]
}, {
  "word": "arcana",
  "meaning": "deep secret, mystery. The specialized details unknown by others.",
  "example": "Coding appears to us all as a welter of arcana--opaque to the uninitiated, like the spells of the magi.",
  "tag": ["gre", "web"]
}, {
  "word": "derecho",
  "meaning": "widespread, long-lived, straight-line wind storm that is associated with a land-based, fast-moving group of severe thunderstorms.",
  "example": "Confidence and belief his own cause served as a bulwark against the derecho of doubters and those who sought to malign him.",
  "tag": ["gre"]
}, {
  "word": "perfidious",
  "meaning": "deceitful and untrustworthy, the deliberate breaking of faith; betrayal of trust; treachery",
  "example": "The lawyers' deliberate deceit of their clients and the subsequent profit from their demise belies their perfidious intent",
  "tag": ["gre"]
}, {
  "word": "belie",
  "meaning": "to show (something) to be false or wrong",
  "example": "The suspect's body language spoke louder than than any of his words to belie the fact that he was, indeed, lying",
  "tag": ["gre"]
}, {
  "word": "Bounded Rationality",
  "meaning": "Bounded rationality is the idea that when individuals make decisions, their rationality is limited by the available information, the tractability of the decision problem, the cognitive limitations of their minds, and the time available to make the decision.",
  "example": "As a boundedly rational user of the this software, often I don't use it in the most efficient way.",
  "tag": ["gre", "web", "CS"]
}, {
  "word": "transpile",
  "meaning": "A source-to-source compiler, transcompiler or transpiler is a type of compiler that takes the source code of a program written in one programming language as its input and produces the equivalent source code in another programming language.",
  "example": "inASentence",
  "tag": ["CS", "web"]
}, {
  "word": "function literal",
  "meaning": "A function with no name",
  "example": "",
  "tag": ["web", "CS"]
}, {
  "word": "Serialization",
  "meaning": "In the context of data storage, serialization is the process of translating data structures or object state into a format that can be stored or transmitted across a network connection and reconstructed later in the same or another environment",
  "example": "JSON is a js compatible serialization format",
  "tag": ["Web", "CS"]
}, {
  "word": "Variadic Function",
  "meaning": " In computer science, a function accepting a variable number of arguments is called variadic.  variadic function takes varying number of arguments, not a set number of arguments as most functions do.",
  "example": "",
  "tag": [ ""]
}, {
  "word": "Dynamically Typed",
  "meaning": "If a language allows for a single variable to store values of varying types then its variables are said to be 'dynamically typed.'",
  "example": "var myDyna = true; myDyna = 23; myDyna = 'bananas'; This is illustrative of DT languages.",
  "tag": ["Web", "CS"]
}, {
  "word": "Conway's Law",
  "meaning": "Sofware built reflects the team that built it--or the communication systems generally used by the team that built it.",
  "example": "",
  "tag": ["CS", "Web"]
}, {
  "word": "Technical Debt",
  "meaning": "Technical debt or code debt is 'a concept in programming that reflects the extra development work that arises when code that is easy to implement in the short run is used instead of applying the best overall solution.",
  "example": "Technical debt can be compared to monetary debt. If technical debt is not repaid, it can accumulate 'interest', making it harder to implement changes later on.",
  "tag": [ "Web", "CS"]
}, {
  "word": "Deprecated",
  "meaning": "Declared non-standard and no longer used.",
  "example": "I pray for the day that activeX is deprecated.",
  "tag": ["Web", "CS"]
}, {
  "word": "Type Coersion",
  "meaning": "send a num or a string into the params of a function & js will do the work. You don't have to declare int or double as in Java.",
  "example": "1 == '1';//true",
  "tag": ["CS", "Web"]
}, {
  "word": "Code Smell",
  "meaning": "Code smell, also known as bad smell, in computer programming code, refers to any symptom in the source code of a program that possibly indicates a deeper problem. According to Martin Fowler, a code smell is a surface indication that usually corresponds to a deeper problem in the system. Another way to look at smells is with respect to principles and quality 'smells are certain structures in the code that indicate violation of fundamental design principles and negatively impact design quality'",
  "example": "Code smells are usually not bugs—they are not technically incorrect and do not currently prevent the program from functioning. Instead, they indicate weaknesses in design that may be slowing down development or increasing the risk of bugs or failures in the future. Bad code smells can be an indicator of factors that contribute to technical debt.",
"tag": ["Web", "CS"]
}, {
  "word": "FUD",
  "meaning": "Fear Doubt Uncertainty--Disinformation. Originating in marketing campaigns to intentionally to gain some kind of advantage over the competition.",
  "example": "Generally used to describe disinformation or misinformation in the computer hardware industry, and has since been used more broadly.",
  "tag": ["Web", "CS"]
}, {
  "word": "Heuristic analysis",
  "meaning": "Looking at the design & interactions of an app and anaylizing how well those functions are working. Make assumptions on what someone was thinking when they decided to make a feature work the way it does in an app, ",
  "example": "Let's say you have a carousel on a page with dots beneath all the slides. The user will have to keep count or get lost. A Heuristic Improvement might be to replace those dots with numbers in order to minimize the cognitive load on the user. From those observations, we write the implications. '(ie) User gets lost! so here is how we might improve'",
  "tag": ["CS", "UX"]
}, {
  "word": "roue",
  "meaning": "a debauched man, especially an elderly one.",
  "example": "As a roue he spent most of his money at the casinos with a prostitute on his arm and a drink in his hand.",
  "tag": ["GRE", ""]
}, {
  "word": "Temporal Dependency",
  "meaning": "When one thing depends upon another thing finishing before this thing can go",
  "example": "The only way to express this is by nesting callbacks.",
  "tag": ["Web", "CS"]
}, {
  "word": "Race Condition",
  "meaning": "A race condition is an undesirable situation that occurs when a device or system attempts to perform two or more operations at the same time, but because of the nature of the device or system, the operations must be done in the proper sequence to be done correctly.",
  "example": "",
  "tag": [ ""]
}, {
  "word": "Future Value",
  "meaning": "A value that--at some time--will become 'manifest' or fulfilled...In the meantime, as a promise, is something that we can 'operate on' and plan for prior to receiving this value.",
  "example": "",
  "tag": ["CS", "Web"]
}, {
  "word": "Action at a distance",
  "meaning": "[rethinking js asynch 02 promises api] ",
  "example": "",
  "tag": ["CS", "Web"]
}, {
  "word": "Event Delegation",
  "meaning": "Jquery and JS?",
  "example": "",
  "tag": [ ""]
}, {
  "word": "Brio",
  "meaning": "vigor or vivacity of style or performance.",
  "example": "",
  "tag": ["GRE", ""]
}, {
  "word": "Imbroglio",
  "meaning": "an extremely confused, complicated, or embarrassing situation.",
  "example": "Example",
  "tag": ["tag", "tag"]
}, {
  "word": "tokenize the DOM",
  "meaning": "TBD",
  "example": "Example",
  "tag": ["web", "CS"]
}, {
  "word": "reflow",
  "meaning": "recalculation of the DOM and the geometry of the page.",
  "example": "After an element is 'display: none'-ed there is no reflow. But adding a node, removing, animating, scrolling, tweaking style props, font, etc.",
  "tag": ["tag", "tag"]
}, {
  "word": "shim",
  "meaning": "A sim (or shim layer) a shim is a small library that transparently intercepts API calls and changes the arguments passed, handles the operation itself, or redirects the operation elsewhere.[1][2] Shims can be used to support an old API in a newer environment, or a new API in an older environment. Shims can also be used for running programs on different software platforms than they were developed for.     Shims for older APIs typically come about when the behavior of an API changes, thereby causing compatibility issues for older applications which still rely on the older functionality; in such cases, the older API can still be supported by a thin compatibility layer on top of the newer code. Shims for newer APIs are defined as: 'a shim is a library that brings a new API to an older environment, using only the means of that environment.'",
  "example": "Paul Irish example of feature detecting browser requestAnimationFrame() or reverting to setTimeOut etc:  https://youtu.be/q_O9_C2ZjoA?t=1263",
"tag": ["web", "CS"]
}, {
  "word": "sheepish",
  "meaning": "(of a person or expression) showing embarrassment from shame or a lack of self-confidence.",
  "example": "He gave me a sheepish grin.",
  "tag": ["GRE"]
}, {
  "word": "obloquy",
  "meaning": "strong public criticism or verbal abuse.",
  "example": "He endured years of contempt and obloquy",
  "tag": ["GRE"]
}, {
  "word": "sang froid",
  "meaning": "composure or coolness, sometimes excessive, as shown in danger or under trying circumstances.",
  "example": "He demonstrated a surprising amount of sang froid despite the disastrous economic circumstances is family found itself.",
  "tag": ["GRE"]
}, {
  "word": "Poe's Law",
  "meaning": "without a clear indicator of the author's intent, parodies of extreme views will be mistaken by some readers or viewers as sincere expressions of the parodied views",
  "example": "I told her she was 'pretty smart for a girl' and she took offense.",
  "tag": ["web", "GRE"]
}, {
  "word": "Godwin's Law",
  "meaning": "As adiscussion grows longer, the probability of a comparison involving Nazis or Hitler approaches 1. Related to 'reductio ad Hitlerum' stating that 'if the Nazis liked X and you like X, then you are a Nazi.' (vegetarianism/atheism/narrow mustaches)",
  "example": "Example",
  "tag": ["tag", "tag"]
}, {
  "word": "evergreen browser ",
  "meaning": "A browser that is constantly being updated under the hood.",
  "example": "Chrome is an evergreen browser.",
  "tag": ["CS"]
}, {
  "word": "Function Currying",
  "meaning": "-----------",
  "example": "https://www.sitepoint.com/currying-in-functional-javascript/",
  "tag": ["tag", "tag"]
}, {
  "word": "BEM",
  "meaning": "The Block, Element, Modifier methodology (commonly referred to as BEM) is a popular naming convention for classes in HTML and CSS.",
  "example": "/* Block component */.btn {}/* Element that depends upon the block */ .btn__price {}/* Modifier that changes the style of the block */.btn--orange {} .btn--big {}",
  "tag": ["CS", "WEB"]
}, {
  "word": "recumbent",
  "meaning": ".",
  "example": "",
  "tag": ["CS", "WEB"]
}, {
  "word": "Sweat equity",
  "meaning": " a party's contribution to a project in the form of effort and toil, as opposed to financial equity such as paying others to perform the task. Sweat equity has an application in business for example where the owners put in effort and toil to build the business, in real estate where owners can do D.I.Y. improvements and increase the value of the real estate and in other areas such as an auto owner putting in their own effort and toil to increase the value of the vehicle",
  "example": "",
  "tag": ["CS", "WEB"]
}, {
  "word": "penitent",
  "meaning": "feeling or showing sorrow and regret for having done wrong; repentant.",
  "example": "",
  "tag": ["CS", "WEB"]
}, {
  "word": "rictus",
  "meaning": "a fixed grimace or grin.",
  "example": "",
  "tag": ["CS", "WEB"]
}, {
  "word": "Single responsibility principle",
  "meaning": ".",
  "example": "https://youtu.be/Gt0M_OHKhQE?t=477",
  "tag": ["CS", "WEB"]
}, {
  "word": "asymptotic",
  "meaning": "An ever decreasing amount described by an ever flattening curve. A line that approaches a curve but never touches.",
  "example": "",
  "tag": [ ""]
}, {
  "word": "Brackish",
  "meaning": "Unpleasant, distasteful",
  "example": "His brackish manner doesn't help him in the polls.",
  "tag": [ "GRE"]
}, {
  "word": "Variadic Function",
  "meaning": "",
  "example": "https://en.wikipedia.org/wiki/Variadic_function",
  "tag": [ ""]
}, {
  "word": "Hallow",
  "meaning": "To honor as holy, to make holy",
  "example": "hallowed be thy name",
  "tag": [ "GRE"]
}, {
  "word": "Kaizen",
  "meaning": "Kaizen is used to focus on continuous small improvements. In this model, operators mostly look for small ideas which, if possible, can be implemented on the same day. Both worker and supervisor are invensted in the improvement in the product.",
  "example": "",
  "tag": [ "CS"]
}, {
  "word": "insouciance",
  "meaning": "Showing a casual lack of concern.",
  "example": "",
  "tag": [ "GRE"]
}, {
  "word": "Intellectualize",
  "meaning": "give an intellectual character to. --Psych: to remove yourself emotionally from an unconsciously painful issue by discussing and reasoning in the guise of addressing the issue.",
  "example": "",
  "tag": ["GRE", ""]
}, {
  "word": "Eager Evaluation",
  "meaning": "In computer programming, eager evaluation or greedy evaluation is the evaluation strategy used by most traditional programming languages. In eager evaluation, an expression is evaluated as soon as it is bound to a variable. The alternative to eager evaluation is lazy evaluation, where expressions are only evaluated when evaluating a dependent expression. Imperative programming languages, where the order of execution is implicitly defined by the structure of the source code, almost always use eager evaluation. One advantage of eager evaluation is that it eliminates the need to track and schedule the evaluation of expressions. It also allows the programmer to dictate the order of execution, making it easier to determine when sub-expressions (including functions) within the expression will be evaluated, as these sub-expressions may have side-effects that will affect the evaluation of other expressions.",
  "example": "",
"tag": [ ""]
}, {
  "word": "Persistence Layer",
  "meaning": "Data that can survive a shutdown (of computer, server, etc).",
  "example": "",
  "tag": [ "CS"]
}, {
  "word": "functional lexical scope",
  "meaning": "",
  "example": "",
  "tag": [ ""]
}, {
  "word": "Fabulate",
  "meaning": "relate (an event or events) as a fable or story. To relate untrue or invented stories.",
  "example": "",
  "tag": [ "GRE"]
}, {
  "word": "publish subscribe pattern (or 'pub-sub')",
  "meaning": "In software architecture, publish–subscribe is a messaging pattern where senders of messages, called publishers, do not program the messages to be sent directly to specific receivers, called subscribers, but instead characterize published messages into classes without knowledge of which subscribers, if any, there may be. Similarly, subscribers express interest in one or more classes and only receive messages that are of interest, without knowledge of which publishers, if any, there are.",
  "example": "https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern",
"tag": [ "CS"]
}, {
  "word": "Declarative Programming",
  "meaning": "It's when the solution to a coding problem is described in terms of the end result--not by the steps required to get there. Instead of coding what 'should' happen...DP lets us describe what we want. It's useful becasue it hides tasks that don't need to be re-written all the time...while surfacing logic that actually matters to an application. It's an approach to writing more concise, DRY code.",
  "example": "http://paislee.io/a-conceptual-introduction-to-angularjs/",
  "tag": [ "CS"]
}, {
  "word": "Tail Recursion or 'Tail Call'",
  "meaning": "https://en.wikipedia.org/wiki/Tail_call",
  "example": "",
  "tag": [ ""]
}, {
  "word": "Diaphanous",
  "meaning": "(especially of fabric) light, delicate, and translucent.",
  "example": "",
  "tag": [ ""]
}, {
  "word": "Monkey Testing",
  "meaning": "In software testing, monkey testing is a technique where the user tests the application or system by providing random inputs and checking the behavior, or seeing whether the application or system will crash. Monkey testing is usually implemented as random, automated unit tests.",
  "example": "gremlins.js",
  "tag": [ "CS"]
}, {
  "word": "Infinite monkey theorem",
  "meaning": "Given an infinite length of time, a chimpanzee punching at random on a typewriter would almost surely type out all of Shakespeare's plays.",
  "example": "",
  "tag": [ "CS"]
}, {
  "word": "Syntactic Sugar",
  "meaning": "In computer science, syntactic sugar is syntax within a programming language that is designed to make things easier to read or to express. It makes the language 'sweeter' for human use: things can be expressed more clearly, more concisely, or in an alternative style that some may prefer.",
  "example": "",
  "tag": [ "CS"]
}, {
  "word": "dispositive",
  "meaning": "relating to or bringing about the settlement of an issue or the disposition of property.",
  "example": "This evidence is dispositive. There should be no question as to the existence of UFOs.",
  "tag": ["GRE", ""]
}, {
  "word": "TTL Time-to-live",
  "meaning": "Time to live (TTL) or hop limit is a mechanism that limits the lifespan or lifetime of data in a computer or network. TTL may be implemented as a counter or timestamp attached to or embedded in the data. Once the prescribed event count or timespan has elapsed, data is discarded. In computer networking, TTL prevents a data packet from circulating indefinitely. In computing applications, TTL is used to improve performance of caching or to improve privacy.",
  "example": "",
  "tag": [ ""]
}, {
  "word": "attenuate",
  "meaning": "reduce the force, effect, or value of",
  "example": "",
  "tag": [ ""]
}, {
  "word": "software multitenancy",
  "meaning": "a software architecture in which a single instance of software runs on a server and serves multiple tenants. A tenant is a group of users who share a common access with specific privileges to the software instance.",
  "example": "",
  "tag": ["CS", ""]
}, {
  "word": "Laconic",
  "meaning": ":  using or involving the use of a minimum of words :  concise to the point of seeming rude or mysterious",
  "example": "",
  "tag": [ ""]
}, {
  "word": "Shambolic",
  "meaning": "chaotic, disorganized, or mismanaged.",
  "example": "",
  "tag": [ "GRE"]
}, {
  "word": "Filigree",
  "meaning": "anything very delicate or fanciful or ornamental",
  "example": "",
  "tag": [ "GRE"]
}, {
  "word": "Stochastic",
  "meaning": "randomly determined; having a random probability distribution or pattern that may be analyzed statistically but may not be predicted precisely.",
  "example": "",
  "tag": [ ""]
}, {
  "word": "Principle of least privilege",
  "meaning": "TL;DR: Make everything private & only expose that which needs to be public. In a particular abstraction layer of a computing environment, every module (such as a process, a user, or a program, depending on the subject) must be able to access only the information and resources that are necessary for its legitimate purpose.",
  "example": "Applied to employees, the principle of least privilege translates to giving people the lowest level of user rights that they can have and still do their jobs. The principle is also applied to things other than people, including programs and proceses. the principle of least privilege originated in the US Department of Defense in the 1970s. The principle was designed to limit the potential damage of any security breach, whether accidental or malicious. In a personal computing context, you can increase security by using an account without administrative rights. Operating in administrative mode can make your system vulnerable to malicious coding online that would be denied access if you were operating with lower permission levels. Some operating systems have least privilege built in has two operational modes, one with and one without admin privileges.",
"tag": [ "CS"]
}, {
  "word": "Donkey-Balls",
  "meaning": "Douglas Crockford refers to the IIFE's Fn Call as Donkey-Balls when they hang outside the enclosing parentheses. And so advocates for enclosing (function(){ ...}()); rather than allowing them to hang out.",
  "example": "!function() {...}()  or (function() {...})(); vs (function() {...})(); ",
  "tag": [ "CS"]
}, {
  "word": "TC 39 ",
  "meaning": "TC39 (technical committee 39) is the committee that evolves JavaScript. Its members are companies (among others, all major browser vendors). TC39 meets regularly, its meetings are attended by delegates that members send and by invited experts. Minutes of the meetings are available online and give you a good idea of how TC39 works.",
  "example": "",
  "tag": [ ""]
}, {
  "word": "Munge",
  "meaning": "The act of consolidating 2 or more mutually exclusive data sets or sections of computer code, circumventing the requirement to write a shit load of complex code. ",
  "example": "This code is so munged up I don't think we can use it.",
  "tag": [ "CS"]
}, {
  "word": "Law of Demeter (or principle of least knowledge)",
  "meaning": "The fundamental notion is that a given object should assume as little as possible about the structure or properties of anything else (including its subcomponents), in accordance with the principle of 'information hiding'.",
  "example": "In particular, an object should avoid invoking methods of a member object returned by another method. For many modern object oriented languages that use a dot as field identifier, the law can be stated simply as 'use only one dot'. That is, the code a.b.Method() breaks the law where a.Method() does not. As an analogy, when one wants a dog to walk, one does not command the dog's legs to walk directly; instead one commands the dog which then commands its own legs. The advantage of following the Law of Demeter is that the resulting software tends to be more maintainable and adaptable. Since objects are less dependent on the internal structure of other objects, object containers can be changed without reworking their callers.",
"tag": ["CS"]
}, {
  "word": "Principle of information Hiding",
  "meaning": "In computer science, information hiding is the principle of segregation, of the design decisions in a computer program that are most likely to change, thus protecting other parts of the program from extensive modification if the design decision is changed. ",
  "example": "The term encapsulation is often used interchangeably with information hiding. Not all agree on the distinctions between the two though; one may think of information hiding as being the principle and encapsulation being the technique. A software module hides information by encapsulating the information into a module or other construct which presents an interface.[1]",
  "tag": [ "CS"]
}, {
  "word": "Security through obscurity",
  "meaning": "the reliance on the secrecy of the design or implementation as the main method of providing security for a system or component of a system. A system or component relying on obscurity may have theoretical or actual security vulnerabilities, but its owners or designers believe that if the flaws are not known, that will be sufficient to prevent a successful attack. ",
  "example": "",
  "tag": [ "CS"]
}, {
  "word": "Isomorphic JavaScript",
  "meaning": "JavaScript applications which run both client-side and server-side.  Isomorphism describes that if you look at the same entity in two different contexts, you should get the same thing. Here the contexts are server and client. Although the term has been mostly used in mathematics until now, it's an apt term to describe a web programing pattern where the code is shared by the front-end and back-end.",
  "example": "",
  "tag": [ ""]
}, {
  "word": "firmament",
  "meaning": "the heavens or the sky--a sphere or world viewed as a collection of people.",
  "example": "He is one of the great stars in the American golfing firmament",
  "tag": [ "GRE"]
}, {
  "word": "Eidolon",
  "meaning": "Apparition.  apparition, phantom, ghost..a spirit-image of a living or dead person ",
  "example": "",
  "tag": [ ""]
}, {
  "word": "Orthography",
  "meaning": "the conventional spelling system of a language.",
  "example": "In a database...naming a table in sql with plural nouns may cause orthographic problems.",
  "tag": [ ""]
}, {
  "word": "Subterfuge",
  "meaning": "deceit used in order to achieve one's goal.",
  "example": "Example",
  "tag": ["tag", "tag"]
}, {
  "word": "API",
  "meaning": "a set of routines, protocols, and tools for building software applications. An API specifies how software components should interact.",
  "example": "Example",
  "tag": ["tag", "tag"]
}, {
  "word": "Autochthon",
  "meaning": "A native an original or indigenous inhabitant of a place; an aborigine",
  "example": "Example",
  "tag": ["tag", "tag"]
}, {
  "word": "Sunk Cost Fallacy",
  "meaning": "The Misconception: You make rational decisions based on the future value of objects, investments and experiences. The Truth: Your decisions are tainted by the emotional investments you accumulate, and the more you invest in something the harder it becomes to abandon it.",
  "example": "Example",
  "tag": ["tag", "tag"]
}, {
  "word": "effervescence",
  "meaning": "1) vivacity and enthusiasm.2)bubbles in liquid, fizz",
  "example": "Example",
  "tag": ["tag", "tag"]
}, {
  "word": "Limn v.",
  "meaning": "(transitive verb) To draw or paint on a surface The artist limned a portrait. 2 to outline in clear sharp detail :  delineate",
  "example": "The man was limned by the streetlight",
  "tag": ["tag", "GRE"]
}, {
  "word": "trundle",
  "meaning": "The motion or noise of rolling.",
  "example": "Example",
  "tag": ["tag", "tag"]
}, {
  "word": "Thrum",
  "meaning": "To speak, repeat, or recite in a monotonous tone of voice; drone.",
  "example": "Example",
  "tag": ["tag"]
}, {
  "word": "Quantum",
  "meaning": "A quantity or amount. A specified portion. Something that can be counted or measured.",
  "example": "Example",
  "tag": ["tag", "GRE"]
}, {
  "word": "Jaundiced",
  "meaning": "adjective: a jaundiced view of the world: bitter, resentful, cynical, soured, disenchanted, disillusioned, disappointed, pessimistic, skeptical, distrustful, suspicious",
  "example": "She looked with a jaundiced eye on every relationship after her divorce",
  "tag": ["tag", "GRE"]
}, {
  "word": "Gap analysis",
  "meaning": "In management literature, gap analysis involves the comparison of actual performance with potential or desired performance. If an organization does not make the best use of current resources, or forgoes investment in capital or technology, it may produce or perform below its potential. This concept is similar to an economy's being below the production possibilities frontier.",
  "example": "Example",
  "tag": ["tag"]
}, {
  "word": "Standard Deviation",
  "meaning": "Standard deviation is a number used to tell how measurements for a group are spread out from the average (mean), or expected value.",
  "example": "A low standard deviation means that most of the numbers are very close to the average. A high standard deviation means that the numbers are spread out",
  "tag": ["GRE", "CS"]
}, {
  "word": "Suborn",
  "meaning": "bribe or otherwise induce (someone) to commit an unlawful act such as perjury.",
  "example": "Example",
  "tag": ["tag"]
}, {
  "word": "urbane",
  "meaning": "suave, courteous, and refined in manner.",
  "example": "Example",
  "tag": ["tag"]
}, {
  "word": "chasten",
  "meaning": "(of a reproof or misfortune) have a restraining or moderating effect on.",
  "example": "Example",
  "tag": ["tag"]
}, {
  "word": "Parochial",
  "meaning": "having a limited or narrow outlook or scope.",
  "example": "But what was once a parochial amusement is now a national and global peril.",
  "tag": ["GRE"]
}, {
  "word": "Louche",
  "meaning": "('loosh')adjective: shifty or disreputable",
  "example": "Trump acquired a kind of louch glamour",
  "tag": ["GRE"]
}, {
  "word": "abcissa",
  "meaning": "(in a system of coordinates) the x -coordinate, the distance from a point to the vertical or y -axis measured parallel to the horizontal or x -axis.",
  "example": "In transform: translate(tx, ty, tz), values 'tx' & 'ty' are abscissae",
  "tag": ["tag"]
}, {
  "word": "Hofstadter's law",
  "meaning": "Hofstadter's Law: It always takes longer than you expect, even when you take into account Hofstadter's Law.",
  "example": "The law is a statement regarding the difficulty of accurately estimating the time it will take to complete tasks of substantial complexity.[2] It is often cited by programmers, especially in discussions of techniques to improve productivity, such as The Mythical Man-Month or extreme programming.[3] The recursive nature of the law is a reflection of the widely experienced difficulty of estimating complex tasks despite all best efforts, including knowing that the task is complex",
  "tag": [ "CS"]
}];

return WordData;

})

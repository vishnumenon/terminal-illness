terminal-illness
================

Terminal Illness is a _tiny_ Zepto.js (If you haven't used it, Zepto is a great, lightweight framework with all the good parts of JQuery) plugin that makes any div into a customizable Terminal interface. **Now also with JQuery support. Use terminal-illness-jquery.js**

Use
---

1. Make a div for your terminal. Set a width and height. If you want any text to be displayed at the top of your terminal, write it in the div.
<br />
```<div id='terminal' style="width: 400pt; height: 400pt;">[Instructions for terminal use...]</div>
```
2. In your JS, call terminalIllness([options]) on your div. Possible options are a prompt (as a string, default is '>') and a function that gets executed on all input (the default just returns the input). Options are as an object.
<br />
```$('#terminal').terminalIllness({prompt: "myprompt$ ", callback: function(input){
  return input.toUpperCase()
}})
```
<br />
_Note_: Feel free to put html with inline styles in the prompt or in the response; It will render fine.

For a full example, see *example.html* in the *example* folder. 

;(function($){
  $.fn.terminalIllness = function(options) {
      options           = options           || {}
      options.prompt    = options.prompt    || ">"
      options.callback  = options.callback  || function(command) { return command }
      
      this.css({backgroundColor: "#000000", 
                color: "#00FF1E", 
                fontFamily: "monospace",
                overflow: "auto"
                })

      terminalLoop(options, this)
  }
})( jQuery );

function terminalLoop(options, terminal) { 
      terminal.children(".line-input").removeAttr("contenteditable")
      terminal.children(".line-input").off()
      terminal.append("<br />" + options.prompt + "<span class='line-input' contenteditable='true' style='outline: none; border: none;'>&nbsp;</span>")
      currentLine = terminal.children(".line-input").last()
      currentLine.focus()
      currentLine.on('keyup', function(e) {
        if (e.keyCode == 13) {
          e.preventDefault();
          terminal.append("<br />" + options.callback(currentLine.text().trim()))
          terminalLoop(options, terminal)
        } else if (currentLine.html() == "") {
          currentLine.html("&nbsp;")
        }
      })
} 

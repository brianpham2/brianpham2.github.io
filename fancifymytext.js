function makeBigger(){
    document.getElementById("text").style.fontSize = "24pt";

}

function fancyFont(){
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textDecoration = "underline";
}

function boringFont(){
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "black";
    document.getElementById("text").style.textDecoration = "none";
    document.getElementById("text").style.textTransform = "none";
}

function makeMoo() {
    var textarea = document.getElementById("text");
    var sentences = textarea.value.split(".");
    var sentences2 = textarea.value.split("?");
    var sentences3 = textarea.value.split("!");

    for (var i = 0; i < sentences.length; i++) {
      var words = sentences[i].trim().split(" ");
      if (words.length > 0) {
        words[words.length - 1] += "-Moo";
      }
      sentences[i] = words.join(" ");
    }
    textarea.value = sentences.join(". ");

    for (var i = 0; i < sentences2.length; i++) {
        var words = sentences2[i].trim().split(" ");
        if (words.length > 0) {
          words[words.length - 1] += "-Moo";
        }
        sentences2[i] = words.join(" ");
      }
      textarea.value = sentences2.join(". ");

      for (var i = 0; i < sentences3.length; i++) {
        var words = sentences3[i].trim().split(" ");
        if (words.length > 0) {
          words[words.length - 1] += "-Moo";
        }
        sentences3[i] = words.join(" ");
      }
      textarea.value = sentences3.join(". ");
  }
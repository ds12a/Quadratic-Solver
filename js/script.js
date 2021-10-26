
var out = document.getElementById('calculations');

var aInput = document.getElementById('a');
var bInput = document.getElementById('b');
var cInput = document.getElementById('c');

function buildCalculations(r1, r2, numSolutions) {
  var solutionInfo = "<p>";
  if (numSolutions == 0) solutionInfo = "NO ROOTS";
  else if (numSolutions == 1) solutionInfo = "One root:</p><p>x = " + toString(r1);
  else if (numSolutions == 2) solutionInfo = "Two roots:</p><p>x = " + toString(r1) + "</p>" + "<p> x = "+ toString(r1);
  solutionInfo += "</p>";
  
  return solutionInfo;
}

function updateCalculations() {
  var a = parseFloat(aInput.value);
  var b = parseFloat(bInput.value);
  var c = parseFloat(cInput.value);
  
  var discriminant = 0; // CHANGE
  var r1 = 1;
  var r2 = 2;
  
  out.outerHTML = buildCalculations(r1, r2, 2);
}

a.onkeyup = updateCalculations();
b.onkeyup = updateCalculations();
c.onkeyup = updateCalculations();

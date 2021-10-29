window.onerror = function(msg, url, linenumber) {
    alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
    return true;
};

var aInput = document.getElementById('a');
var bInput = document.getElementById('b');
var cInput = document.getElementById('c');

function buildCalculations(r1, r2, numSolutions) {
  var solutionInfo = '<p>';
  if (numSolutions == 0) solutionInfo = "NO ROOTS";
  else if (numSolutions == 1) solutionInfo = "One root:</p><p>x = " + r1;
  else if (numSolutions == 2) solutionInfo = "Two roots:</p><p>x = " + r1 + "</p>" + "<p> x = "+ r2;
  solutionInfo += "</p>";
  
  return solutionInfo;
}

function updateCalculations() {
  var a = parseFloat(aInput.value);
  var b = parseFloat(bInput.value);
  var c = parseFloat(cInput.value);
  
  alert(a);
  alert(b);
  alert(c);
  
  var discriminant = b*b - 4 * a * c; 
  var numSolutions = 0;
  if (discriminant == 0) numSolutions = 1;
  else if (discriminant > 0) numSolutions = 2;
  
  var r1 = (-1 * b + Math.sqrt(discriminant)) / (2 * a);
  var r2 = (-1 * b - Math.sqrt(discriminant)) / (2 * a);
  
  var out = document.getElementById('calculations');
  alert(out.innerHTML);
  out.innerHTML = buildCalculations(r1, r2, numSolutions);
  
  alert(out.innerHTML);
}

aInput.onkeyup = function() {updateCalculations();};
bInput.onkeyup = function() {updateCalculations();};
cInput.onkeyup = function() {updateCalculations();};

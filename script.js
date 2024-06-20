$(document).ready(function () {
  $('input[name="multiply"]').click(function (e) {
    e.preventDefault();
    multiply();
  });
});

function multiply() {
  var results = $("#results tbody");

  // Clear previous results
  results.html("");

  // Get Numbers
  var factor1 = parseInt($('input[name="factor1"]').val());
  var factor2 = parseInt($('input[name="factor2"]').val());

  // Get the number of bits
  if (Math.abs(factor1) > Math.abs(factor2)) {
    var bitLength = Math.log(Math.abs(factor1)) / Math.log(2);
  } else {
    var bitLength = Math.log(Math.abs(factor2)) / Math.log(2);
  }
  bitLength++;

  // Setup columns
  var a = pad(0, bitLength);
  var q = twosComplement(factor2, bitLength);
  var q1 = "0";
  var m = twosComplement(factor1, bitLength);

  writeRow(results, a, q, q1, m, "Loading Data");

  for (var i = 0; i < bitLength; i++) {
    if (q1 == "0" && q.substring(q.length - 1) == "1") {
      var tempA = parseInt(a, 2);
      var tempM = parseInt(m, 2);

      tempA = tempA - tempM;
      a = twosComplement(tempA, bitLength);

      writeRow(results, a, q, q1, m, "AC = AC - M");
    } else if (q1 == "1" && q.substring(q.length - 1) == "0") {
      var tempA = parseInt(a, 2);
      var tempM = parseInt(m, 2);

      tempA = tempA + tempM;
      a = twosComplement(tempA, bitLength);
      a = a.substring(a.length - bitLength);

      writeRow(results, a, q, q1, m, "AC = AC + M");
    }

    q1 = q.substring(q.length - 1);
    q = a.charAt(a.length - 1) + q.substring(0, q.length - 1);
    a = a.charAt(0) + a.substring(0, a.length - 1);

    writeRow(results, a, q, q1, m, "Arithmetic Shift Right");
  }
}

function twosComplement(number, bitLength) {
  if (number < 0) {
    // Negate
    var bin = number.toString(2);
    bin = pad(bin.substring(1, bin.length), bitLength);
    bin = bin.replace(/1/g, "x");
    bin = bin.replace(/0/g, "1");
    bin = bin.replace(/x/g, "0");

    // Add 1
    number = parseInt(bin, 2);
    number += 1;
    bin = number.toString(2);
    return pad(bin, bitLength);
  } else {
    return pad(number.toString(2), bitLength);
  }
}

function writeRow(table, a, q, q1, m, log) {
  table.append(
    "<tr><td>" +
      a +
      "</td><td>" +
      q +
      "</td><td>" +
      q1 +
      "</td><td>" +
      m +
      "</td><td>" +
      log +
      "</td></tr>"
  );
}

function pad(number, length) {
  var str = "" + number;
  while (str.length < length) {
    str = "0" + str;
  }

  return str;
}

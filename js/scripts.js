//business logic
function Candidate(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName;
  this.age = age;
  this.gender = gender;
  this.reputation = 0;
  this.funding = 0;
  this.playerTitle;
  this.choiceOne;
};

Candidate.prototype.fullName = function() {
  this.fullName = this.firstName + " " + this.lastName;
};

Candidate.prototype.choiceOne = function(radioInput1){
  if (radioInput1 == "environmental") {
    this.reputation = this.reputation + 10;
    this.funding = this.funding + 500;
    return "1A"
  } else if (radioInput1 == "industrial") {
    this.reputation = this.reputation + 4;
    this.funding = this.funding + 1000;
    return "1B"
  };
};

Candidate.prototype.choiceTwo = function(radioInput2){
  if (radioInput2 == "cuttax") {
    this.reputation = this.reputation + 10;
    this.funding = this.funding + 1000;
    return "2A"
  } else if (radioInput2 == "paytax") {
    this.reputation = this.reputation + 14;
    this.funding = this.funding - 250;
    return "2B"
  } else if (radioInput2 == "avoidquestion") {
    this.reputation = this.reputation + 2;
    this.funding = this.funding + 500;
    return "2C"
  }
};

Candidate.prototype.choiceThree = function(radioInput3){
  if (radioInput3 == "attack") {
    this.reputation = this.reputation + 0;
    this.funding = this.funding - 250;
    return "3A";
  } else if (radioInput3 == "giveup") {
    this.reputation = this.reputation - 6;
    return "3B";
  } else if (radioInput3 == "defend") {
    this.reputation = this.reputation + 6;
    this.funding = this.funding - 500;
    return "3C";
  }
};

Candidate.prototype.choiceFour = function(radioInput4){
  if (radioInput4 == "tweet-back") {
    this.reputation = this.reputation + 0;
    this.funding = this.funding - 200;
    return "4A";
  } else if (radioInput4 == "retweet") {
    this.reputation = this.reputation - 6;
    return "4B";
  } else if (radioInput4 == "ignore") {
    this.reputation = this.reputation + 6;
    return "4C";
  }
};

Candidate.prototype.choiceFive = function(radioInput5){
  if (radioInput5 == "Decline") {
    this.reputation = this.reputation + 4;
    return "5A";
  } else if (radioInput5 == "Cyber") {
    this.reputation = this.reputation + 10;
    this.funding = this.funding + 1500;
    return "5B";
  } else if (radioInput5 == "Nakedtruth") {
    this.reputation = this.reputation + 14;
    return "5C";
  }
};

Candidate.prototype.choiceSix = function(radioInput6){
  if (radioInput6 == "spotlight") {
    this.reputation = this.reputation + 4;
    this.funding = this.funding - 100;
    return "6A";
  } else if (radioInput6 == "timbuktu") {
    this.reputation = this.reputation - 10;
    return "6B";
  } else if (radioInput6 == "prFirm") {
    this.reputation = this.reputation + 10;
    this.funding = this.funding - 500;
    return "6C";
  }
};

Candidate.prototype.choiceSeven = function(radioInput7){
  if (radioInput7 == "Force") {
    this.reputation = this.reputation + 6;
    this.funding = this.funding + 1000;
    return "7A";
  } else if (radioInput7 == "Accuse") {
    this.reputation = this.reputation - 10;
    this.funding = this.funding + 500;
    return "7B";
  } else if (radioInput7 == "Maury") {
    this.reputation = this.reputation + 15;
    this.funding = this.funding - 500;
    return "7C";
  }
};

Candidate.prototype.choiceEight = function(radioInput8){
  if (radioInput8 == "grudge") {
    this.reputation = this.reputation - 4;
    this.funding = this.funding - 250;
    return "8A";
  } else if (radioInput8 == "introspection") {
    this.reputation = this.reputation + 0;
    return "8B";
  } else if (radioInput8 == "on-air") {
    this.reputation = this.reputation + 10;
    this.funding = this.funding - 200;
    return "8C";
  }
};

Candidate.prototype.choiceNine = function(radioInput9){
  if (radioInput9 == "public") {
    this.reputation = this.reputation + 10;
    this.funding = this.funding + 1500;
    return "9A";
  } else if (radioInput9 == "private") {
    this.reputation = this.reputation + 2;
    this.funding = this.funding + 1500;
    return "9B";
  }
};

Candidate.prototype.choiceTen = function(radioInput10){
  if (radioInput10 == "me-first") {
    this.reputation = this.reputation - 10;
    this.funding = this.funding - 500;
    return "10A";
  } else if (radioInput10 == "handsome") {
    this.reputation = this.reputation + 15;
    return "10B";
  }
};

Candidate.prototype.choiceFinal = function(radioInputFinal){
  if (radioInputFinal == "duty") {
    this.reputation = this.reputation + 15;
    this.funding = 0;
    return "FA";
  } else if (radioInputFinal == "security") {
    this.reputation = this.reputation - 10;
    this.funding = 0;
    return "FB";
  } else if (radioInputFinal == "kneecaps") {
    this.reputation = this.reputation - 15;
    this.funding = 0;
    return "FC";
  }
};

Candidate.prototype.winLose = function() {
  if (this.reputation >= 51) {
    victoryReveal();
  } else {
    lossReveal();
  }
};

Candidate.prototype.role = function() {
  if (this.gender === "male" || this.gender === "Male") {
    this.playerTitle = "Congressman";
  } else if (this.gender === "female" || this.gender === "Female") {
    this.playerTitle = "Congresswoman";
  } else {
    this.playerTitle = "Representative";
  }
  return this.playerTitle;
};

function validateForm(firstName, lastName) {
  if (firstName === "" || lastName === "") {
    return false;
  } else {
    return true;
  }
};

//user interface logic
$(document).ready(function() {
  var newCandidate;
  victoryReveal = function() {
    $("#win").show();
  };
  lossReveal = function() {
    $("#lose").show();
  };

  var turns = 0;
  var decisionPoints = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  nextDecision = function() {
    turns = turns + 1;
    if (turns == 6 && newCandidate.funding > 0) {
      $("#finalDecision").show();
    } else if (turns == 6 && newCandidate.funding <= 0) {
      $("#campaignBroke").show();
    } else {
      var counter = Math.floor((Math.random() * decisionPoints.length) + 0);
      $("#decision" + decisionPoints[counter]).show();
      decisionPoints.splice(counter, 1);
    }
  };

  $("#register").submit(function(event) {
    event.preventDefault();
    var firstName = $("input#first-name").val();
    var lastName = $("input#last-name").val();
    var age = $("input#age").val();
    var gender = $("input#gender").val()
    newCandidate = new Candidate(firstName, lastName, age, gender);
    if (age >= 35) {
      newCandidate.reputation += 10;
    }
    var filledForm = validateForm(firstName, lastName);
    if (filledForm === true) {
      var fullName = newCandidate.fullName();
      $(".title").text(newCandidate.role());
      $(".firstName").text(newCandidate.firstName);
      $(".lastName").text(newCandidate.lastName);
      $("#intro").hide();
      $(".reputation-points").text(newCandidate.reputation);
      if (newCandidate.reputation <= 0) {
        $(".reputation-points").text(0);
      }
      $(".funds").text(newCandidate.funding);
      $("#status").show();
      $("#decision1").show();
    } else {
      alert("You must enter your first and last name, silly-pants!")
    }
  });

  $("button#decision1Button").click(function(){
    var radioInput1 = $("input:radio[name=dec1radio]:checked").val();
    if (radioInput1 === undefined) {
      alert("Answer the question, silly-pants!")
    } else {
      var choiceOne = newCandidate.choiceOne(radioInput1);
      $("#explanation" + choiceOne).show();
      $("#decisionTitle1").hide();
      $("#explanationHeader1").show();

      $("button#decision1Button").hide();
      $("#prompt1").hide();
      $("#question1").hide();
      $(".reputation-points").text(newCandidate.reputation);
      if (newCandidate.reputation <= 0) {
        $(".reputation-points").text(0);
      }
      $(".funds").text(newCandidate.funding);
      $("button#moveon1Button").show();
    }
  });

  $("button#moveon1Button").click(function(){
    nextDecision();
    $("#decision1").hide();
  });

  $("button#decision2Button").click(function(){
    var radioInput2 = $("input:radio[name=dec2radio]:checked").val();
    if (radioInput2 === undefined) {
      alert("Answer the question, silly-pants!")
    } else {
      var choiceTwo = newCandidate.choiceTwo(radioInput2);
      $("#explanation" + choiceTwo).show();
      $("#decisionTitle2").hide();
      $("#explanationHeader2").show();

      $("button#decision2Button").hide();
      $("#prompt2").hide();
      $("#question2").hide();
      $(".reputation-points").text(newCandidate.reputation);
      if (newCandidate.reputation <= 0) {
        $(".reputation-points").text(0);
      }
      $(".funds").text(newCandidate.funding);
      $("button#moveon2Button").show();
    }
  });

  $("button#moveon2Button").click(function(){
    nextDecision();
    $("#decision2").hide();
  });

  $("button#decision3Button").click(function(){
    var radioInput3 = $("input:radio[name=dec3radio]:checked").val();
    if (radioInput3 === undefined) {
      alert("Answer the question, silly-pants!")
    } else {
      var choiceThree = newCandidate.choiceThree(radioInput3);
      $("#explanation" + choiceThree).show();
      $("#decisionTitle3").hide();
      $("#explanationHeader3").show();

      $("button#decision3Button").hide();
      $("#prompt3").hide();
      $("#question3").hide();
      $(".reputation-points").text(newCandidate.reputation);
      if (newCandidate.reputation <= 0) {
        $(".reputation-points").text(0);
      }
      $(".funds").text(newCandidate.funding);
      $("button#moveon3Button").show();
    }
  });

  $("button#moveon3Button").click(function(){
    nextDecision();
    $("#decision3").hide();
  });

  $("button#decision4Button").click(function(){
    var radioInput4 = $("input:radio[name=dec4radio]:checked").val();
    if (radioInput4 === undefined) {
      alert("Answer the question, silly-pants!")
    } else {
      var choiceFour = newCandidate.choiceFour(radioInput4);
      $("#explanation" + choiceFour).show();
      $("#decisionTitle4").hide();
      $("#explanationHeader4").show();

      $("button#decision4Button").hide();
      $("#prompt4").hide();
      $("#question4").hide();
      $(".reputation-points").text(newCandidate.reputation);
      if (newCandidate.reputation <= 0) {
        $(".reputation-points").text(0);
      }
      $(".funds").text(newCandidate.funding);
      $("button#moveon4Button").show();
    }
  });

  $("button#moveon4Button").click(function(){
    nextDecision();
    $("#decision4").hide();
  });

  $("button#decision5Button").click(function(){
    var radioInput5 = $("input:radio[name=dec5radio]:checked").val();
    if (radioInput5 === undefined) {
      alert("Answer the question, silly-pants!")
    } else {
      var choiceFive = newCandidate.choiceFive(radioInput5);
      $("#explanation" + choiceFive).show();
      $("#decisionTitle5").hide();
      $("#explanationHeader5").show();

      $("button#decision5Button").hide();
      $("#prompt5").hide();
      $("#question5").hide();
      $(".reputation-points").text(newCandidate.reputation);
      if (newCandidate.reputation <= 0) {
        $(".reputation-points").text(0);
      }
      $(".funds").text(newCandidate.funding);
      $("button#moveon5Button").show();
    }
  });

  $("button#moveon5Button").click(function(){
    nextDecision();
    $("#decision5").hide();
  });

  $("button#decision6Button").click(function(){
    var radioInput6 = $("input:radio[name=dec6radio]:checked").val();
    if (radioInput6 === undefined) {
      alert("Answer the question, silly-pants!")
    } else {
      var choiceSix = newCandidate.choiceSix(radioInput6);
      $("#explanation" + choiceSix).show();
      $("#decisionTitle6").hide();
      $("#explanationHeader6").show();

      $("button#decision6Button").hide();
      $("#prompt6").hide();
      $("#question6").hide();
      $(".reputation-points").text(newCandidate.reputation);
      if (newCandidate.reputation <= 0) {
        $(".reputation-points").text(0);
      }
      $(".funds").text(newCandidate.funding);
      $("button#moveon6Button").show();
    }
  });

  $("button#moveon6Button").click(function(){
    nextDecision();
    $("#decision6").hide();
  });

  $("button#decision7Button").click(function(){
    var radioInput7 = $("input:radio[name=dec7radio]:checked").val();
    if (radioInput7 === undefined) {
      alert("Answer the question, silly-pants!")
    } else {
      var choiceSeven = newCandidate.choiceSeven(radioInput7);
      $("#explanation" + choiceSeven).show();
      $("#decisionTitle7").hide();
      $("#explanationHeader7").show();

      $("button#decision7Button").hide();
      $("#prompt7").hide();
      $("#question7").hide();
      $(".reputation-points").text(newCandidate.reputation);
      if (newCandidate.reputation <= 0) {
        $(".reputation-points").text(0);
      }
      $(".funds").text(newCandidate.funding);
      $("button#moveon7Button").show();
    }
  });

  $("button#moveon7Button").click(function(){
    nextDecision();
    $("#decision7").hide();
  });

  $("button#decision8Button").click(function(){
    var radioInput8 = $("input:radio[name=dec8radio]:checked").val();
    if (radioInput8 === undefined) {
      alert("Answer the question, silly-pants!")
    } else {
      var choiceEight = newCandidate.choiceEight(radioInput8);
      $("#explanation" + choiceEight).show();
      $("#decisionTitle8").hide();
      $("#explanationHeader8").show();

      $("button#decision8Button").hide();
      $("#prompt8").hide();
      $("#question8").hide();
      $(".reputation-points").text(newCandidate.reputation);
      if (newCandidate.reputation <= 0) {
        $(".reputation-points").text(0);
      }
      $(".funds").text(newCandidate.funding);
      $("button#moveon8Button").show();
    }
  });

  $("button#moveon8Button").click(function(){
    nextDecision();
    $("#decision8").hide();
  });

  $("button#decision9Button").click(function(){
    var radioInput9 = $("input:radio[name=dec9radio]:checked").val();
    if (radioInput9 === undefined) {
      alert("Answer the question, silly-pants!")
    } else {
      var choiceNine = newCandidate.choiceNine(radioInput9);
      $("#explanation" + choiceNine).show();
      $("#decisionTitle9").hide();
      $("#explanationHeader9").show();

      $("button#decision9Button").hide();
      $("#prompt9").hide();
      $("#question9").hide();
      $(".reputation-points").text(newCandidate.reputation);
      if (newCandidate.reputation <= 0) {
        $(".reputation-points").text(0);
      }
      $(".funds").text(newCandidate.funding);
      $("button#moveon9Button").show();
    }
  });

  $("button#moveon9Button").click(function(){
    nextDecision();
    $("#decision9").hide();
  });

  $("button#decision10Button").click(function(){
    var radioInput10 = $("input:radio[name=dec10radio]:checked").val();
    if (radioInput10 === undefined) {
      alert("Answer the question, silly-pants!")
    } else {
      var choiceTen = newCandidate.choiceTen(radioInput10);
      $("#explanation" + choiceTen).show();
      $("#decisionTitle10").hide();
      $("#explanationHeader10").show();

      $("button#decision10Button").hide();
      $("#prompt10").hide();
      $("#question10").hide();
      $(".reputation-points").text(newCandidate.reputation);
      if (newCandidate.reputation <= 0) {
        $(".reputation-points").text(0);
      }
      $(".funds").text(newCandidate.funding);
      $("button#moveon10Button").show();
    }
  });

  $("button#moveon10Button").click(function(){
    nextDecision();
    $("#decision10").hide();
  });

  $("button#finalDecisionButton").click(function() {
    var radioInputFinal = $("input:radio[name=decfinalradio]:checked").val();
    if (radioInputFinal === undefined) {
      alert("Answer the question, silly-pants!")
    } else {
      var choiceFinal = newCandidate.choiceFinal(radioInputFinal);
      $("#explanation" + choiceFinal).show();
      $("#finalDecisionTitle").hide();
      $("#finalExplanationHeader").show();

      $("button#finalDecisionButton").hide();
      $("#prompt-final").hide();
      $("#question-final").hide();
      $(".reputation-points").text(newCandidate.reputation);
      if (newCandidate.reputation <= 0) {
        $(".reputation-points").text(0);
      }
      $(".funds").text(newCandidate.funding);
      $("#viewResults").show();
    }
  });

  $("#viewResults").click(function() {
    $(".last-name").append(newCandidate.lastName);
    newCandidate.winLose();
    $("#finalDecision").hide();
  });
});

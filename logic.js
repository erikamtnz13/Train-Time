
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD_YVcjljnoBGTtri58cmslKAMc5Wu81Jk",
    authDomain: "train-times-3698f.firebaseapp.com",
    databaseURL: "https://train-times-3698f.firebaseio.com",
    projectId: "train-times-3698f",
    storageBucket: "",
    messagingSenderId: "1055808585308"
  };
  firebase.initializeApp(config);

var database = firebase.database();
var nextArrival = "hrs:mins";
var firstTrain = "HH:MM";

$("#add-train").on("click", function (event) {
  
  event.preventDefault();
  var name = $("#train-name").val().trim();
  var destination = $("#train-destination").val().trim();
      firstTrain = $("#train-time").val().trim();
  var frequency = $("#train-frequency").val().trim();

  console.log(name);
  console.log(destination);
  console.log(firstTrain);
  console.log(frequency);

  var data = {
    name: name,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency
  }

  database.ref("trainTimes").push(data);

});

database.ref("trainTimes").on("child_added", function(snapshot){
 console.log("This is coming from the database: " + snapshot.val().name);


})















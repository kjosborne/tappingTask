<?php
$post_data = json_decode(file_get_contents('php://input'), true); //json is a type of javascript variable that functions as a structure. json_decode makes it php. file_get_contents gets the raw input for php
// the directory "data" must be writable by the server
$name = "data/".$post_data['filename'].".csv"; 
$data = $post_data['filedata'];
// write the file to disk
file_put_contents($name, $data);
?>

<!DOCTYPE html>
<html>
  <head>
    <title>Tapping Task</title>  <!-- This is for changing the title -->
    <script src="db/submit.js"></script>
    <script src="jsPsych/jspsych.js"></script>
    <script src="jsPsych/plugins/jspsych-audio-keyboard-response.js"></script>
    <script src="jsPsych/plugins/jspsych-html-keyboard-response.js"></script> <!--script is for javascript -->
    <script src="jsPsych/plugins/jspsych-image-keyboard-response.js"></script>
    <script src="jsPsych/plugins/jspsych-html-button-response.js"></script>
    <link href="jsPsych/css/jspsych.css" rel="stylesheet" type="text/css"></link> 
    <link rel="stylesheet" type="text/css" href="css/style.css"> <!--the interpreter will take care of ordering, rel, type, href do not have to be in a specific order -->
  </head>
  <body onbeforeunload="return areYouSure()" style="background-color:gray;">  <!--any time you see style = all properties that follow are inline css -->
    <?php include_once "include/intake.php"?>
  </body>
<footer>  
  <script src="exp/jQuery.js"></script>
  <script src="exp/fn.js"></script>
  <script src="exp/var.js"></script>
  <script src="exp/timeline.js"></script>
</footer>
</html>

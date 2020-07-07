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
    <script src="jsPsych/jspsych.js"></script>
    <link href="jsPsych/css/jspsych.css" rel="stylesheet" type="text/css"></link> <!--link is for any other text file; href is for local directory, either a url or path -->
    <script src="jsPsych/plugins/jspsych-html-keyboard-response.js"></script> <!--script is for javascript -->
    <link rel="stylesheet" type="text/css" href="css/style.css"> <!--the interpreter will take care of ordering, rel, type, href do not have to be in a specific order -->
  </head>
  <body  style="background-color:gray;">  <!--any time you see style = all properties that follow are inline css -->
    <?php include "include/consent.php"?>
  </body>
  <footer>
    <script type="text/javascript" src="//code.jquery.com/jquery-git.js"></script>
    <script src="js/timer.js"></script>
    <script src="js/saveData.js"></script>
    <script src="js/startExperiment.js"></script>
    <script src="js/consentLoad.js"></script>
    <script src="variables.js"></script>
    <script src="timeline.js"></script>
    <script src="main.js"></script>    
  </footer>
  </html>

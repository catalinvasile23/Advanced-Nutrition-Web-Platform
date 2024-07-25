<?php
	session_set_cookie_params(0);
	ob_start();
	session_start();
	
	include 'config.php';
	
	$name = $_POST['name'];
	$calories = $_POST['calories'];
	$protein = $_POST['protein'];
	$fat = $_POST['fat'];
	$carb = $_POST['carb'];
	$sugar = $_POST['sugar'];
	$fibre = $_POST['fibre'];
	
	$c = mysqli_connect($dbServer, $dbUser, $dbPass, $dbName);
	
	$q = "INSERT INTO food (name, calories, protein, fat, carb, sugar, fibre)
	VALUES ('{$name}', {$calories}, {$protein}, {$fat}, {$carb}, {$sugar}, {$fibre})";
	
	mysqli_query($c, $q);
	
	mysqli_close($c);
?>
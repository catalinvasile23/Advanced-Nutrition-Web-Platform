<?php
	session_set_cookie_params(0);
	ob_start();
	session_start();
	
	include 'config.php';
	
	$id = $_SESSION['id'];
	
	$idFood = $_GET["idFood"];
	$grams = $_GET['grams'];
		
	$c = mysqli_connect($dbServer, $dbUser, $dbPass, $dbName);
	
	$q = "INSERT INTO food_history (idUser, idFood, grams) VALUES ({$id}, {$idFood}, {$grams})";
	
	mysqli_query($c, $q);
	
	mysqli_close($c);
?>
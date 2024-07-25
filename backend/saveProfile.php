<?php
	session_set_cookie_params(0);
	ob_start();
	session_start();
	
	include 'config.php';
	
	$id = $_SESSION['id'];
	$firstName = $_POST['firstName'];
	$lastName = $_POST['lastName'];
	$email = $_POST['email'];
	$weight = $_POST['weight'];
	$height = $_POST['height'];
	$age = $_POST['age'];
	$gender = $_POST['gender'];
	$activity = $_POST['activity'];

	$c = mysqli_connect($dbServer, $dbUser, $dbPass, $dbName);
	
	$q = "UPDATE users SET firstName = '{$firstName}', lastName = '{$lastName}', email = '{$email}'"; 
	
	if($weight != '')
		$q .= ", weight = {$weight}";
	
	if($height != '')
		$q .= ", height = {$height}";
	
	if($age != '')
		$q .= ", age = {$age}";
	
	if($gender != '')
		$q .= ", gender = '{$gender}'";
	
	$q .= ", activity = {$activity}";
	
	$q .= " WHERE id = {$id}";
	
	
	mysqli_query($c, $q);
	
	mysqli_close($c);
?>
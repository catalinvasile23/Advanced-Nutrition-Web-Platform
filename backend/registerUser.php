<?php
	session_set_cookie_params(0);
	ob_start();
	session_start();
	
	include 'config.php';
	
	$ok = 'NOK';
	
	$firstName = $_POST['firstName'];
	$lastName = $_POST['lastName'];
	$email = $_POST['email'];
	$pass = $_POST['pass'];
	
	$c = mysqli_connect($dbServer, $dbUser, $dbPass, $dbName);
	
	$q = "INSERT INTO users (firstName, lastName, email, pass) VALUES 
	('{$firstName}', '{$lastName}', '{$email}', '{$pass}')";
	
	if(mysqli_query($c, $q))
		$ok = 'OK';

	echo $ok;
	
	
	mysqli_close($c);
?>
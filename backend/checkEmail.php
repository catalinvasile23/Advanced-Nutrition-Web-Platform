<?php
	session_set_cookie_params(0);
	ob_start();
	session_start();
	
	include 'config.php';
	
	$email = $_GET['email'];
	
	$c = mysqli_connect($dbServer, $dbUser, $dbPass, $dbName);
	
	$q = "SELECT * FROM users WHERE email = '{$email}'";
	
	$r = mysqli_query($c, $q);
	
	if(mysqli_num_rows($r) == 0)
		echo false;
	else
		echo true;
	
	mysqli_close($c);
?>
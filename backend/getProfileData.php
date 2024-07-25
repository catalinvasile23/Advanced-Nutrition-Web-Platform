<?php
	session_set_cookie_params(0);
	ob_start();
	session_start();
	
	include 'config.php';
	
	$id = $_SESSION['id'];
	
	$c = mysqli_connect($dbServer, $dbUser, $dbPass, $dbName);
	
	$q = "SELECT * FROM users WHERE id = {$id}"; 
	
	$res = mysqli_query($c, $q);
	$r = mysqli_fetch_assoc($res);
	
	echo json_encode($r);
	
	mysqli_close($c);
?>
<?php
	session_set_cookie_params(0);
	ob_start();
	session_start();
	
	include 'config.php';
	
		
	$c = mysqli_connect($dbServer, $dbUser, $dbPass, $dbName);
	
	$q = "SELECT * FROM food ORDER BY id DESC";
	
	$res = mysqli_query($c, $q);
	
	$foods = array();
	
	while($row = mysqli_fetch_assoc($res))
		$foods[] = $row;
	
	echo json_encode($foods);
	
	mysqli_close($c);
?>
<?php
	session_set_cookie_params(0);
	ob_start();
	session_start();
	
	include 'config.php';
		
	$c = mysqli_connect($dbServer, $dbUser, $dbPass, $dbName);
	
	$q = "SELECT * FROM recipes";
	
	$res = mysqli_query($c, $q);
	
	$recipes = array();
	
	while($row = mysqli_fetch_assoc($res))
		$recipes[] = $row;
	
	echo json_encode($recipes);
	
	mysqli_close($c);
?>
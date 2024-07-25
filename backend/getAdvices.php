<?php
	session_set_cookie_params(0);
	ob_start();
	session_start();
	
	include 'config.php';
		
	$c = mysqli_connect($dbServer, $dbUser, $dbPass, $dbName);
	
	$q = "SELECT * FROM advices";
	
	$res = mysqli_query($c, $q);
	
	$adivces = array();
	
	while($row = mysqli_fetch_assoc($res))
		$adivces[] = $row;
	
	echo json_encode($adivces);
	
	mysqli_close($c);
?>
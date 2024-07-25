<?php
	session_set_cookie_params(0);
	ob_start();
	session_start();
	
	include 'config.php';
	
	$id = $_SESSION['id'];
	
	$c = mysqli_connect($dbServer, $dbUser, $dbPass, $dbName);
	
	$q = "SELECT * FROM users where id = {$id}";
	
	$res = mysqli_query($c, $q);
	
	$r = mysqli_fetch_assoc($res);
	
	$height = $r['height'];
	$weight = $r['weight'];
	$age = $r['age'];
	$gender = $r['gender'];
	$activity = $r['activity'];
	
	$bmr = 0;
	
	if($gender == 'man')
		$bmr = 88.362 + (13.397 * $weight) + (4.799 * $height) - (5.677 * $age);
	else
		$bmr = 447.593 + (9.247 * $weight) + (3.098 * $height) - (4.330 * $age);
	
	if($activity == 1)
		$bmr *= 1.2; //sedentar
	else if($activity == 2)
		$bmr *= 1.375;//usor activ
	else if($activity == 3)
		$bmr *= 1.55;//moderat activ
	else if($activity == 4)
		$bmr *= 1.725;//foarte activ
	else if($activity == 5)
		$bmr *= 1.9;//extrem de activ
	
	echo round($bmr, 0);
	
	mysqli_close($c);
?>
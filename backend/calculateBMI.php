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
	
	if($r['height'] == "")
		$bmi = 0;
	else	
		$bmi = $r['weight'] / (($r['height'] / 100) ** 2);
	
	echo round($bmi, 2);	
	
	
	
	if($bmi != 0){
		echo " => ";
		if($bmi < 18.5)
			echo "(subponderal)";
		else if($bmi < 24.9)
			echo "(normoponderal)";
		else if($bmi < 29.9)
			echo "(supraponderal)";
		else if($bmi < 34.9)
			echo "(obezitate grad I)";
		else if($bmi < 39.9)
			echo "(obezitate grad II)";
		else 
			echo "(obezitate morbida)";
	}
	mysqli_close($c);
?>
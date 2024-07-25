<?php
	session_set_cookie_params(0);
	ob_start();
	session_start();
	
	include 'config.php';
	
	$idRecipe = $_GET['id'];
	$idUser = $_SESSION['id'];
		
	$c = mysqli_connect($dbServer, $dbUser, $dbPass, $dbName);
	
	$q = "SELECT * FROM recepies_food rf 
	JOIN food f ON f.id = rf.idFood 
	WHERE rf.idRecipe = {$idRecipe}";
	
	$q2 = "INSERT INTO food_history (idUser, idFood, grams) VALUES";
	
	$res = mysqli_query($c, $q);
	
	$first = true;
	
	while($row = mysqli_fetch_assoc($res)){	
		if($first == false)
			$q2 .= ',';
		
		if($first == true)
			$first = false;
		
		$q2 .= " ({$idUser}, " . $row['idFood'] . ", " . $row['grams'] . ")";
	}
	
	mysqli_query($c, $q2);
	
	
	mysqli_close($c);
?>
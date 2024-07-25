<?php
	session_set_cookie_params(0);
	ob_start();
	session_start();
	
	include 'config.php';
	
	$idRecipe = $_GET['idRecipe'];
		
	$c = mysqli_connect($dbServer, $dbUser, $dbPass, $dbName);
	
	$q = "SELECT * FROM recepies_food rf 
	JOIN food f ON f.id = rf.idFood 
	WHERE rf.idRecipe = {$idRecipe}";
	
	$res = mysqli_query($c, $q);
	
	$recipes = array();
	
	while($row = mysqli_fetch_assoc($res))
		$recipes[] = $row;
	
	echo json_encode($recipes);
	
	mysqli_close($c);
?>
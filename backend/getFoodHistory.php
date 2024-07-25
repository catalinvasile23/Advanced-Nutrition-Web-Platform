<?php
	session_set_cookie_params(0);
	ob_start();
	session_start();
	
	include 'config.php';
	
	$id = $_SESSION['id'];
	
	$and = isset($_GET['and']) ? $_GET['and'] : null;
		
	$c = mysqli_connect($dbServer, $dbUser, $dbPass, $dbName);
	
	$q = "SELECT * FROM food_history fh
	JOIN food f ON f.id = fh.idFood
	WHERE idUser = {$id}";
	
	if($and != null)
		$q .= ' ' . $and;
	
	$q .= " ORDER BY fh.id DESC";
	
	$res = mysqli_query($c, $q);
	
	$foods = array();
	
	while($row = mysqli_fetch_assoc($res))
		$foods[] = $row;
	
	echo json_encode($foods);
	
	mysqli_close($c);
?>
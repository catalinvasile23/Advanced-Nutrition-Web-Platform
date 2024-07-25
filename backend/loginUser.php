<?php
	session_set_cookie_params(0);
	ob_start();
	session_start();
	
	include 'config.php';
	
	$ok = 'NOK';
	
	$email = $_POST['email'];
	$pass = $_POST['pass'];
	
	$c = mysqli_connect($dbServer, $dbUser, $dbPass, $dbName);
	
	$q = "SELECT * FROM users WHERE email = '{$email}' AND pass = '{$pass}'";

	if($res = mysqli_query($c, $q)){
		if(mysqli_num_rows($res) != 0){
			$ok = 'OK';
			
			$r = mysqli_fetch_assoc($res);
			
			$_SESSION['loggedIn'] = true;
			$_SESSION['id'] = $r['id'];
			$_SESSION['firstName'] = $r['firstName'];
			$_SESSION['lastName'] = $r['lastName'];
			
		}
	}
	
	echo $ok;
	
	
	
	mysqli_close($c);
?>
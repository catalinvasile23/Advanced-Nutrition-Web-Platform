<?php
	session_set_cookie_params(0);
	ob_start();
	session_start();
	$_SESSION['loggedIn'] = false;
?>

<!DOCTYPE html>
<html>
	<head>
		<title>Calorii</title>
		 <link rel="icon" href="imgs/icon.jpeg" type="image/jpeg">
		<link rel="stylesheet" type="text/css" href="style.css">
		<script src="../caloriiData/script.js"></script>
		<script src="../caloriiData/jquery-3.7.1.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

	</head>
	
	<body>
		<header>
		
		</header>
		
		<main>
		
		</main>
		
		<footer>
			<p>Aplicatie web pentru monitorizarea nutritiei &copy;Vasile Catalin - 2024 - Licenta</p>
		</footer>		
	</body>
</html>

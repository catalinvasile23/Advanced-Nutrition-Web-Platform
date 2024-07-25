<?php
	session_set_cookie_params(0);
	ob_start();
	session_start();
	
	class Button{
		public $type;
		public $classs;
		public $onclick;
		public $innerHTML;
		
		public function __construct($type, $classs, $onclick, $innerHTML) {
			$this->type = $type;
			$this->classs = $classs;
			$this->onclick = $onclick;
			$this->innerHTML = $innerHTML;
		}
	}
	
	$buttons = array();
	
	if($_SESSION['loggedIn'] == false){
		$buttons[] = new Button("button", "header-button", "generateHomePage()", "Acasa");
		$buttons[] = new Button("button", "header-button", "generateRegisterPage()", "Inregistrare");
		$buttons[] = new Button("button", "header-button", "generateLoginPage()", "Intra in cont");
	}
	else{
		$buttons[] = new Button("button", "header-button", "generateHomePageUser()", "Acasa");
		$buttons[] = new Button("button", "header-button", "generateAccountPage()", "Contul Meu");
		$buttons[] = new Button("button", "header-button", "generateCatalogPage()", "Catalog Alimente");
		$buttons[] = new Button("button", "header-button", "generateFoodHistory()", "Istoric Alimentar");
		$buttons[] = new Button("button", "header-button", "generateRecipesPage()", "Retete");
		$buttons[] = new Button("button", "header-button", "generateAdvicePage()", "Sfaturi");
		$buttons[] = new Button("button", "header-button", "logOut()", "Iesi din cont");
	}
	
	echo json_encode($buttons);
?>
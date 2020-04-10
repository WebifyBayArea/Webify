<?php
	$data_file = fopen("text.txt", "w")
	$name = $_POST["name"];
	$age = $_POST["age"]
	$text_to_write = $name . " " > $age;

	fwrite($data_file, $text_to_write);
	fclose($data_file);
?>


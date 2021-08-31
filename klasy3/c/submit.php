<?php
  $data_file = fopen("log.txt", "w");

  $imie = $_POST["imie"];
  $nazwisko = $_POST["nazwisko"];
  $text_to_write = $name . " " . $age;

  fwrite($data_file, $text_to_write);

  fclose($data_file);
?>

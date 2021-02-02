<?php
require 'coors.php';
require "database.php";

$value = $DB->real_escape_string($_POST['value']);

$DB->query("INSERT INTO table (registers) VALUES ('".$value."')");
$DB->close();

echo json_encode(["success"=>true]);
?>
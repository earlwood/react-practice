<?php
$DBase = new mysqli("localhost","USER","PASSWORD","DATABASE");
if($DBase->connect_errno){
    printf("Connect failed: %s\n", $DBase->connect_error);
    exit();
}else{
	date_default_timezone_set('America/Mexico_City');
	$DBase->set_charset("utf8");
}
?>
<?php
header("Content-Type:Appliaction/json");
$jsondata=file_get_contents("file.json");


echo $jsondata;
?>
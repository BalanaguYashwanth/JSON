<?php
header("Content-Type:application/json");

$JSON=file_get_contents("file.json");
echo $JSON;
?>
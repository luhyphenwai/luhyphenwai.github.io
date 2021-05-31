<?php
if(isset($_GET['x']))
{
    $get = $_GET['x'];
    echo $get;
    $jsonString = file_get_contents('/Web Applications/typer/quoteSuggestions.json');
    $data = json_decode($jsonString, true);
    array_push($data, $get);
    $jsonData = json_encode($data);
    file_put_contents('/Web Applications/typer/quoteSuggestions.json', $jsonData);
}   
?>
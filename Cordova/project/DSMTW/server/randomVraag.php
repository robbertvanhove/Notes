<?php

$DB_HOST = 'localhost';
$DB_USERNAME = 'root';
$DB_PASSWORD = 'robbert';
$DB_DATABASE = 'dsmtw';

// open connection to mysql
$connection = mysqli_connect($DB_HOST,$DB_USERNAME,$DB_PASSWORD,$DB_DATABASE) or die("Error " . mysqli_error($connection));
mysqli_set_charset($connection, "utf8");

//soort ophalen
$soort = $_GET["soort"];

// DB query
$sql = "SELECT id,vraag FROM Vraag WHERE type='" . $soort . "' ORDER BY RAND() LIMIT 1";
$result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));




// create vraag
$vraag;
while($row =mysqli_fetch_assoc($result))
{
  $vraag = $row;
}

//create antwoorden

// DB query
$sql = "SELECT antwoord FROM Antwoord WHERE vraagId=" . $vraag["id"];
$result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));


$antwoorden = [];
while($row =mysqli_fetch_assoc($result))
{
  $antwoorden[] = $row;
}



// close the db connection
mysqli_close($connection);

$vraag["antwoorden"] = $antwoorden;

// send JSON to browser
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
echo json_encode($vraag);


?>
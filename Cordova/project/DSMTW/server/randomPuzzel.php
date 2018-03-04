<?php

$DB_HOST = 'localhost';
$DB_USERNAME = 'root';
$DB_PASSWORD = 'robbert';
$DB_DATABASE = 'dsmtw';

// open connection to mysql
$connection = mysqli_connect($DB_HOST,$DB_USERNAME,$DB_PASSWORD,$DB_DATABASE) or die("Error " . mysqli_error($connection));
mysqli_set_charset($connection, "utf8");

//soort ophalen


// DB query
$sql = "SELECT id,oplossing FROM Puzzel ORDER BY RAND() LIMIT 3";
$result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));




// create puzzelstukken
$puzzelstukken = [];
while($row =mysqli_fetch_assoc($result))
{
  $puzzelstukken[] = $row;
}

//nummer1 (dis is zeer slecht)
$id = $puzzelstukken[0]["id"];

    $sql = "SELECT id,stuk FROM Puzzelstuk WHERE puzzelId=" . $id;
    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection)); 

    $antwoorden = [];
    while($row =mysqli_fetch_assoc($result))
    {
        $antwoorden[] = $row;
    }

    $puzzelstukken[0]["antwoorden"]= $antwoorden;

    

    //nummer 2

    $id = $puzzelstukken[1]["id"];

    $sql = "SELECT id,stuk FROM Puzzelstuk WHERE puzzelId=" . $id;
    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection)); 

    $antwoorden = [];
    while($row =mysqli_fetch_assoc($result))
    {
        $antwoorden[] = $row;
    }

    $puzzelstukken[1]["antwoorden"]= $antwoorden;

    

    // nummer 3

    $id = $puzzelstukken[2]["id"];

    $sql = "SELECT id,stuk FROM Puzzelstuk WHERE puzzelId=" . $id;
    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection)); 

    $antwoorden = [];
    while($row =mysqli_fetch_assoc($result))
    {
        $antwoorden[] = $row;
    }

    $puzzelstukken[2]["antwoorden"]= $antwoorden;

    


/*
foreach($puzzelstukken as $puzzelstuk) {
    $id = $puzzelstuk["id"];

    $sql = "SELECT id,stuk FROM Puzzelstuk WHERE puzzelId=" . $id;
    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection)); 

    $antwoorden = [];
    while($row =mysqli_fetch_assoc($result))
    {
        $antwoorden[] = $row;
    }

    $puzzelstuk["antwoorden"] = $antwoorden;
    print_r($puzzelstuk);
    


}*/



$puzzelstukken[0]["antwoord"] = 1;




/*
//create antwoorden

// DB query
$sql = "SELECT antwoord FROM Antwoord WHERE vraagId=" . $vraag["id"];
$result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));


$antwoorden = [];
while($row =mysqli_fetch_assoc($result))
{
  $antwoorden[] = $row;
}

*/

// close the db connection
mysqli_close($connection);

//$vraag["antwoorden"] = $antwoorden;

// send JSON to browser
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
echo json_encode($puzzelstukken);


?>
<?php

if ( isset($_POST["email"]) && isset($_POST["pass"]) ) {
    // --- --- --- Conectarse a la DB --- --- ---

    // Definir Credenciales
    /*
    define("DB_HOST", "sql102.epizy.com");
    define("DB_USER", "epiz_25410738");
    define("DB_PASS", "lfLCJ8iUYWOLc5");
    define("DB_NAME", "epiz_25410738_escuela");

    // Conectarse a la db
    try {
        $DB = new PDO("mysql:host=".DB_HOST."; dbname=".DB_NAME, DB_USER, DB_PASS);
        $DB->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $DB->exec("SET CHARACTER SET ".DB_CHARSET);
    } catch (Exception $e) {
        die( "Error: " . $e->GetMessage() );
    }
    */



    // --- --- --- Realizar consulta --- --- ---
    /*
    $query = "SELECT * FROM 602f WHERE nombre = :email AND ce = :pass";
    $responseQuery = $DB->prepare( $query );
    $email = $_POST["email"];
    $pass = $_POST["pass"];
    $responseQuery->execute( array("email"=>$email, "pass"=>$pass) );
    */



    // --- --- --- Responder --- --- ---
    //if ( $user = $responseQuery->fetch(PDO::FETCH_ASSOC) ) {
    if ( $_POST["email"] == "Matemáticas23" && $_POST["pass"] == "Matemáticas73" ) {
        include "../assets/scripts_php/session-start.php";
        $_SESSION["email"] = "";//$_POST["email"];
        $_SESSION["name"] = "";//$user["name"];
        echo "ok";
    } else
        echo "Verifica el usuario";



    // --- --- --- Finalizar --- --- ---
    $responseQuery->closeCursor();
    $DB = null;
} else
    header( "Location:how-did-you-get-here.php" );
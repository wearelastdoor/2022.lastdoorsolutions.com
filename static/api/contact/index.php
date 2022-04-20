<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['name']) && empty($_POST['email'])) die();

if ($_POST)
	{

	// set response code - 200 OK

	http_response_code(200);
	$subject = $_POST['name'];
	$to = "hello@lastdoorsolutions.com";
	$from = $_POST['email'];

	// data

	$msg = "Full Name: ".$_POST['name'] ."\r\n Email: ". $_POST['email']. "\r\n Purpose: " . $_POST['purpose']."\r\n  Budget: " . $_POST['budget'] . "\r\n Message: ".$_POST['message'];

	// Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	mail($to, $subject, $msg, $headers);

	// echo json_encode( $_POST );

	echojson_encode(array(
		"sent" => true
	));
	}
  else
	{

	// tell the user about error

	echojson_encode(["sent" => false, "message" => "Something went wrong"]);
	}

	
	header("Location:thankyou.html")

?>
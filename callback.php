<?php

$clientID = '98365dc2488fac0100db';
$clientSecret = '6cda867c8a945cadb677161322d2abd270c92d69'; 
$redirectUri = 'https://jigavilanes1.github.io/PracticaOAuth/callback.php'; 

session_start();
if (empty($_GET['state']) || $_GET['state'] !== $_SESSION['github_oauth_state']) {
    die("Error: El estado de CSRF no coincide.");
}

if (isset($_GET['code'])) {
    $code = $_GET['code'];

    $tokenUrl = "https://github.com/login/oauth/access_token";
    $postData = [
        'client_id' => $clientID,
        'client_secret' => $clientSecret,
        'code' => $code,
        'redirect_uri' => $redirectUri,
    ];

    $ch = curl_init($tokenUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Accept: application/json']);

    $response = curl_exec($ch);
    curl_close($ch);

    $data = json_decode($response, true);
    session_start();
    $_SESSION['github_access_token'] = $data['access_token'];

    header("Location: https://jigavilanes1.github.io/PracticaOAuth");
    exit;
} else {
    die("Error: No se proporcionó el código de autorización.");
}
?>

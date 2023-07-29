<?php

$clientID = 'c71e9e50f4d204643cbd';
$clientSecret = '575df0188a93f834632ae71ee058aaad00d63b8c'; 
$redirectUri = 'https://jigavilanes1.github.io/LandingPage_CODIGO/calback.php'; 

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

    header("Location: https://jigavilanes1.github.io/LandingPage_CODIGO/");
    exit;
} else {
    die("Error: No se proporcionó el código de autorización.");
}
?>
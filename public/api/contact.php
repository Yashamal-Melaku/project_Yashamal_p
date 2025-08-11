<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed']);
    exit();
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Validate input
if (!$input || !isset($input['name']) || !isset($input['email']) || !isset($input['message'])) {
    http_response_code(400);
    echo json_encode(['message' => 'Missing required fields']);
    exit();
}

$name = trim($input['name']);
$email = trim($input['email']);
$message = trim($input['message']);

// Basic validation
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['message' => 'All fields are required']);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid email address']);
    exit();
}

// Sanitize input
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// Email configuration
$to = 'yashamalmelaku@gmail.com';
$subject = 'New Contact Form Message from ' . $name;
$headers = [
    'From: ' . $email,
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/html; charset=UTF-8'
];

// Email body
$emailBody = "
<html>
<head>
    <title>New Contact Form Message</title>
</head>
<body>
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> {$name}</p>
    <p><strong>Email:</strong> {$email}</p>
    <p><strong>Message:</strong></p>
    <p>{$message}</p>
    <hr>
    <p><small>This message was sent from your portfolio website contact form.</small></p>
</body>
</html>
";

// Try to send email
try {
    $success = mail($to, $subject, $emailBody, implode("\r\n", $headers));
    
    if ($success) {
        // Log the message (optional)
        $logEntry = date('Y-m-d H:i:s') . " - Message from: {$name} ({$email})\n";
        file_put_contents('contact_log.txt', $logEntry, FILE_APPEND | LOCK_EX);
        
        http_response_code(200);
        echo json_encode(['message' => 'Message sent successfully']);
    } else {
        http_response_code(500);
        echo json_encode(['message' => 'Failed to send message. Please try again later.']);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['message' => 'Server error. Please try again later.']);
}
?>
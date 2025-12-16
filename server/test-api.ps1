$body = @{
    name = "Test User"
    email = "test@example.com"
    message = "This is a test message from the portfolio contact form!"
} | ConvertTo-Json

$response = Invoke-RestMethod -Uri "http://localhost:5000/api/contact" -Method POST -Body $body -ContentType "application/json"

Write-Host "Response:" -ForegroundColor Green
$response | ConvertTo-Json

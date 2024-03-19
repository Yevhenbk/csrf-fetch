class CorsMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Get the response
        response = self.get_response(request)
        
        # Add CORS headers
        response["Access-Control-Allow-Origin"] = "http://localhost:3000"  # Replace with your actual frontend domain
        response["Access-Control-Allow-Methods"] = "POST, GET, OPTIONS"  # Specify the allowed methods
        response["Access-Control-Allow-Headers"] = 'Content-Type, x-csrftoken'  # Specify the allowed headers
        response["Access-Control-Allow-Credentials"] = "true"  # Indicate that credentials (cookies) can be sent
        
        return response
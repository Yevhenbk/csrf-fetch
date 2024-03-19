# Csrf Protection Django

## Overview
Although implementing authentication in Next.js directly considered good practice and you may benefit from generating JWT tokens and storing them securely in HTTP-only cookies, which would simplify 
frontend development, however, it may not be suitable for applications with complex authorization requirements or sensitive data, as all logic is exposed to the client. One way of doing that would be
setting up authentication endpoints and managing user sessions on a backend server. But how do we handle cross-origin requests (CORS) and manage authentication tokens securely, while integrating with 
Next.js?

In this simple example we set up basic authentication methods with csrf protection in django, after which, as mentioned previously, we handle CORS via fetching csrf token from our server and storing its 
value in a browser cookie header that later we will use to send requests and perform authentication operations on the client; for this, we will use an alternative to server actions in Next 14, while keeping 
server over client hierarchy.

## Technologies Used
- Django
- Django REST Framework
- Requests library
- Next 14

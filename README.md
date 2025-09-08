# CSRF Protection Django

## Overview
Although implementing authentication in Next.js directly considered good practice and you may benefit from generating JWT tokens and storing them securely in HTTP-only cookies, which would simplify 
frontend development, however, it may not be suitable for applications with complex authorization requirements or sensitive data, as all logic is exposed to the client. One way of doing that would be
setting up authentication endpoints and managing user sessions on a backend server. But how do we handle cross-origin requests (CORS) and manage authentication tokens securely, while integrating with 
Next.js?

In this simple example we set up basic authentication methods with CSRF protection in django, after which, as mentioned previously, we handle CORS via fetching CSRF token from our server and storing its 
value in a browser cookie header that later will be used to send requests and perform authentication operations on the client; for this, we will use Next 14 server actions, AuthContext, and custom hooks.


> In this example, we use store management and custom hooks (with useState & useEffect) to manage authentication and > CSRF tokens. This requires certain components to be marked with "use client" at the top. 

> It's important to note that "use client" does not mean the component is only rendered on the client. Components with "use client" can still be server-side rendered (SSR, ISR, or SSG) by Next.js, and then hydrated on the client for interactivity. The key difference is that client components can use React state, effects, and browser APIs, while server components cannot.

> If you do not use "use client", your component is a server component: it runs only on the server, cannot use React state or effects, and is sent to the browser as static HTML/JSON with no interactivity or hydration.

> In summary: use "use client" for components that need interactivity, state, or browser APIs (like authentication and CSRF handling). Use server components for static or data-fetching logic that does not depend on the browser or user input.

## Technologies Used
- Django
- Django REST Framework
- Requests library
- Next 14

## Setup Instructions

To start the app run these commands inside the project

> On the server

```bash
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

> On the client

```bash
npm install
npm run dev
```

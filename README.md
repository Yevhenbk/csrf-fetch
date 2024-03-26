# CSRF Protection Django

## Overview
Although implementing authentication in Next.js directly considered good practice and you may benefit from generating JWT tokens and storing them securely in HTTP-only cookies, which would simplify 
frontend development, however, it may not be suitable for applications with complex authorization requirements or sensitive data, as all logic is exposed to the client. One way of doing that would be
setting up authentication endpoints and managing user sessions on a backend server. But how do we handle cross-origin requests (CORS) and manage authentication tokens securely, while integrating with 
Next.js?

In this simple example we set up basic authentication methods with CSRF protection in django, after which, as mentioned previously, we handle CORS via fetching CSRF token from our server and storing its 
value in a browser cookie header that later will be used to send requests and perform authentication operations on the client; for this, we will use Next 14 server actions, AuthContext, and custom hooks.

### Important!

In this example, we will be using store management along with custom hooks that involve useState & useEffect, meaning the application has to be switched to "use client". However, since the release, many 
people confuse client components with client-side rendering (CSR) and try to avoid using them while maintaining the server-over-client hierarchy. This is a misunderstanding, since the difference between 
declaring "use client" and not is that in the case of the first the component gets prerendered with SSR or ISR/SSG if possible on the server; the HTML & JavaScript are being sent to the client and that's 
where it gets hydrated. In the case of not using client, the component gets executed on the server where the resulting data is embedded into the HTML as JSON format so the React Renderer can render it. Its 
JavaScript is NOT sent to the client so it does not get hydrated and is, therefore, not interactive.

To sum up, using or not using client only changes the way for you to write code: either it is the new way of fetching via server or the old-fashioned Next 12 kind of with state management.

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

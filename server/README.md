# Django Chatbot Medication Information

## Overview
Pharmchat is a Django application designed to facilitate communication between users and an AI chatbot for medication information retrieval. It provides a user-friendly chat interface, stores chat data in the database, and enables users to create and manage chat sessions.

## Features
- Chat Interface: Users can interact with the AI chatbot through a user-friendly chat interface.
- Medication Information Retrieval: The application retrieves medication information based on user queries and displays it in the chat interface.
- Chat Data Storage: Pharmchat stores user interactions and medication information in the database for future reference.
- Session Management: Users can create and manage chat sessions, allowing them to organize conversations based on specific topics or purposes.

## Technologies Used
- Django
- Django REST Framework
- Transformers library
- Requests library

## Setup Instructions

> To start the app run this command inside the project

```bash
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

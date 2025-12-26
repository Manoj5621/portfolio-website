# Backend Architecture Design for Contact Form

## Overview
The backend for the contact form will be built using FastAPI, a modern, fast web framework for building APIs with Python. It will handle form submissions from the frontend, validate input data, send notification emails to the portfolio owner, and send auto-reply emails to users. The system emphasizes security, reliability, and ease of integration.

## Project Structure
```
backend/
├── main.py                 # FastAPI application entry point
├── requirements.txt        # Python dependencies
├── .env                    # Environment variables (not committed)
├── .env.example            # Example environment file
├── app/
│   ├── __init__.py
│   ├── routers/
│   │   ├── __init__.py
│   │   └── contact.py      # Contact form endpoint
│   ├── models/
│   │   ├── __init__.py
│   │   └── contact.py      # Pydantic models for validation
│   ├── services/
│   │   ├── __init__.py
│   │   └── email_service.py # SMTP email sending logic
│   ├── middleware/
│   │   ├── __init__.py
│   │   └── rate_limiting.py # Rate limiting middleware
│   └── config.py           # Configuration and environment variables
```

## Dependencies
- `fastapi`: Web framework for building APIs
- `uvicorn`: ASGI server for running FastAPI
- `pydantic`: Data validation and serialization
- `python-multipart`: Handling multipart form data
- `python-dotenv`: Loading environment variables
- `email-validator`: Email validation
- `slowapi`: Rate limiting
- `python-jose[cryptography]`: JWT handling (if needed for future auth)

## API Endpoints
- `POST /api/contact`: Accepts contact form data (name, email, message), validates it, sends emails, and returns success/error response.

## Key Components
- **Contact Router**: Handles the `/api/contact` endpoint, processes POST requests.
- **Pydantic Models**: Defines data structures for contact form payload with validation rules.
- **Email Service**: Manages SMTP connections and sends emails using Python's `smtplib`.
- **Configuration**: Loads and manages environment variables for SMTP settings, CORS origins, etc.
- **Middleware**: Includes CORS, rate limiting, and error handling.

## Security Features
- **CORS**: Configured to allow requests from the frontend domain.
- **Rate Limiting**: Basic rate limiting to prevent abuse (e.g., 5 requests per minute per IP).
- **Input Sanitization**: Pydantic validation ensures data types and formats; additional sanitization for strings to prevent injection.
- **Error Handling**: Comprehensive error responses without exposing sensitive information.
- **Environment Variables**: Sensitive data like SMTP credentials stored securely.

## Environment Variable Management
Key variables:
- `SMTP_SERVER`: SMTP server address
- `SMTP_PORT`: SMTP port
- `SMTP_USERNAME`: SMTP username
- `SMTP_PASSWORD`: SMTP password
- `OWNER_EMAIL`: Portfolio owner's email
- `AUTO_REPLY_SUBJECT`: Subject for auto-reply emails
- `AUTO_REPLY_BODY`: Body template for auto-reply
- `CORS_ORIGINS`: Allowed origins for CORS

## Integration Points with Frontend
The frontend (React app) will send a POST request to `/api/contact` with JSON payload containing `name`, `email`, and `message`. Upon success, the backend responds with a 200 status and a success message. On failure, it returns appropriate error codes (400 for validation errors, 500 for server errors). The frontend should handle these responses to show user feedback.

## System Architecture Diagram
```mermaid
graph TD
    A[Frontend Contact Form] -->|POST /api/contact| B[FastAPI App]
    B --> C[Pydantic Validation]
    C --> D[Email Service]
    D --> E[SMTP Server]
    E --> F[Owner Email Notification]
    E --> G[User Auto-Reply]
    B --> H[CORS Middleware]
    B --> I[Rate Limiting Middleware]
    B --> J[Error Handling]
    K[Environment Config] --> B
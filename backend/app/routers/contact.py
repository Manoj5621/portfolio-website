from fastapi import APIRouter
from app.models.contact import ContactRequest, ContactResponse
from app.services.email_service import EmailService

router = APIRouter()
email_service = EmailService()

@router.post("/contact", response_model=ContactResponse)
async def submit_contact_form(contact: ContactRequest):
    try:
        # Send notification to owner
        owner_success = email_service.send_owner_notification(
            contact.name, contact.email, contact.message
        )

        # Send auto-reply to user
        user_success = email_service.send_auto_reply(contact.email)

        if owner_success and user_success:
            return ContactResponse(
                status="success",
                message="Message sent successfully and auto-reply delivered"
            )
        else:
            return ContactResponse(
                status="error",
                message="Failed to send message"
            )
    except Exception as e:
        return ContactResponse(
            status="error",
            message="Failed to send message"
        )
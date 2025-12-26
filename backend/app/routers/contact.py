from fastapi import APIRouter, HTTPException
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
                success=True,
                message="Message sent successfully!"
            )
        else:
            raise HTTPException(
                status_code=500,
                detail="Failed to send emails. Please try again later."
            )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail="An error occurred while processing your request."
        )
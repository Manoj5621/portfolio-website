from pydantic import BaseModel, EmailStr, validator
from typing import Optional

class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    message: str

    @validator('name')
    def name_must_not_be_empty(cls, v):
        if not v.strip():
            raise ValueError('Name cannot be empty')
        return v.strip()

    @validator('message')
    def message_must_not_be_empty(cls, v):
        if not v.strip():
            raise ValueError('Message cannot be empty')
        return v.strip()

class ContactResponse(BaseModel):
    status: str
    message: str
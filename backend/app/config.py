from pydantic_settings import BaseSettings
from typing import List
import os

class Settings(BaseSettings):
    smtp_server: str
    smtp_port: int = 587
    smtp_username: str
    smtp_password: str
    owner_email: str
    auto_reply_subject: str = "Thanks for contacting me"
    auto_reply_body: str = "Thanks for contacting me, I’ll get back to you."
    cors_origins_str: str = "http://localhost:3000"
    rate_limit_requests: int = 5

    @property
    def cors_origins(self) -> List[str]:
        return [origin.strip() for origin in self.cors_origins_str.split(",")]

    class Config:
        env_file = ".env"

settings = Settings()
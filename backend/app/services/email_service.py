import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Optional
from app.config import settings

class EmailService:
    def __init__(self):
        self.smtp_server = settings.smtp_server
        self.smtp_port = settings.smtp_port
        self.username = settings.smtp_username
        self.password = settings.smtp_password

    def send_email(self, to_email: str, subject: str, body: str):
        msg = MIMEMultipart()
        msg['From'] = self.username
        msg['To'] = to_email
        msg['Subject'] = subject

        msg.attach(MIMEText(body, 'plain'))

        try:
            print(f"Attempting to connect to SMTP server: {self.smtp_server}:{self.smtp_port}")
            server = smtplib.SMTP(self.smtp_server, self.smtp_port)
            print("SMTP connection established. Starting TLS...")
            server.starttls()
            print(f"Attempting login with username: {self.username}")
            server.login(self.username, self.password)
            print("Login successful. Preparing to send email...")
            text = msg.as_string()
            server.sendmail(self.username, to_email, text)
            print("Email sent successfully.")
            server.quit()
            return True
        except Exception as e:
            print(f"Failed to send email: {e}")
            return False

    def send_owner_notification(self, name: str, email: str, message: str):
        subject = f"New Contact Form Submission from {name}"
        body = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"
        return self.send_email(settings.owner_email, subject, body)

    def send_auto_reply(self, user_email: str):
        subject = settings.auto_reply_subject
        body = settings.auto_reply_body
        return self.send_email(user_email, subject, body)
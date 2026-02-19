"""Upload API routes."""

from fastapi import APIRouter, UploadFile

router = APIRouter(prefix="/upload", tags=["upload"])


@router.post("/")
async def upload_file(file: UploadFile) -> dict[str, str]:
    """Accept file upload (stub)."""
    return {"filename": file.filename or "unknown", "status": "received"}

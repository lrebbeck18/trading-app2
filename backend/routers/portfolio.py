"""Portfolio API routes."""

from fastapi import APIRouter

router = APIRouter(prefix="/portfolio", tags=["portfolio"])


@router.get("/")
async def get_portfolio() -> list[object]:
    """Return portfolio positions (stub)."""
    return []

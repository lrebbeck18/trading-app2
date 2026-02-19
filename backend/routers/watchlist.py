"""Watchlist API routes."""

from fastapi import APIRouter

router = APIRouter(prefix="/watchlist", tags=["watchlist"])


@router.get("/")
async def get_watchlist() -> list[object]:
    """Return watchlist symbols (stub)."""
    return []

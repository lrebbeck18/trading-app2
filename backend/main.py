"""Trading dashboard API."""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.routers import portfolio, watchlist, upload

app = FastAPI(title="Trading Dashboard API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(portfolio.router)
app.include_router(watchlist.router)
app.include_router(upload.router)


@app.get("/health")
async def health() -> dict[str, str]:
    """Health check."""
    return {"status": "ok"}

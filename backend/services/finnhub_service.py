"""Finnhub API client for market data."""

import os
from finnhub import Client


def get_client() -> Client:
    """Return a Finnhub client using FINNHUB_API_KEY from env."""
    api_key = os.getenv("FINNHUB_API_KEY", "")
    return Client(api_key=api_key)

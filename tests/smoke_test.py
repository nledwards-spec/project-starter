"""Smoke tests for the project-starter health endpoint."""

import os
import requests

BASE_URL = os.environ.get("BASE_URL", "http://localhost:3000")


def test_health_returns_200():
    response = requests.get(f"{BASE_URL}/api/health")
    assert response.status_code == 200, f"Expected 200, got {response.status_code}"


def test_health_returns_ok_status():
    response = requests.get(f"{BASE_URL}/api/health")
    data = response.json()
    assert data.get("status") == "ok", f"Expected status 'ok', got {data.get('status')}"


def test_health_returns_timestamp():
    response = requests.get(f"{BASE_URL}/api/health")
    data = response.json()
    assert "timestamp" in data, "Response missing 'timestamp' field"
    assert isinstance(data["timestamp"], str), "Timestamp should be a string"
    assert len(data["timestamp"]) > 0, "Timestamp should not be empty"

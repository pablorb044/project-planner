
import hashlib
import secrets


def generate_project_key() -> str:
    """Generate a cryptographically secure project access key."""
    return secrets.token_urlsafe(32)


def hash_project_key(key: str) -> str:
    """Return the SHA-256 hash of a project access key."""
    return hashlib.sha256(key.encode("utf-8")).hexdigest()

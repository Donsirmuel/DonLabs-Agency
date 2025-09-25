from typing import Any

class DefaultRouter:
    def register(self, prefix: str, viewset: Any, basename: str | None = None) -> None: ...

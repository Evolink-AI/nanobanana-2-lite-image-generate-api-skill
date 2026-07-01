# Task Lifecycle

1. `pending`: task accepted.
2. `processing`: task is being processed.
3. `completed`: final result is available.
4. `failed`: inspect the error body.

Clients must handle timeout or max polling attempts.

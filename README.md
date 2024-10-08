# API-Limiter

An API rate-limiting service built using **Node.js** and **Redis**. This rate limiter restricts the number of requests a client can make to your API within a certain time window, ensuring your service remains protected from abuse or excessive traffic.

---

## Features

- **Simple and efficient** API request limiting
- **Customizable** rate-limiting policies (requests per minute, hour, etc.)
- Utilizes **Redis** as an in-memory data store for tracking request counts and TTL (time-to-live) of limits
- Easily **extendable** to multiple APIs or routes
- **Dockerized** for easy deployment

---

## Requirements

- **Node.js** (>= 14.x)
- **Docker** and **Docker Compose** (for Redis setup)
- **Redis** (for tracking API limits)

---

## Technologies Used

- **Node.js**: Backend runtime for the API logic.
- **Express**: Web framework for building APIs.
- **Redis**: In-memory data structure store used for rate-limiting data.
- **Docker**: For containerizing the Redis server.

---



# HTTP Responder

HTTP Responder is a simple Next.js API project that provides an endpoint to echo back the request body with a customizable HTTP status code. This project is designed to help developers test HTTP responses with different status codes.

## Features

- Accepts a `POST` request with a JSON body.
- Returns the same JSON body in the response.
- Allows specifying the HTTP status code via a query parameter.
- Validates the status code to ensure it is within the valid range (100–599).

## API Endpoint

### `POST /api/httpResponse`

#### Query Parameters
- `status` (optional): The HTTP status code to return. Defaults to `200`.

#### Request Body
The request body should be a valid JSON object.

#### Example Request
```bash
curl -X POST "http://localhost:3000/api/httpResponse?status=200" \
-H "Content-Type: application/json" \
-d '{"key": "value"}'
```

#### Example Response
- **Status Code**: `200`
- **Response Body**:
  ```json
  {
    "key": "value"
  }
  ```

If an invalid status code is provided, the API will return:
- **Status Code**: `400`
- **Response Body**:
  ```json
  {
    "error": "Invalid status code"
  }
  ```

## Getting Started

### Prerequisites
- Node.js (v18 or later)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone git@github.com:christopherfanning/http-responder.git
   cd http-responder
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application
Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:3000`.

### Building for Production

Build the application:
```bash
npm run build
```
Start the production server:
```bash
npm run start
```

## Docker

### Building the Docker Image
```bash
docker build -t http-responder .
```

### Running the Docker Container
```bash
docker run -p 3000:3000 http-responder
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
src/
├── app/
│   └── api/
│       └── httpResponse/
│           └── route.ts  # API endpoint implementation
Dockerfile                # Docker configuration
```

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
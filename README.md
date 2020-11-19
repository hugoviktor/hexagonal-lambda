# AWS Lambda using Hexagonal Architecture

Demonstration project to accompany my [blog article on applying hexagonal architecture](https://sketchingdev.co.uk/blog/lets-apply-hexagonal-architecture.html).

![Architecture](docs/architecture.png)

### Curl
```http
curl --location --request POST 'https://xbivvfavrf.execute-api.us-east-1.amazonaws.com/v1/accounts' \
--header 'Content-Type: application/json' \
--data-raw '{
    "currency": "USD",
    "customer": "victor",
    "balance": 10.0
}'
```

### SQS Payload
```json
{"currency":"COP","customer":"victor","balance":100000}
```

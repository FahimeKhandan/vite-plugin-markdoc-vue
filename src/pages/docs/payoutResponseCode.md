
```ts
// Hello world
const a: string = "123"
const b: number = 345
```


```json 

{
"status": 1,
"data": {
  "wallet": 26099,
  "blocked_amount": 0,
  "deductible_amount": 26099,
  "currency": "Toman",
  "settlements": {
    "data": [
      {
        "id": "8edaa0a0-a33f-11ea-838d-676dce32760e",
        "iban_id": 22822, 
        "gateway_transaction_id": 159024236678,
        "amount": 100000,
        "payment_number": null,
        "status": "CANCELED",
        "wallet": 160985,
        "settlement_date": "2020-05-31",
        "description": "توضیحات"
      },
      {
        "id": "807003f0-8398-11ea-a42b-ede62b9de0c1",
        "iban_id": 902,
        "gateway_transaction_id": 158745010355,
        "amount": 50000,
        "payment_number": null,
        "status": "DONE",
        "wallet": 99485,
        "settlement_date": "2020-04-21",
        "description": "توضیحات"

      },
      {
        "id": "010a7850-82ff-11ea-85bd-49ef214903e3",
        "iban_id": 902,
        "gateway_transaction_id": 158738422601,
        "amount": 68000000,
        "payment_number": null,
        "status": "DONE",
        "wallet": 126485,
        "settlement_date": "2020-04-21",
        "description": "توضیحات"

      },
      {
        "id": "53665740-82cf-11ea-baf3-95ebee6a9eca",
        "iban_id": 26,
        "gateway_transaction_id": 158736374134,
        "amount": 15000000,
        "payment_number": null,
        "status": "CANCELED",
        "wallet": 43126485,
        "settlement_date": "2020-04-21",
        "description": "توضیحات"

      },
      {
        "id": "456afdb0-82cf-11ea-8e13-3183b5b1630b",
        "iban_id": 7215,
        "gateway_transaction_id": 158736367341,
        "amount": 5000000,
        "payment_number": null,
        "status": "CANCELED",
        "wallet": 58126485,
        "settlement_date": "2020-04-21",
        "description": "توضیحات"

      }
    ],
    "first": "https:\/\/api.vandar.io\/v2.1\/business\/{business}\/settlement?page=1",
    "last": "https:\/\/api.vandar.io\/v2.1\/business\/{business}\/settlement?page=19",
    "prev": null,
    "next": "https:\/\/api.vandar.io\/v2.1\/business\/{business}\/settlement?page=2",
    "current_page": 1,
    "from": 1,
    "last_page": 19,
    "path": "https:\/\/api.vandar.io\/v2.1\/business\/{business}\/settlement",
    "per_page": 5,
    "to": 5,
    "total": 93
  }
}
}
```
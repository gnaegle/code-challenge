This uses a Postgres database of apple sales to calculate the average daily sales for each seller.

The tables are set up in the following way:

Sales Table:
| Field Name | Type |
|------------|:--------------------------------------:|
| Id | Serial; Primary key |
| Day | text |
| SellerId | int; Foreign key to Id in Seller table |
| ApplesSold | int |

Seller Table:
| Field Name | Type |
|------------|:--------------------------------------:|
| Id | Serial; Primary key |
| Name | text |



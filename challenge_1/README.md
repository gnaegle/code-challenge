# Introduction

This is a NodeJS app that uses a Postgres database of apple sales to calculate the average daily sales for each seller and displays it on a graph.

# Explanation of Approach

The tables described in the challenge resembled relational database tables, so I decided to store the apple sales data in a erlational database. I have recently worked with the NodeJS library for Postgres databases, so it came to mind when deciding what database and what language to use for this implementation. 

To calculate these averages, I decided to first get all the sellers data from the database. Then, I looped through each seller and retrieved the sales data for each seller. Using this sales data, I was able to calculate the average.

For the graphing, I built an Express app and used a Javascript library called Chart.js. I simply calculate the averages as described above and pass that data to a EJS template that contains all the graph configurations. This approach was mainly selected because I could not get any NodeJS graphing libraries to install, but I am pretty certain this route was much easier anyways.

# Installation

To install, you just need to execute the following command:

```
# npm i
```

# Usage 

The find_averages.js file will simply print out the average daily sales for each seller. It is run with the following command:

```
# node find_averages.js
```

To use the graphing UI, start the Express server with the following command:

```
# node app.js
```

Now, in a web browser, visit http://localhost:8080 on the machine where the server is running or http://<machine_ip>:8080 on a remote machine.

# Database Design

The database tables are set up in the following way:

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



# Green Scanner REST API
Written in NodeJS to be deployed on Azure's App Service (NodeJS 10 LTS) to connect a Flutter App to Azure SQL. 

## Packages
```MySQL```
```ExpressJS```

## Install

1. Run ```npm -i```
2. Deploy to Azure App Service via VCS Azure Services Plug In

## Methods
Contains 2 GET Methods which does a UPDATE and SELECT SQL Query to update and get the Customer's points.

### Things to Note
Ensure that the IP address is white listed on Azure's SQL and allow it to access other Azure's Services.

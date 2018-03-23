# project01
This Currency Converter app was designed using the "Hub and Spoke" design pattern or architecture.
I only needed the rates from USD to the currencies to calculate the rates between every possible
pair of them.
The USD serves as the central node and during conversion, every currency is converted to USD and then to the
other desired one. 
The object that contains the rates is in a mongo database. But to insert it into another
mongo database on another device, you need to run the "seeder.js" javascript file by typing
"node seeder.js" while mongo has been open.

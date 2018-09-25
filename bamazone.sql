 
CREATE DATABASE bamazone_db;
USE bamazone_db;

CREATE TABLE products(
  id integer not null auto_increment,
  productName varchar(100),
  departmentName varchar(100),
  productPrice float,
  productQuantity int,
  PRIMARY KEY (id)
);

  CREATE TABLE customer(
  id integer not null auto_increment,
  customerName varchar(100),
  customerMoney float,
  productPurchased float,
  PRIMARY KEY (id)
);


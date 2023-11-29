-- Drop the database if it exists
-- DROP DATABASE IF EXISTS microdb;

-- -- Create the database
-- CREATE DATABASE microdb;

-- Connect to the database
\c testdb;

-- Drop the table if it exists
DROP TABLE IF EXISTS TASKS;

-- Create the table
CREATE TABLE TASKS (
  id SERIAL PRIMARY KEY,
  task TEXT NOT NULL
);


INSERT INTO TASKS (task) VALUES('lorem ipsum dolor sit amet');
INSERT INTO TASKS (task) VALUES('consectetur adipisicing elit');
INSERT INTO TASKS (task) VALUES('laudantium esse eum ex qui');
INSERT INTO TASKS (task) VALUES('fugiat facilis similique illum');
INSERT INTO TASKS (task) VALUES('aliquid, tempora et excepturi');
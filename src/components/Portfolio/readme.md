<!-- //PROBLEM 1 -->
1. CREATE TABLE Customers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    email VARCHAR(255),
    address VARCHAR(255),
    phone_number VARCHAR(20)
);


<!-- //PROBLEM 2 -->
2. INSERT INTO Customers (name, email, address, phone_number)
VALUES
    ('John Doe', 'johndoe@example.com', '123 Main St, City', '1234567890'),
    ('Jane Smith', 'janesmith@example.com', '456 Elm St, Town', '9876543210'),
    ('Michael Johnson', 'michaeljohnson@example.com', '789 Oak St, Village', '4567890123'),
    ('Emily Davis', 'emilydavis@example.com', '321 Pine St, County', '9012345678'),
    ('David Wilson', 'davidwilson@example.com', '654 Maple St, State', '3456789012');



<!-- //PROBLEM 3 -->
3. SELECT * FROM Customers;
## output  -> +----+-----------------------+-----------------------+-------------------+--------------+
| id | name                  | email                 | address           | phone_number |
+----+-----------------------+-----------------------+-------------------+--------------+
| 1  | John Doe              | johndoe@example.com   | 123 Main St, City | 1234567890   |
| 2  | Jane Smith            | janesmith@example.com | 456 Elm St, Town  | 9876543210   |
| 3  | Michael Johnson       | michaeljohnson@example.com | 789 Oak St, Village | 4567890123 |
| 4  | Emily Davis           | emilydavis@example.com | 321 Pine St, County | 9012345678 |
| 5  | David Wilson          | davidwilson@example.com | 654 Maple St, State | 3456789012 |
+----+-----------------------+-----------------------+-------------------+--------------+



<!-- //PROBLEM 4-->
4. SELECT name, email FROM Customers;
## output 
+-----------------------+-----------------------+
| name                  | email                 |
+-----------------------+-----------------------+
| John Doe              | johndoe@example.com   |
| Jane Smith            | janesmith@example.com |
| Michael Johnson       | michaeljohnson@example.com |
| Emily Davis           | emilydavis@example.com |
| David Wilson          | davidwilson@example.com |
+-----------------------+-----------------------+


<!-- //PROBLEM 5 -->
5. SELECT * FROM Customers WHERE id = 3;

+----+-----------------------+-----------------------+-------------------+--------------+
| id | name                  | email                 | address           | phone_number |
+----+-----------------------+-----------------------+-------------------+--------------+
| 3  | Michael Johnson       | michaeljohnson@example.com | 789 Oak St, Village | 4567890123 |
+----+-----------------------+-----------------------+-------------------+--------------+


<!-- //PROBLEM 6 -->
6. SELECT * FROM Customers WHERE name LIKE 'A%';
+----+-----------------------+-----------------------+-------------------+--------------+
| id | name                  | email                 | address           | phone_number |
+----+-----------------------+-----------------------+-------------------+--------------+
| 1  | Alice Smith           | alice@example.com     | 123 Main St       | 1234567890   |
| 2  | Alex Johnson          | alex@example.com      | 456 Elm St        | 9876543210   |
| 3  | Amanda Davis          | amanda@example.com    | 789 Oak St        | 4567890123   |
+----+-----------------------+-----------------------+-------------------+--------------+



<!-- //PROBLEM 7 -->
7. SELECT * FROM Customers ORDER BY name DESC;
+----+-----------------------+-----------------------+-------------------+--------------+
| id | name                  | email                 | address           | phone_number |
+----+-----------------------+-----------------------+-------------------+--------------+
| 5  | John Doe              | johndoe@example.com   | 123 Main St       | 1234567890   |
| 4  | Jane Smith            | janesmith@example.com | 456 Elm St        | 9876543210   |
| 3  | David Wilson          | davidwilson@example.com | 789 Oak St      | 4567890123   |
| 2  | Alice Johnson         | alice@example.com     | 321 Pine St       | 9012345678   |
| 1  | Amanda Davis          | amanda@example.com    | 654 Maple St      | 3456789012   |
+----+-----------------------+-----------------------+-------------------+--------------+


<!-- //PROBLEM 8 -->
8. UPDATE Customers SET address = 'New Address' WHERE id = 4;


<!-- //PROBLEM 9 -->
9. SELECT * FROM Customers ORDER BY id ASC LIMIT 3;
+----+-----------------------+-----------------------+-------------------+--------------+
| id | name                  | email                 | address           | phone_number |
+----+-----------------------+-----------------------+-------------------+--------------+
| 1  | John Doe              | johndoe@example.com   | 123 Main St       | 1234567890   |
| 2  | Jane Smith            | janesmith@example.com | 456 Elm St        | 9876543210   |
| 3  | Michael Johnson       | michaeljohnson@example.com | 789 Oak St   | 4567890123   |
+----+-----------------------+-----------------------+-------------------+--------------+

<!-- //PROBLEM 10 -->
10. DELETE FROM Customers WHERE id = 2;


<!-- //PROBLEM 11 -->
11. SELECT COUNT(*) as customer_count FROM Customers;
+----------------+
| customer_count |
+----------------+
|       5        |
+----------------+

<!-- //PROBLEM 12 -->
12. SELECT * FROM Customers ORDER BY id ASC OFFSET 2;
+----+-----------------------+-----------------------+-------------------+--------------+
| id | name                  | email                 | address           | phone_number |
+----+-----------------------+-----------------------+-------------------+--------------+
| 3  | Michael Johnson       | michaeljohnson@example.com | 789 Oak St    | 4567890123   |
| 4  | Emily Davis           | emilydavis@example.com | 321 Pine St       | 9012345678   |
| 5  | David Wilson          | davidwilson@example.com | 654 Maple St      | 3456789012   |
+----+-----------------------+-----------------------+-------------------+--------------+

<!-- //PROBLEM 13 -->
13. SELECT * FROM Customers WHERE id > 2 AND name LIKE 'B%';

+----+-----------------------+-----------------------+-------------------+--------------+
| id | name                  | email                 | address           | phone_number |
+----+-----------------------+-----------------------+-------------------+--------------+
| 3  | Bob Smith             | bob@example.com       | 123 Main St       | 1234567890   |
| 4  | Ben Johnson           | ben@example.com       | 456 Elm St        | 9876543210   |
+----+-----------------------+-----------------------+-------------------+--------------+


<!-- //PROBLEM 14 -->
14. SELECT * FROM Customers WHERE id < 3 OR name LIKE '%s';

+----+-----------------------+-----------------------+-------------------+--------------+
| id | name                  | email                 | address           | phone_number |
+----+-----------------------+-----------------------+-------------------+--------------+
| 1  | John Doe              | johndoe@example.com   | 123 Main St       | 1234567890   |
| 2  | Jane Smith            | janesmith@example.com | 456 Elm St        | 9876543210   |
| 3  | Chris                 | chris@example.com     | 789 Oak St        | 4567890123   |
| 4  | Emily Davis           | emilydavis@example.com | 321 Pine St       | 9012345678   |
| 5  | James                 | james@example.com     | 654 Maple St      | 3456789012   |
+----+-----------------------+-----------------------+-------------------+--------------+


<!-- //PROBLEM 15 -->
15. SELECT * FROM Customers WHERE phone_number IS NULL OR phone_number = '';
+----+-----------------------+-----------------------+-------------------+--------------+
| id | name                  | email                 | address           | phone_number |
+----+-----------------------+-----------------------+-------------------+--------------+
| 3  | Michael Johnson       | michaeljohnson@example.com | 789 Oak St    |              |
| 4  | Emily Davis           | emilydavis@example.com | 321 Pine St       |              |
| 5  | David Wilson          | davidwilson@example.com | 654 Maple St      |              |
+----+-----------------------+-----------------------+-------------------+--------------+


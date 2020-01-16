/*user table*/
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(40),
    email VARCHAR(40),
    password TEXT
);
/*get_user_email*/
SELECT * FROM users
WHERE email = $1;

/*get_user*/
SELECT * FROM users
WHERE username = $1;

/*register_user*/
INSERT INTO users 
(username, email, password)
VALUES 
($1, $2, $3)
returning *;

/*products table*/
 CREATE TABLE products(
     product_id SERIAL PRIMARY KEY,
     img VARCHAR(200),
     product_name VARCHAR(32),
     product_price INT,
     description VARCHAR(40),
     category VARCHAR(32),
     formen BOOLEAN
 );








 /*products dummy data*/
 INSERT INTO products
 (img, product_name, product_price, description, category, formen),
 (),
 (),
 (),
 (),
 (),
 (),
 (),
 (),
 (),
 (),
 (),
 (),
 (),
 (),
 ()
 VALUES
 (),
 (),
 (),
 (),
 (),
 (),
 (),
 (),
 (),
 (),
 (),
 (),
 (),
 (),
 (),
 ();

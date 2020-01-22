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

/*forgot password*/
UPDATE users
SET password = $1
WHERE email = $2

/*products table*/
 CREATE TABLE products(
     product_id SERIAL PRIMARY KEY,
     img VARCHAR(200),
     product_name VARCHAR(60),
     product_price INT,
     description TEXT,
     category VARCHAR(32),
     formen BOOLEAN
 );




 /*products dummy data*/
INSERT INTO products
 (img, product_name, product_price, description, category, formen)
 VALUES
 ('https://via.placeholder.com/350x150', 'Baby Foot Exfoliation Foot Peel For Men', 22.99, 'The Baby Foot Peel for Men is formulated and designed especially for men. Our innovative foot care product will make your feet as smooth and soft as a babys foot.', 'skincare', true),
 ('https://via.placeholder.com/350x150', 'Derma-Nu Exfoliaton Facial Scrub for Men', 18.99, 'Using natural and organic ingredients to create a facial exfoliator for men to help prevent ingrown hairs, blackheads & dry skin conditions.', 'skincare', true),
 ('https://via.placeholder.com/350x150', 'Lubriderm Mens 3-In-1 Body Lotion w/ Light Fragrance', 11.99, 'A Body, Face & Post-Shave Lotion developed by dermatologist for Men. Its Aloe-Enriched formula helps soothe skin after shaving!', 'skincare', true),
 ('https://via.placeholder.com/350x150', 'KIEHLS NOURISHING SHAMPOO + CONDITIONER', 24.99, 'Two-in-one formula that removes build up in hair and beards and leaves hair lookin soft, healthy, and full', 'skincare', true),
 ('https://via.placeholder.com/350x150', 'Simple Beauty - Age-Defying Retinol Moisturizer', 42.99, 'High performing retinol crem that fights against signs of aging with a strong blend of retinol, peptides and natural botanicals', 'skincare', false),
 ('https://via.placeholder.com/350x150', 'Moisturizing & Brightening Vanilla Cream Body Butter', 36.99, 'Ultra-moisturizing blend of Shea, Cocoa butter, Coconut oil, essential oils blend nourishes & revitalize dry skin tone promoting a radiant, youthful appearance', 'skincare', false),
 ('https://via.placeholder.com/350x150', 'Charcoal Facial Mask', 44.99, 'This nutrient-rich kaolin clay mask with activated charcoal purifies and balances, absorbing excess oil and drawing out impurities. Salicylic and lactic acids aid in a gentle exfoliation, giving skin a smooth, polished look with a minimized appearance of pores. Perfect for those concerned with congestion and oily skin.', 'skincare', false),
 ('https://via.placeholder.com/350x150', 'Anti-Blemish Acne Spot Treatment', 22.95, 'A potent and effective spot remover. Its antibacterial properties of whhite tea destroy blemish causung bacteria.', 'skincare', false),
 ('https://via.placeholder.com/350x150', 'The Lashify Control Kit', 125.99, 'The award winning starter kit you need to Lashify those lashes', 'cosmetics', false),
 ('https://via.placeholder.com/350x150', 'Kiss Eyelashes', 5.95, 'Natural looking, light and soft as a feather lashes', 'cosmetics', false),
 ('https://via.placeholder.com/350x150', 'Tint Skin Hydrating Foundation', 39.99, 'A creamy foundation that compliments your skin. Blends effortleslly and evens out skin tone. The coverage control is all up to you.', 'cosmetics', false),
 ('https://via.placeholder.com/350x150', 'Naked Eyeshadow Palette', 36.99, 'The revolutionixed palette, loaded with 12 bronze-hued shadows.', 'cosmetics', false),
 ('https://via.placeholder.com/350x150', '10A Virgin Brazilian Curly Hair Wig', 43.99, 'Natural Black 100% Human Hair', 'hair', false),
 ('https://via.placeholder.com/350x150', 'Brazilian Straight Lace Front Wig', 82.99, 'Hot selling, modern silky smooth frontal. No shedding', 'hair', false),
 ('https://via.placeholder.com/350x150', 'Black Synthetic Braided Lace Front', 37.99, 'Soft and smooth Synthetic material. Natural looking and easy to wash', 'hair', false),
 ('https://via.placeholder.com/350x150', '100% Human Wavy 360 Frontal', 67.99, 'No shedding, no tangle. Soft and smooth hair', 'hair', false);

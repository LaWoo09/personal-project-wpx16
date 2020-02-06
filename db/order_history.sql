SELECT u.email, o.order_date, o.shipping_address, o.total
FROM orders o
INNER JOIN users u ON o.user_id = u.id
WHERE u.id = $1;
update products 
set product_name = $2,
url = $3,
price = $4
where id = $1; 
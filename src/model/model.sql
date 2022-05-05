CREATE TABLE users (
    users_id serial PRIMARY KEY,
    users_login text not null,
    users_password text not null,
    users_status text not null
);

CREATE TABLE category (
    category_id serial PRIMARY KEY,
    category_name text not null,
    status_active boolean
);

CREATE TABLE products (
    products_id serial PRIMARY KEY,
    products_name text not null,
    products_kg text not null,
    products_garanty text not null,
    products_size text not null,
    products_place text not null,
    products_description text not null,
    products_price text not null,
    products_new boolean,
    products_action text,
    products_f_img text not null,
    products_s_img text,
    products_t_img text,
    category_id int REFERENCES category(category_id),
    status_active boolean
);  

CREATE TABLE info_title (
    info_year text not null,
    info_users text not null,
    info_garanty text not null,
    info_time text not null
);

CREATE TABLE orders (
    orders_id serial PRIMARY KEY,
    orders_name text not null,
    orders_number text not null,
    orders_product text not null,
    orders_count int not null,
    status_active boolean
);

CREATE TABLE technologies (
    technologies_id serial PRIMARY KEY,
    technologies_i_name text,
    technologies_img text,
    technologies_video text,
    technologies_v_name text
);

CREATE TABLE customers (
    customers_id serial PRIMARY KEY,
    customers_date text not null,
    customers_phone text not null,
    status_active boolean
);

CREATE TABLE locations (
    locations_city text not null,
    locations_img text not null,
    locations_description text not null
);

SELECT * from info_title;

SELECT * FROM category;

SELECT * FROM products;

SELECT * FROM orders;

SELECT * FROM customers;

SELECT * FROM locations;

SELECT * FROM technologies;
INSERT INTO users (username, password, first_name, last_name, email, is_admin)
VALUES ('testuser',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'Test',
        'User',
        'joel@joelburton.com',
        FALSE),
       ('testadmin',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'Test',
        'Admin!',
        'joel@joelburton.com',
        TRUE);

INSERT INTO products (name, price, currency, image)
VALUES ('Basic Tee (Sienna)',
        3200,
        'USD',
        'https://epic-projects.nyc3.digitaloceanspaces.com/react-ecommerce/basic-tee-sienna.jpeg'),
       ('Basic Tee (Black)',
        3200,
        'USD',
        'https://epic-projects.nyc3.digitaloceanspaces.com/react-ecommerce/basic-tee-black.jpeg'),
       ('Nomad Tumbler',
       3500,
       'USD',
       'https://epic-projects.nyc3.digitaloceanspaces.com/react-ecommerce/nomad-tumbler.jpeg'),
       ('Artwork Tee',
       3200,
       'USD',
       'https://epic-projects.nyc3.digitaloceanspaces.com/react-ecommerce/artwork-tee.jpeg'),
       ('Billfold Wallet',
       11800,
       'USD',
       'https://epic-projects.nyc3.digitaloceanspaces.com/react-ecommerce/billfold-wallet.jpeg'),
       ('Mini Sketchbook Set',
       2800,
       'USD',
       'https://epic-projects.nyc3.digitaloceanspaces.com/react-ecommerce/mini-sketchbook-set.jpeg'),
       ('Organize Set',
       14900,
       'USD',
       'https://epic-projects.nyc3.digitaloceanspaces.com/react-ecommerce/organize-set.jpeg'),
       ('Machined Pen & Pencil',
       7000,
       'USD',
       'https://epic-projects.nyc3.digitaloceanspaces.com/react-ecommerce/machine-pen-pencil-set.jpeg');


INSERT INTO transactions (user_id, product_id, quantity, total_price)
VALUES
  ('testuser', 1, 2, 3200),
  ('testuser', 2, 1, 3200),
  ('testuser', 3, 3, 3500),
  ('testuser', 4, 1, 3200), 
  ('testadmin', 1, 2, 3200),
  ('testadmin', 3, 3, 3500);



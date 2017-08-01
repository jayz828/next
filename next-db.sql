DROP DATABASE next_db;
CREATE DATABASE next_db;
use next_db;

CREATE TABLE associates(
    id INT AUTO_INCREMENT PRIMARY KEY,
    password VARCHAR(20),
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    section VARCHAR(4),
    position VARCHAR(20)
    -- category INT NOT NULL

);


CREATE TABLE job_functions(
    id INT AUTO_INCREMENT PRIMARY KEY,
    job_function_name VARCHAR(100),
    re INT,
    item_time_type VARCHAR(5)
    -- CONSTRAINT FOREIGN KEY(question_id) REFERENCES questions(id)
    -- ON DELETE CASCADE
);

CREATE TABLE non_sched_categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    non_scheduled_name VARCHAR(100)

);


INSERT INTO job_functions (job_function_name, re, item_time_type) VALUES ('Bills Keyed', 20, 'Bills'),
('Reject Log', 20, 'Bills');


INSERT INTO non_sched_categories (non_scheduled_name) VALUES ('Celebrations'),
('Meetings'),
('Projects'),
('Classes'),
('Training Time'),
('Long Bills');

-- CREATE TABLE categories (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     category_name VARCHAR(30)
-- );

-- INSERT INTO categories 
-- (category_name) VALUES 
-- ('COMPTIA'),
-- ('MySQL'),
-- ('Databases'),
-- ('JavaScript');
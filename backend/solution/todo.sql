create database todo;

use todo;

create table todos (
id int auto_increment primary key,
title varchar(50) not null,
done_flag BOOLEAN DEFAULT FALSE,
deadline timestamp not null
);

INSERT INTO `todos` (`id`, `title`, `done_flag`, `deadline`) VALUES 
(1, 'Todo Pertama', false, '2019-10-01'),
(2, 'Todo Kedua', false, '2019-10-02');

select * from todos;
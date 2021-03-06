/*
* Вставка данных в таблицу t_address (информация об адресах)
*/
INSERT INTO t_address VALUES (1, '652523', 'Кемеровская область', 'Ленинск-Кузнецкий', 'Ленина', 67, 1);
INSERT INTO t_address (id, post_code, region, city, street, house, apartment) VALUES 
	(2, '534182', 'Кемеровская область', 'Новокузнецк', 'Кирова', 32, 1),
	(3, '534182', 'Кемеровская область', 'Новокузнецк', 'Кирова', 33, 2),
	(4, '642735', 'Томская область', 'Томск', 'Федора Лыткина', 10, 346),
	(5, '642735', 'Томская область', 'Томск', 'Федора Лыткина', 8, 642),
	(6, '642735', 'Томская область', 'Томск', 'Ленина', 12, 23),
	(7, '642735', 'Томская область', 'Томск', 'Ленина', 32, 1);

/*
* Вставка данных в таблицу t_pod (информация о подписчиках)
*/
INSERT INTO t_pod (id, fio, id_addr) VALUES
	(1, 'Иванов Иван Иванович', 2),
	(2, 'Сергеев Сергей Сергеевич', 3),
	(3, 'Дмитриев Дмитрий Дмитриевич', 4),
	(4, 'Антонов Антон Антонович', 5),
	(6, 'Петров Петр Петрович', 6),
	(7, 'Андреев Андрей Андреевич', 7);
	
/*
* Вставка данных в таблицу t_pub_house (список издательств)
*/
INSERT INTO t_pub_house (id, name, id_addr, phone) VALUES
	('123', 'Название издательства', 1, '(8951) 17-06-78'),
	('42131', 'Название издательства 2', 2, '(8904) 43-32-78');
	
/*
* Вставка данных в таблицу t_publishing (список публикаций)
*/
INSERT INTO t_publishing (id, id_pub_house, pub_name, description) VALUES
	('100000', '123', 'Имя публикации', 'Описание публикации'),
	('100001', '42131', 'Имя публикации 2', 'Описание публикации 2'),
	('100002', '42131', 'Имя публикации 3', 'Описание публикации 3');
	
/*
* Вставка данных в таблицу t_period (срок подписки на издание)
*/
INSERT INTO t_period (id_pub, period_name, period, price) VALUES
	('100000', 'Пол года', 6, 150),
	('100001', 'Год', 12, 300),
	('100002', '2 года', 24, 600);
	
/*
* Вставка данных в таблицу t_subs (список подписок)
*/
INSERT INTO t_subs (id_pod, date_start, id_pub, id_period, count) VALUES
	(1, '2021-11-06', '100001', 12, 2),
	(2, '2021-10-06', '100001', 12, 2),
	(3, '2020-12-12', '100001', 12, 2),
	(1, '2021-10-06', '100002', 24, 3),
	(2, '2000-12-09', '100002', 24, 3);
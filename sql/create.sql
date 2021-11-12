/*
* Справочник адресов READY
*/
CREATE TABLE IF NOT EXISTS t_address (
	id SERIAL PRIMARY KEY,
	post_code CHARACTER(6), -- CHECK (SIMILAR TO '([0-9]{6})'),
	region CHARACTER(30) NOT NULL,
	city CHARACTER(30) NOT NULL,
	street CHARACTER(50) NOT NULL,
	house INTEGER CHECK (house > 0) NOT NULL,
	apartment INTEGER CHECK (apartment > 0)
);

/*
* Таблица подписки READY
*/
CREATE TABLE IF NOT EXISTS t_pod (
	id SERIAL PRIMARY KEY,
	fio CHARACTER(85) NOT NULL,
	id_addr INTEGER REFERENCES t_address
);

/*
* Сведения об издательстве READY
*/
CREATE TABLE IF NOT EXISTS t_pub_house (
	id CHARACTER(7) PRIMARY KEY, --CHECK (SIMILAR TO '([0-9]{2,7})'),
	name CHARACTER(50) NOT NULL,
	id_addr INTEGER REFERENCES t_address,
	phone CHARACTER(15) --CHECK (SIMILAR TO '(\([0-9]{4}\)\s[0-9]{2}\-[0-9]{2}\-[0-9]{2})')
);

/*
* Сведения об издании READY
*/
CREATE TABLE IF NOT EXISTS t_publishing (
	id CHARACTER(6) PRIMARY KEY, --CHECK (SIMILAR TO '([1-9][0-9]{5})'),
	id_pub_house CHARACTER(7) REFERENCES t_pub_house,
	pub_name CHARACTER(50) NOT NULL,
	description CHARACTER(250)
);

/*
* Срок подписки на издание READY
*/
CREATE TABLE IF NOT EXISTS t_period (
	id_pub CHARACTER(6) REFERENCES t_publishing UNIQUE,
	period_name CHARACTER(20) NOT NULL,
	period INTEGER CHECK (period > 0) UNIQUE,
	price MONEY,
	PRIMARY KEY (id_pub, period)
);

/* 
* Сведения о подписке READY
*/
CREATE TABLE IF NOT EXISTS t_subs (
	id_pod INTEGER REFERENCES t_pod,
	date_start DATE NOT NULL,
	id_pub CHARACTER(6) NOT NULL,
	id_period INTEGER NOT NULL,
	count INTEGER CHECK (count > 0),
	PRIMARY KEY (id_pod, id_pub, id_period),
	FOREIGN KEY (id_pub) REFERENCES t_period (id_pub),
	FOREIGN KEY (id_period) REFERENCES t_period (period)
);
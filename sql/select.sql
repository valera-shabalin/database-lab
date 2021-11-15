/*
* Выбрать всех подписчиков указанного издания READY
*/
-- SELECT t_pod.fio 
-- FROM t_pod 
-- WHERE t_pod.id IN (SELECT id_pod from t_subs WHERE id_pub='100001');

-- SELECT t_pod.fio		-- вариант без вложенных запросов
-- FROM t_pod, t_subs
-- WHERE 
-- 	t_subs.id_pub='100001'
-- 	AND t_pod.id=t_subs.id_pod;

/*
* Для каждого издания посчитать количество подписчиков READY
*/
-- SELECT t_subs.id_pub, t_publishing.pub_name, COUNT(t_subs.id_pod) 
-- FROM t_subs, t_publishing
-- WHERE t_subs.id_pub=t_publishing.id
-- GROUP BY t_subs.id_pub, t_publishing.pub_name;

/*
* Получить действительный на указанную дату список подписчиков с указанием их адресов и изданий, на которые они подписаны READY
*/
-- SELECT t_pod.fio, t_address.region, t_subs.id_pub
-- FROM t_pod, t_address, t_subs, t_period
-- WHERE 
-- 	t_subs.date_start + (t_period.period * interval '1 month') >= NOW()
-- 	AND t_period.id_pub=t_subs.id_pub
-- 	AND t_pod.id_addr=t_address.id
-- 	AND t_pod.id=t_subs.id_pod;

/*
* Получить группы подписчиков, проживающих на одной улице в указанном городе, и отсортировать их по номерам домов READY
*/
SELECT t_pod.fio, t_address.street, t_address.house
FROM t_pod, t_address
WHERE 
	t_address.city='Томск'
	AND t_pod.id_addr=t_address.id
GROUP BY t_pod.fio, t_address.street, t_address.house
ORDER BY t_address.house;
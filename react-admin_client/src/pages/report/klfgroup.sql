CREATE TABLE `user`(
	`user_id` INT AUTO_INCREMENT PRIMARY KEY,
	`user_name` CHAR(20)
);

CREATE TABLE `activity`(
	`activity_id` INT AUTO_INCREMENT PRIMARY KEY,
	`activity_name` CHAR(20)
);

CREATE TABLE `user_report` (
	`user_id` INT,
	`activity_id` INT,
	`first_occurrence` TIMESTAMP,
	`last_occurrence` TIMESTAMP,
	`amount` INT DEFAULT 0,
	FOREIGN KEY(user_id) REFERENCES `user`(user_id),
	FOREIGN KEY(activity_id) REFERENCES `activity`(activity_id)
	
);
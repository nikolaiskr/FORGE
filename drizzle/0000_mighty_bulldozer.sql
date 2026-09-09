CREATE TABLE `daily_logs` (
	`date` text PRIMARY KEY NOT NULL,
	`workout_done` integer DEFAULT false NOT NULL,
	`food_done` integer DEFAULT false NOT NULL,
	`busy` integer DEFAULT false NOT NULL,
	`steps` integer DEFAULT 0 NOT NULL,
	`mood` integer DEFAULT 3 NOT NULL,
	`weight` text,
	`food` text DEFAULT '' NOT NULL,
	`exercises` text DEFAULT '[]' NOT NULL,
	`updated_at` text NOT NULL
);

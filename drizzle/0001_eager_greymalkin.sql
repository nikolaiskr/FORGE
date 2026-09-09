CREATE TABLE `profiles` (
	`user_id` text PRIMARY KEY NOT NULL,
	`display_name` text NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `user_daily_logs` (
	`user_id` text NOT NULL,
	`date` text NOT NULL,
	`workout_done` integer DEFAULT false NOT NULL,
	`food_done` integer DEFAULT false NOT NULL,
	`busy` integer DEFAULT false NOT NULL,
	`steps` integer DEFAULT 0 NOT NULL,
	`mood` integer DEFAULT 3 NOT NULL,
	`weight` text,
	`food` text DEFAULT '' NOT NULL,
	`exercises` text DEFAULT '[]' NOT NULL,
	`updated_at` text NOT NULL,
	PRIMARY KEY(`user_id`, `date`)
);

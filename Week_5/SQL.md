# SQL Intro

rows in tables are records
columns in tables are 

## Relational Databases

* all the tables are related to each other in some way
* all of our tables have structre, each record has the same field.

## Relational Database Management System

schema

SQL vs NoSQL

client 

### SELECT Challenges
```sql
 SELECT * FROM users  -> Selects everything
```
1. List total amount users.
If you look for a phone number, and the user doesnt have a phone number, you will get an inaccurate number

```sql
SELECT COUNT(*) FROM users;

SELECT COUNT(*) AS num_users FROM USERS
```

2. List all users over age of 18

Can put on multi-line. Semi-colon ends the command
```sql
SELECT *
FROM users
WHERE age > 18;
```

3. List users over age of 18 and have last name 'Barrows'

When youre searching the field, put single quotes

SQL is not case sensitive, but our field is
```sql
SELECT *
FROM users
WHERE age > 18 AND last_name = 'Barrows'
```

4. List users over the age of 18 who lives in Canada sorted by age from oldest to youngest and then last name alphabetically

Dont have to answer it all at once.

Default is ASC (accending) use DESC for deccending

If there is a tie for the first sort, the second kicks in
```sql
SELECT *
FROM users
WHERE age > 18 AND country = 'Canada'
ORDER BY age DESC, last_name ASC;
```

5. List users in Canada whos accounts are overdue.

Can also write '08/08/2022'
```sql
SELECT *
FROM users
WHERE country = 'Canada' AND payment_due_date < 'August 8, 2022';

-- We would have to write this everyday, use NOW to get current date and time

SELECT *
FROM users
WHERE country = 'Canada' AND payment_due_date < NOW();

-- Another way is to use CURRENT_DATE

SELECT *
FROM users
WHERE country = 'Canada' AND payment_due_date < CURRENT_DATE;
```

6. Show list of all countries ONCE (show what countries we are in, but only show each country once)
```sql
SELECT DISTINCT country
FROM users
ORDER BY country ASC;
```

## JOIN

albums
* id - PK
* album_name
* artist_name
* release_date

songs
* id - PK
* album_id - FK
* track_number
* song_name
* rating

7. List all albums with their songs
```sql
SELECT *
FROM albums
JOIN songs ON albums.id = songs.album_id -- Join songs table on albums table: id to be songs table: album_id
```
8. List all albums along with how many songs each album has
```sql
SELECT albums.*, COUNT(songs.id) AS num_songs -- Show me all info on albums, count the sum of id in songs. Change 'count' to show as 'num_songs'
FROM albums
JOIN songs ON albums.id = album_id
GROUP BY albums.id, albums.artist_name; -- Crush these 2 down to show up only once
```

9. Enchance previous query to only include albums that have more than 10 songs
```sql
-- Cant use AS in queries because SELECT runs after the other queries. Therefore we cant reference num_songs
SELECT albums.*, COUNT(songs.id) AS num_songs
FROM albums
JOIN songs ON albums.id = album_id
GROUP BY albums.id
HAVING COUNT(songs.id) > 10; -- Just added this line. Cant refer to num_songs, so we have to use COUNT again.

-- You could remove the first COUNT to not display number of songs and it will still work.
-- Filtering happens during HAVING
SELECT albums.*
FROM albums
JOIN songs ON albums.id = album_id
GROUP BY albums.id
HAVING COUNT(songs.id) > 10;
```
10. List ALL albums in the database, along with their songs if any
Theres an album with NO SONGS
```sql
-- LEFT JOIN means to show 100% of data FROM albums regardless if they have any data matching with songs.
SELECT *
FROM albums
LEFT JOIN songs ON albums.id = songs.album_id;
```

11. List albums along with the average song rating
```sql
SELECT albums.*, AVG(rating)
FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY albums.id; 
```

12. List albums and songs with rating higher than album average
```sql
SELECT albums.*, songs.*
FROM albums
JOIN songs ON albums.id = songs.album_id
WHERE songs.rating > (SELECT AVG(songs.rating) FROM songs WHERE songs.album_id = albums.id)
GROUP BY albums.id, songs.id;
```

 # PSQL Tips
  \l - shows all tables in psql
  \d - shows list of relations. shows sequence you can alter. (change id to 10,000 instead of 1)
  \dt - show list of relations, just the tables

COUNT will count all the data and return 1 value

GROUP BY will group all of the info that has the same value together so it doenst repeat itself. Crushing them down to a single value.

WHERE cant run math functions inside it. That is where Having comes in.

HAVING is similart to WHERE but can work in GROUP BY

The default JOIN method is INNER JOIN. The problem is that INNER JOIN only shows data that matches both sides.

LEFT JOIN includes all data for the first table mentioned
RIGHT JOIN is the same thing but for the second table mentioned.

FULL OUTER JOIN includes all data from both tables.

* How to show table per page
OFFSET = (pageNumber - 1) * limit

LIMIT 10 OFFSET 20
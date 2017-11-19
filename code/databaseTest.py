import sqlite3

connection = sqlite3.connect('data.db')

cursor = connection.cursor()

create_table = "CREATE TABLE IF NOT EXISTS student (id INTEGER PRIMARY KEY, username text, password text)"
cursor.execute(create_table)

create_table = "CREATE TABLE IF NOT EXISTS items (name text, price real)"
cursor.execute(create_table)

create_table = "CREATE TABLE IF NOT EXISTS feedbacks (id INTEGER PRIMARY KEY, username text, useremail text, subject text, message text)"
cursor.execute(create_table)

# insert_table = "INSERT INTO feedbacks VALUES(NULL, 'sudhakar', 'sudhakar@gmail.com', 'work more', 'work hard')"
# cursor.execute(insert_table)


connection.commit()

connection.close()

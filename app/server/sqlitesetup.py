import sqlite3
import time
import datetime

conn = sqlite3.connect('MovieTime.db')
c = conn.cursor()
users = ['Meredith', 'Patrick', 'Colby']
usersl = ['Parr', 'Baxter', 'Dolby']
usersids = [1234, 5678, 9012]
emails = [users[x] + '.' + usersl[x] + '@example.com' for x in range(len(users))]

def create_table():
    c.execute('CREATE TABLE IF NOT EXISTS TestloginCred(UserID INTEGER, FirstName TEXT, LastName TEXT, Email TEXT, AcctCreateDate TEXT)')

def data_entry():
    timer = time.time()
    creation_date = str(datetime.datetime.fromtimestamp(timer).strftime('%Y-%m'))
    for x in range(len(users)):
        c.execute('INSERT INTO TestloginCred VALUES (?, ?, ?, ?, ?)', (usersids[x], users[x], usersl[x], emails[x], creation_date))
    conn.commit()
    c.close()
    conn.close()

#create_table()
#data_entry()

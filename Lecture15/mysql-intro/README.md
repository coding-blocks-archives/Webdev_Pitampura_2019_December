

### Login to MySQL (as root)

```shell
mysql -u root -p
# or 
mysql -u root #without password
#or
sudo mysql #on ubuntu
```
### Create Database and User (inside MySQL)

```mysql
CREATE DATABASE mytestdb;

CREATE USER mytestuser IDENTIFIED WITH mysql_native_password BY 'mytestpass';

GRANT ALL PRIVILEGES ON mytestdb.* TO mytestuser;

FLUSH PRIVILEGES;

EXIT
```

### If there is Password policy problems 

```mysql
SET GLOBAL validate_password_policy=LOW;
```

### Login to MySQL (as the new user)

```shell
mysql -u mytestuser -p 

```

### Create Table 

```mysql
CREATE TABLE myfirsttable (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name TEXT
);
```

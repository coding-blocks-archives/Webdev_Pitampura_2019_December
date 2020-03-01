

### Database Setup

```mysql
create database realworldio;
create user conduit identified with mysql_native_password by 'conduit';
grant all privileges on realworldio.* to conduit;
flush privileges;
```

### PostMan Collection

<https://www.getpostman.com/collections/d1c1abc5884f119995ab>


### Database Setup

```mysql
create database realworldio;
create user conduit identified with mysql_native_password by 'conduit';
grant all privileges on realworldio.* to conduit;
flush privileges;
```
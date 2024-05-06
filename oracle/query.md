### Query

* Create a table from the exiting table
```sql
CREATE TABLE new_table AS SELECT * FROM existing_table;

CREATE TABLE new_table AS (SELECT column1, column2 FROM existing_table WHERE column1 = 'value');
```
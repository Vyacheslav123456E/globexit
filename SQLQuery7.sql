WITH CTE AS (
  SELECT
    c.id,
    c.name,
    s.name AS sub_name,
    s.id AS sub_id,
    s.parent_id,
    0 AS sub_level,
    c.age,
    COUNT(*) OVER (PARTITION BY s.id) AS colls_count
  FROM
    collaborators c
    INNER JOIN subdivisions s ON c.subdivision_id = s.id
  WHERE
    c.name = 'Сотрудник 1'
  
  UNION ALL
  
  SELECT
    c.id,
    c.name,
    s.name AS sub_name,
    s.id AS sub_id,
    s.parent_id,
    CTE.sub_level + 1 AS sub_level,
    c.age,
    COUNT(*) OVER (PARTITION BY s.id) AS colls_count
  FROM
    collaborators c
    INNER JOIN subdivisions s ON c.subdivision_id = s.id
    INNER JOIN CTE ON CTE.sub_id = s.parent_id
  WHERE
    c.age < 40
    AND LEN(c.name) > 11
    AND s.id NOT IN (100055, 100059)
)
SELECT
  id,
  name,
  sub_name,
  sub_id,
  sub_level,
  colls_count
FROM
  CTE
ORDER BY
  sub_level ASC
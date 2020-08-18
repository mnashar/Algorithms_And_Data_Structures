# Write your MySQL query statement below
select employee_id, team_size
from employee inner join
( select team_id, count(team_id) team_size
from Employee
group by team_id
) as teams
on employee.team_id =teams.team_id

-- https://leetcode.com/problems/last-person-to-fit-in-the-elevator/
SELECT person_name 
FROM (SELECT person_name, SUM(weight) OVER (ORDER BY turn) AS cumulative_weight FROM Queue) qc
WHERE cumulative_weight <= 1000
ORDER BY cumulative_weight DESC LIMIT 1;
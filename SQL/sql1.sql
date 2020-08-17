# Write your MySQL query statement below
select employee_id, team_size
from employee inner join
( select team_id, count(team_id) team_size
from Employee
group by team_id
) as teams
on employee.team_id =teams.team_id
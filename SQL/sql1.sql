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


SELECT
 gender,
 day,
 SUM(score_points) OVER (partition by gender order by day) as total
FROM scores
GROUP BY gender, day
ORDER BY gender, day;


# Write your MySQL query statement below
select 
patient_id , patient_name , conditions 
from
Patients
where
conditions like '%DIAB1%'
order by patient_id


# Write your MySQL query statement below
select 
Product.product_id , Product.product_name 
from
Product


where Product.product_id not in (

select product_id
from
Sales where sale_date not between '2019-01-01' and '2019-03-31'

) 


select distinct buyer_id
from Sales  join product
 on sales.product_id=product.product_id

where buyer_id not in 

(select buyer_id
from Sales join product
 on sales.product_id=product.product_id
where product_name='iPhone')

and  product_name='S8';


select seller_id
from sales
group by seller_id
having sum(price)=

(
    select max(summ)
from
(
select seller_id,sum(price) as summ
from Sales
group by seller_id
    ) as summ_table
    );


https://www.youtube.com/watch?v=KaPvDalVkZs
https://www.youtube.com/watch?v=IVMfDpCGwK4
https://www.youtube.com/watch?v=TzsrO4zTQj8
https://www.youtube.com/watch?v=3Cw2fuO5TG0
https://www.youtube.com/results?search_query=mysql+over+clause



## Hw1Version2 <br>
  #data from parent to child a  <br>
    1.set @input in the child .ts to get something from the parent// @input sname  <br>
    2.in parent : .html template property binding to [sname]="st"  <br>
    3.go to child {{sname}} .html  <br>
  #data form child to parent b  <br>
    1.set @ouput in child .ts @output oname then emit to a function with data to tranfer  <br>
    2.in parent  .html event binding (oname)="methodName($event)"  <br>
    3.in parent .ts and function methodName()  <br>
 

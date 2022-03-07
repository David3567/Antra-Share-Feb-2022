# AntraShares
This is the basic setting 5 modules:  Login, Profile, NewsFeed, Setting, Admin

#data from parent to child a
1.set @input in the child .ts to get something from the parent// @input sname
2.in parent : .html template property binding to [sname]="st"
3.go to child {{sname}} .html

#data form child to parent b
1.set @ouput in child .ts @output oname then emit to a function with data to tranfer
2.in parent .html event binding (oname)="methodName($event)"
3.in parent .ts and function methodName()ls

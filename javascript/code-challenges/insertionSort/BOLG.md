# Code challenge 26:

## Insertion Sort
<!-- Description of the challenge -->
- Write and implement a n insertion sort method to to sort an array by inspecting the elements from left to right and placing larger elements to the right of the smaller elements.  


## Pseudocode  
        
    InsertionSort(int[] arr)

    FOR i = 1 to arr.length

      int j <-- i - 1
      int temp <-- arr[i]

      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1

      arr[j + 1] <-- temp  
       

    


## Trace  

Sample Array: [8,20,5,3,2]  

- pass 1:  
In the first pass through of insertion sort we will do two loops and in the first loop we will inspecting by every elements inside an array and the second loop for compare between the current element and next element so that the current element should be smaller than the next element if the current element larger than next element we will swap between them , in the first iteration i will be 0 ,and m in the first iteration will be  0 and we will inspecting by the value of the first element arr[m] =8 smaller than the value of second element arr[m+1] =20 in this time the condition is true then we will move to the second iteration so that i=0 and m=1 .  

pass2:  
i=0,m=1  
in this iteration the arr[m] =20 and the next element arr[m+1]=5 ,then the if condition will be true that mean the current element larger than the next element so we will sawp btween them as you can see in the tabel below and the new array will be [8,5,20,3,2] and you can follow  all the iteration as shown in the table.

![image](./assets/InsertionSortArray_tracecode.jpg) 
### Whiteboard Process
<!-- Embedded whiteboard image -->

![image](./assets/InsertionSortArray.jpg)

### Efficiency
<!-- What approach did you take? Discuss Why. What is the Big O space/time for this approach? -->


 - Time: O(n^2)
The basic operation of this algorithm is comparison. This will happen n * (n-1) number of times…concluding the algorithm to be n squared.  

 - Space: O(1)
No additional space is being created. This array is being sorted in place…keeping the space at constant O(1).
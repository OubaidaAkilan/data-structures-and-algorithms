# Code challenge 27:

## Merge Sort
<!-- Description of the challenge -->
- To Write and implement a merg sort method to sort an array by inspecting the elements from left to right and placing larger elements to the right of the smaller elements.

### Whiteboard Process
<!-- Embedded whiteboard image -->

![image](assets/mergeSortArray.jpg)

### Approach & Efficiency
<!-- What approach did you take? Discuss Why. What is the Big O space/time for this approach? -->



- Big O 
   - Time <--- O(n)
   - Space <----- O(n)

---------------------------





### Solution  
- Split the given list into two halves (roughly cqual halves in case of
alist with an odd number of elements).  
- Continue dividing the subarrays in the same manner until you are
left with only single element arrays.  
- Starting with the single element arrays, merge the subarrays so
that cach merged subarray is sorted.  
- Repeat step3unit with end up withasingle sorted array.


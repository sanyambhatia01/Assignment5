function find3Numbers(A, arr_size, sum)
{
    let l, r;
 
    A.sort((a,b) => a-b);
    for (let i = 0; i < arr_size - 2; i++) {
        l = i + 1;
        r = arr_size - 1;
        while (l < r) {
            if (A[i] + A[l] + A[r] == sum)
            {
            document.write("Triplet is " + A[i] + ", "
                  + A[l] + ", " + A[r]);
                return true;
            }
            else if (A[i] + A[l] + A[r] < sum)
                l++;
            else 
                r--;
        }
    }
    return false;
}
    let A = [ 1, 4, 45, 6, 10, 8 ];
    let sum = 22;
    let arr_size = A.length;
 
    find3Numbers(A, arr_size, sum);
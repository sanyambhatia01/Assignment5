function getUnion(a , n , b , m) {
    var min = (n < m) ? n : m;
    var set = new Set();
    for (i = 0; i < min; i++) {
        set.add(a[i]);
        set.add(b[i]);
    }
    if (n > m) {
        for (i = m; i < n; i++) {
            set.add(a[i]);
        }
    } else if (n < m) {
        for (i = n; i < m; i++) {
            set.add(b[i]);
        }
    }
    document.write("Number of elements after union operation: " + set.size);
    document.write("<br/>The union set of both arrays is :<br/>");
    set.forEach (function(value) {
document.write(value+" ");
})    
}
    var a = [ 1, 2, 5, 6, 2, 3, 5, 7, 3 ];
    var b = [ 2, 4, 5, 6, 8, 9, 4, 6, 5, 4 ];

    getUnion(a, 9, b, 10);
public class Solution {
    
    public static int reverse(int x) {
        int n = Math.abs(x);
        long result = 0;
        
        while (n != 0) {
            result = (result * 10) + (n % 10);
            n = n / 10;
        }
        
        if (x < 0) {
            result = result * -1;
        }
        
        if (result > Integer.MAX_VALUE || result < Integer.MIN_VALUE) {
            return 0;
        }
        return (int) result;
    }   
    
}
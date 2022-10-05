function palindrome(str) {
    str = str.replace(/\W/gi,'');
    str = str.replace(/_/gi,'');
    let empty = "";
    for(let i = 0; i <str.length;i++){
        empty = str.charAt(i) + empty;
    }
    console.log(empty.toLowerCase())
    let ans = (empty.toLowerCase() === str.toLowerCase() ? true : false);
    console.log(ans);
    return ans;

}

palindrome("0_0 (: /-\ :) 0-0");
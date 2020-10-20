//Info:  http://stackoverflow.com/a/27872144/383904
//changes made
function randomString(len){
    var str="", i=0, min=10, max=62;
    for(;i++<len;){
      var r = Math.random()*(max-min)+min <<0;
      str += String.fromCharCode(r+=r>9?r<36?55:61:48);
    }
    return str;
  }
export default randomString;
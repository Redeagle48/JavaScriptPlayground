var numbers = [];
print(numbers.length);

var numbers2 = [1,2,3];
print(numbers2.length);

var numbers3 = new Array(1,2);
print(numbers3.length);
print(numbers3[0]);

var numbers4 = new Array(10);
print(numbers4.length);

var objects = [1,"Alan",true,null];
print(objects.length);

var number = 3;
var arr= [7,4,1776];
print(Array.isArray(number));
print(Array.isArray(arr));

var nums = [];
for(var i = 0; i < 100; i++) {
    nums[i] = i+1;
    print(nums[i]);
}

var sentence ="the quick brown fox jumped over the lazy dog";
var words = sentence.split(" ");
print(words);

var nums2 = [];
for(var i = 0; i < 100; i++){
    nums2[i] = i+1;
}
var samenums = nums2; // copy made by reference
nums2[0] = 400;
print(samenums[0]);
nums2[0] = 401;
print(samenums[0]);

var names = ["Ana", "Pedro", "António", "Rita"];
putstr("Enter a name to search for: ");
var name = readline();
var position = names.indexOf(name);
if(position >= 0){
    print("Found " + name + " at position " + position);
} else {
    print("Name " + name + " not found");
}

var nums = [2,3,4,5];
print(nums);
var newnum = 1;
nums.unshift(newnum);
print(nums);
nums = [3,4,5];
nums.unshift(newnum,1,2);
print(nums);

///////////////////
// Array of objects
///////////////////

print("==========Array of objects==========");

function Point(x,y) {
    this.x = x;
    this.y = y;
}

function displayPts(arr){
    for(var i = 0; i < arr.length; i++) {
        print(arr[i].x + ", " + arr[i].y);
    }
}

var p1 = new Point(1,2);
var p2 = new Point(3,5);
var p3 = new Point(6,4);

var points = [p2];
points.push(p3);
points.unshift(p1);
displayPts(points);

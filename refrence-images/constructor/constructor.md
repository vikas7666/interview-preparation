<span style="color:#E02d75;font-weight:700">A constructor is a special function used to create and initialize objects.</span>

## Example (without constructor) ##

```js
const user1 = {
  name: "Rahul",
  age: 25
};

const user2 = {
  name: "Amit",
  age: 30
};
```

🔹 Using constructor function

```js
function User(name, age) {
  this.name = name;
  this.age = age;
}
```

🔹 Create objects using constructor

```js
const user1 = new User("Rahul", 25);
const user2 = new User("Amit", 30);
```

🔹 What does new do?
```js
new User("Rahul", 25);
``` 
1. Creates empty object {}
2. Sets `this` to that object
3. Runs User function
4. Returns the object

🔹 So constructor = ? </br>

A function used with "new" to create objects


🔥 What actually happens internally?
JavaScript does 4 hidden steps behind the scenes:

🔹 Step 1: Create an empty object

```js
const obj = {};
```
🔹 Step 2: Link prototype
```js
obj.__proto__ = User.prototype;
```

🔹 Step 3: Bind this to object
```js
User.call(obj, "Rahul", 25);
````
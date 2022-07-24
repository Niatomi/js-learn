const { Observable } = require("rxjs");
const { map, filter } = require("rxjs/operators");

const users = {
  data: [
    {
      status: "active",
      age: 18,
    },
    {
      status: "active",
      age: 41,
    },
    {
      status: "inactive",
      age: 52,
    },
    {
      status: "active",
      age: 25,
    },
    {
      status: "inactive",
      age: 64,
    },
  ],
};

const observable = new Observable((subsriber) => {
  subsriber.next(users);
}).pipe(
  map((value) => {
    console.log("1) Inside of first operator", value);
    return value.data;
  }),
  map((value) => {
    console.log("2) Inside of second operator", value);
    return value.filter((user) => user.status === "active");
  }),
  map((value) => {
    console.log("3) Inside of third operator", value);
    return value.reduce((sum, user) => sum + user.age, 0) / value.length;
  }),
  map((value) => {
    console.log("4) Inside of third operator", value);
    return value;
  }),
  map((value) => {
    if (value >= 28) {
      throw Error("Age is higher than 28");
    } else {
      return value;
    }
  })
);

const observer = {
  next: (value) => {
    console.log("Value of observer " + value);
  },
  error: (err) => {
    console.log("Observer got error " + err);
  },
  complete: () => {
    console.log("Observer got complete notification");
  },
};

observable.subscribe(observer);

const demoObj = {
  name: "Ahmad Yar Khan",
  age: "25",
  expertise: "Software Engineer"
};

const demoObjectKeys = () => {
  console.log(Object.keys(demoObj));
};

const demoObjectValues = () => {
  console.log(Object.values(demoObj));
};

const demoObjectEntries = () => {
  console.log(Object.entries(demoObj));
};

(() => {
  demoObjectKeys();
  demoObjectValues();
  demoObjectEntries();
})();

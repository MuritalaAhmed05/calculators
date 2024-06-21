let result = document.getElementById("result");

const show = (num) => {
  result.value += num;
};

const sign = (operate) => {
  result.value += operate;
};

const wipe = () => {
  result.value = "";
};

const deleteLast = () => {
  result.value = result.value.slice(0, -1);
};

const calculate = () => {
  let ans = document.getElementById("result").value;
  result.value = eval(ans);
};

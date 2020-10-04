import Axios from "axios";

let url = process.env.REACT_APP_DEV_ROUTE;
url = url + "/user";

export default signup = async (body) => {
  url = url + "/signup";
  return await Axios.post(url, body);
};

export default signin = async (body) => {
  url = url + "/signin";
  return await Axios.post(url, body);
};

export default updateUser = async (body) => {
  url = url + "/update";
  const headers = {
    "x-auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNzk1MzhkYjM3N2VlMDM0Yzk3NTk0NCIsImlhdCI6MTYwMTc5MjQyMH0.nsTSjxTjBE32yEuFZbkY63BARlWeoE95SjTFABnXGLI",
  };
  return await Axios.post(url, body, {
    headers: headers,
  });
};

export default validateUser = async () => {
  url = url + "/validate";
  const headers = {
    "x-auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNzk1MzhkYjM3N2VlMDM0Yzk3NTk0NCIsImlhdCI6MTYwMTc5MjQyMH0.nsTSjxTjBE32yEuFZbkY63BARlWeoE95SjTFABnXGLI",
  };
  return await Axios.post(url, null, {
    headers: headers,
  });
};

export default deleteUser = async () => {
  url = url + "/delete";
  const headers = {
    "x-auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNzk1MzhkYjM3N2VlMDM0Yzk3NTk0NCIsImlhdCI6MTYwMTc5MjQyMH0.nsTSjxTjBE32yEuFZbkY63BARlWeoE95SjTFABnXGLI",
  };
  return await Axios.delete(url, null, {
    headers: headers,
  });
};

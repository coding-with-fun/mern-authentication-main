import Axios from "axios";
import { REACT_APP_DEV_ROUTE } from "../config/appConfigs";
const baseURL = REACT_APP_DEV_ROUTE + "/user";

export const SignUpUser = async (body) => {
  const url = baseURL + "/signup";
  return await Axios.post(url, body);
};

export const SignInUser = async (body) => {
  const url = baseURL + "/signin";
  return await Axios.post(url, body);
};

export const UpdateUser = async (body) => {
  const url = baseURL + "/update";
  const headers = {
    "x-auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNzk1MzhkYjM3N2VlMDM0Yzk3NTk0NCIsImlhdCI6MTYwMTc5MjQyMH0.nsTSjxTjBE32yEuFZbkY63BARlWeoE95SjTFABnXGLI",
  };
  return await Axios.post(url, body, {
    headers: headers,
  });
};

export const ValidateUser = async () => {
  const url = baseURL + "/validate";
  const headers = {
    "x-auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNzk1MzhkYjM3N2VlMDM0Yzk3NTk0NCIsImlhdCI6MTYwMTc5MjQyMH0.nsTSjxTjBE32yEuFZbkY63BARlWeoE95SjTFABnXGLI",
  };
  return await Axios.post(url, null, {
    headers: headers,
  });
};

export const DeleteUser = async () => {
  const url = baseURL + "/delete";
  const headers = {
    "x-auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNzk1MzhkYjM3N2VlMDM0Yzk3NTk0NCIsImlhdCI6MTYwMTc5MjQyMH0.nsTSjxTjBE32yEuFZbkY63BARlWeoE95SjTFABnXGLI",
  };
  return await Axios.delete(url, null, {
    headers: headers,
  });
};

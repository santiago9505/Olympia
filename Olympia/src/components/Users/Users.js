import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../constants/index.js";

const Users = () => {
  const [state, setState] = useState({
    pk: 0,
    email: "",
    password: "",
    date_birth: "",
    first_name: "",
    last_name: "",
    gender: "",
  });

  const fecthData = () => {
    const { data } = axios({
      url: API_URL,
      method: 'get',
    });
  }

  useEffect(() => {

  }, []);

  return (
    <div>

    </div>
  );
};

export default Users;

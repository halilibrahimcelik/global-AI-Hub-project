import { useContext, createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  myCourses: "",
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = (props) => {
  const [myCourses, setMyCourses] = useState([]);

  const fetchMyCourses = async () => {
    try {
      const response = await fetch(
        "https://40060bec-d8e7-4ad2-96c2-63b9fdb4ef24.mock.pstmn.io/wp-json/ldlms/v2/sfwd-courses"
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Unable to get the data!");
      }
      setMyCourses(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMyCourses();
  }, []);

  const contextValue = {
    myCourses: myCourses,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}{" "}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

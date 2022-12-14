import { useContext, createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  myCourses: "",
  allCourses: "",
  loading: "",
  setAllCourses: () => {},
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = (props) => {
  const [myCourses, setMyCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMyCourses = async () => {
    try {
      const response = await fetch(
        "https://40060bec-d8e7-4ad2-96c2-63b9fdb4ef24.mock.pstmn.io/wp-json/ldlms/v2/my_courses"
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Unable to get the data!");
      }
      setMyCourses(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMyCourses();
  }, []);
  const fetchAllCourses = async () => {
    try {
      const response = await fetch(
        "https://40060bec-d8e7-4ad2-96c2-63b9fdb4ef24.mock.pstmn.io/wp-json/ldlms/v2/sfwd-courses"
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Unable to get the data!");
      }
      setAllCourses(data);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAllCourses();
  }, []);

  const contextValue = {
    myCourses: myCourses,
    allCourses: allCourses,
    loading: loading,
    setAllCourses: setAllCourses,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}{" "}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

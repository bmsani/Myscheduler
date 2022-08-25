import { useQuery } from "@tanstack/react-query";

const useAdmin = (email: any) => {
  const {
    data: admin,
    isLoading,
  } = useQuery(["admin", email], () =>
    fetch(`http://localhost:5000/admin/${email}`, {
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => res.json())
  );
  return {admin, isLoading};
};

export default useAdmin;

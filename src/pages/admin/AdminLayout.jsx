import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import { getUserProfile } from "@/services/index/users";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";

const AdminLayout = () => {
  const userState = useSelector((state) => state.user);

  const {
    data: profileData,
    isLoading: profileIsLoading,
    error: profileError,
  } = useQuery({
    queryFn: () => {
      return getUserProfile({ token: userState.userInfo.token });
    },
    queryKey: ["profile"],
    onSuccess: (data) => {
      if (!data?.admin) {
        toast.error("You are not allowed to access the admin panel");
      }
    },
    onError: (err) => {
      console.log(err);
      toast.error("You are not allowed to access the admin panel");
    },
  });

  if (profileIsLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h3 className="text-2xl text-slate-700">Loading...</h3>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen lg:flex-row">
      <Header />
      <main className="bg-[#F9F9F9] flex-1 p-4 lg:p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;

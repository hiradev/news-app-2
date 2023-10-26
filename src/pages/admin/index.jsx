
import Header from "./components/header/Header";
import { getUserProfile } from "@/services/index/users";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { useRouter } from "next/router";

const AdminLayout = ({ children }) => {
  const router = useRouter();
  const userState = useSelector((state) => state.user);

  const { data: profileData, isLoading: profileIsLoading } = useQuery(
    ['profile', userState.userInfo?.token],
    () => getUserProfile({ token: userState.userInfo.token }),
    {
      onSuccess: (data) => {
        if (!data?.admin) {
          router.push('/');
          toast.error('You are not allowed to access the admin panel');
        }
      },
      onError: (err) => {
        console.log(err);
        router.push('/');
        toast.error('You are not allowed to access the admin panel');
      },
    }
  );

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
      <main className="flex-1 p-4 lg:p-6">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;

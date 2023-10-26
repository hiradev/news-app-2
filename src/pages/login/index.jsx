import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Link from 'next/link';
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import MainLayout from "../../components/MainLayout";
import { login } from "../../services/index/users";
import { userActions } from "../../store/reducers/userReducers";
import { useMutation } from "react-query";

const LoginPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.user);

    const { mutate, isLoading } = useMutation({
        mutationFn: ({ email, password }) => {
          return login({ email, password });
        },
        onSuccess: (data) => {
          dispatch(userActions.setUserInfo(data));
          localStorage.setItem("account", JSON.stringify(data));
        },
        onError: (error) => {
          toast.error(error.message);
          console.log(error);
        },
      });

      useEffect(() => {
        if (userState.userInfo) {
          router.push("/");
        }
      }, [router,userState.userInfo]);

  const { register, handleSubmit, formState: { errors, isValid }, } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const submitHandler = (data) => {
    const { email, password } = data;
    mutate({ email, password });
  };

  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10">
        <div className="w-full max-w-sm mx-auto">
          <h1 className="font-roboto text-2xl font-bold text-center text-black dark:invert mb-8">
            Login
          </h1>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="email"
                className="text-[#5a7184] font-semibold block"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Enter a valid email",
                  },
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                })}
                placeholder="Enter email"
                className={`placeholder:text-[#959ead] text-black dark:invert mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${
                  errors.email ? "border-red-500" : "border-[#c3cad9]"
                }`}
              />
              {errors.email?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="password"
                className="text-[#5a7184] font-semibold block"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password length must be at least 6 characters",
                  },
                })}
                placeholder="Enter password"
                className={`placeholder:text-[#959ead] text-black dark:invert mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${
                  errors.password ? "border-red-500" : "border-[#c3cad9]"
                }`}
              />
              {errors.password?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <Link
              href="/forget-password"
              className="text-sm text-green-500 font-semibold text-primary"
            >
              Forgot password?
            </Link>
            <button
              type="submit"
              disabled={!isValid || isLoading}
              className="bg-green-500 text-white font-bold text-lg py-4 px-8 w-full rounded-lg my-6 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Sign In
            </button>
            <p className="text-sm font-semibold text-[#5a7184]">
              Do not have an account?{" "}
              <Link href="/register" className="text-green-600">
                Register now
              </Link>
            </p>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default LoginPage;
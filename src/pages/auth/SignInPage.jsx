import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Container from "../../components/utils/Container";

const SignInPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <main>
      <section className="py-8">
        <Container>
          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative">
              <div>
                <div className="bg-white text-black rounded-2xl p-6">
                  <div className="flex flex-shrink-0 items-center justify-center mb-3">
                    <div className="relative">
                      <img
                        className="h-14 w-auto"
                        src="/assets/images/logo-2.png"
                        alt="logo"
                      />
                    </div>
                    <div className="ml-2">
                      <h4 className="text-orange-500 text-base font-extrabold">
                        Trucks Linked
                      </h4>
                      <p className="text-gray-300 text-xs font-bold uppercase tracking-widest">
                        Inventory
                      </p>
                    </div>
                  </div>
                  <h3 class="mb-6 text-xl xl:text-2xl text-center capitalize">
                    Welcome to Trucks Linked!
                  </h3>

                  <form onSubmit={handleSubmit}>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 font-roboto">
                      <li className="lg:col-span-2">
                        <div className="rounded-xl bg-gray-100 border border-gray-300 px-3 py-4 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                          <label
                            htmlFor="email"
                            className="mb-1 block text-xs text-gray-400"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="block w-full border-0 p-1 bg-gray-100 text-black placeholder-gray-500 focus:ring-0 sm:text-sm"
                            placeholder="email@email.com..."
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </li>
                      <li className="lg:col-span-2">
                        <div className="rounded-xl bg-gray-100 border border-gray-300 px-3 py-4 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                          <label
                            htmlFor="password"
                            className="mb-1 block text-xs text-gray-400"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            className="block w-full border-0 p-1 bg-gray-100 text-black placeholder-gray-500 focus:ring-0 sm:text-sm"
                            placeholder="Password..."
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </li>
                      <li className="lg:col-span-2">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center w-full rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                          Sign in
                        </button>
                      </li>
                      <li className="lg:col-span-2">
                        <div className="relative w-3/4 mx-auto">
                          <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-400" />
                          </div>
                          <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-8">OR</span>
                          </div>
                        </div>
                      </li>
                      <li className="lg:col-span-2">
                        <Link
                          to="/sign-up"
                          className="inline-flex items-center justify-center w-full rounded-md border border-primary bg-white px-6 py-3 text-base font-medium text-primary hover:text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                          Create account
                        </Link>
                      </li>
                    </ul>
                  </form>
                </div>
              </div>
              <div className="h-full">
                <img
                  className="block h-full w-full object-contain"
                  src="/assets/images/truck-2.png"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default SignInPage;

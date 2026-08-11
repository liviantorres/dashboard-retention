import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", { email, password });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-200 p-4">
      <div className="bg-[#EDEDED] w-full max-w-4xl rounded-[40px] shadow-xl border border-gray-300/50 p-8 md:p-12 flex relative overflow-hidden min-h-[500px]">
        <div className="w-full md:w-3/5 flex flex-col justify-center pr-0 md:pr-8 z-10">
          <h1 className="font-bahiana text-5xl md:text-6xl text-center text-[#1A1A1A] tracking-wider leading-none mb-8 uppercase">
            UFC – Universidade <br /> Federal do Ceará
          </h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 max-w-sm mx-auto w-full"
          >
            <Input
              id="email"
              type="email"
              placeholder="E-mail"
              icon={Mail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              id="password"
              type="password"
              placeholder="Senha"
              icon={Lock}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="flex justify-between px-2 text-sm text-gray-700">
              <Link
                to="/recoverpassword"
                className="underline hover:text-green-600 font-bahianita decoration-1 underline-offset-2 text-lg"
              >
                Esqueceu a senha?
              </Link>
              <Link
                to="/register"
                className="underline hover:text-green-600 font-bahianita decoration-1 underline-offset-2 text-lg"
              >
                Cadastre-se
              </Link>
            </div>

            <Button type="submit">Login</Button>
          </form>
        </div>

        <div className="hidden md:flex w-2/5 justify-center items-start relative select-none">
          <img
            src="/src/assets/mobile-ufc.png"
            alt="Móbile de madeira UFC"
            className="h-[120%] object-contain absolute -top-12 right-23 drop-shadow-md swinging"
          />
        </div>
      </div>
    </div>
  );
}

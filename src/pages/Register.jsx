import React, { useState } from "react";
import { Mail, Eye, User, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", { email, password });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-200 p-4">
      <div className="bg-[#EDEDED] w-full max-w-4xl rounded-[40px] shadow-xl border border-gray-300/50 p-8 md:p-12 flex relative overflow-hidden min-h-[500px]">
        <Link
          to="/"
          className="absolute top-6 left-6 
                        flex items-center justify-center
                        w-10 h-10 rounded-full
                        
                        cursor-pointer
                        hover:bg-white/60 
                        active:scale-95
                        
                        transition-all duration-200"
        >
          <ChevronLeft className="w-7 h-7 text-gray-700" />
        </Link>

        <div className="w-full md:w-3/5 flex flex-col justify-center pr-0 md:pr-8 z-10">
          <h1 className="font-bahiana text-5xl md:text-6xl text-center text-[#1A1A1A] tracking-wider leading-none mb-8 uppercase">
            CADASTRE-SE
          </h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 max-w-sm mx-auto w-full"
          >
            <Input
              id="name"
              type="name"
              placeholder="Nome"
              icon={User}
              value={name}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

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
              icon={Eye}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirmar senha"
              icon={Eye}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <Button type="submit">Registrar</Button>
          </form>
        </div>

        <div className="hidden md:flex w-2/5 justify-center items-start relative select-none">
          <img
            src="/src/assets/mobile-ufc.png"
            alt="Móbile de madeira UFC"
            className="h-[120%] object-contain absolute -top-12 right-4 drop-shadow-md swinging"
          />
        </div>
      </div>
    </div>
  );
}

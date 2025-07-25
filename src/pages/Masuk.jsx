
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Masuk =() => {
    const logoUrl = "/image/google.png";
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/"); 
    };
    return (
        <div className="flex h-screen">
            {/* KIRI */}
            <div className="w-1/2 bg-gradient-to-b from-white to-cyan-200 flex items-center justify-center">
                <h1 className="text-6xl font-semibold text-Blue font-pacifico italic">Urban' Attire</h1>
            </div>
        
            {/* KANAN */}
            <div className="w-1/2 bg-gradient-to-b from-white to-cyan-200 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-lg w-80">
                <h2 className="text-lg font-semibold text-center mb-4">Login</h2>
                <input
                    type="text"
                    placeholder="E-mail atau Nomor HP"
                    className="w-full px-4 py-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <input
                    type="password"
                    placeholder="Kata Sandi"
                    className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
        
                <div className="flex items-center mb-4">
                    <hr className="flex-grow border-t border-gray-300" />
                    <span className="mx-2 text-gray-500 text-sm">atau</span>
                    <hr className="flex-grow border-t border-gray-300" />
                </div>
        
                <button className="w-full flex items-center justify-center border border-gray-300 rounded py-2 hover:bg-gray-100 mb-4">
                    <img
                    src={logoUrl} 
                    alt="Google"
                    className="w-5 h-5 mr-2"
                    />
                    <span className="text-sm">Masuk dengan Google</span>
                </button>
        
                <button className="w-full bg-cyan-500 text-white py-2 rounded hover:bg-cyan-600"
                    onClick={handleLogin}>Login</button>
        
                <p className="text-sm text-center mt-4">
                    Belum Punya Akun?{" "}
                    <a href="#" className="text-cyan-600 hover:underline">
                    Daftar
                    </a>
                </p>
                </div>
            </div>
        </div>
    );
}

export default Masuk;
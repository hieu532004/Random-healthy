"use client"; // Đánh dấu đây là Client Component để dùng styled-jsx

import { FC, useState } from "react";
import NextImage from 'next/image';

const LandingPage: FC = () => {
  // Danh sách món ăn với lý do cute và hình ảnh
  const snacks = [
    {
      name: "Bánh tráng trộn",
      emoji: "🌯",
      reason:
        "Ăn bánh tráng trộn khuya mới đúng điệu, vừa nhâm nhi vừa chill nè!",
      image: "/images/trangtron.jpg",
    },
    {
      name: "Dưa lưới",
      emoji: "🍈",
      reason: "Dưa lưới ngọt mát, ăn khuya nhẹ bụng mà vẫn cute lắm nha!",
      image: "/images/duoiluoi.jpg",
    },
    {
      name: "Nho",
      emoji: "🍇",
      reason: "Nho mọng nước, nhón từng quả khuya là hết buồn ngủ luôn á!",
      image: "/images/nho.jpg",
    },
    {
      name: "Dưa hấu",
      emoji: "🍉",
      reason: "Dưa hấu đỏ tươi, ăn khuya vừa ngon vừa làm đẹp da nè!",
      image: "/images/dưa hấu.jpg",
    },
    {
      name: "Trà sữa",
      emoji: "🧋",
      reason: "Trà sữa khuya là bạn thân, ngọt ngào như giấc mơ luôn!",
      image: "/images/Trà sữa.jpg",
    },
    {
      name: "Kem",
      emoji: "🍦",
      reason: "Kem mát lạnh khuya, tan chảy trong miệng là hết mệt liền!",
      image: "/images/kem-03.jpg",
    },
    {
      name: "Khoai lang chiên",
      emoji: "🍠",
      reason: "Khoai lang chiên giòn rụm, khuya ăn là ấm bụng lắm luôn!",
      image: "/images/khoai-lang-chien-600x400.jpg",
    },
    {
      name: "Bánh kẹp",
      emoji: "🥐",
      reason: "Bánh kẹp thơm lừng, khuya ăn là hạnh phúc ngập tràn nè!",
      image: "/images/banhkep.jpg",
    },
    {
      name: "Bánh tráng sốt tắc",
      emoji: "🌮",
      reason: "Bánh tráng sốt tắc chua cay, khuya ăn là tỉnh ngủ liền á!",
      image: "/images/banh-trang sốt tắc_1633593527.jpg",
    },
    {
      name: "Bắp rang bơ",
      emoji: "🍿",
      reason: "Bắp rang bơ thơm nức, khuya ăn vừa ngon vừa vui tai nè!",
      image: "/images/pngtree-kawaii-pop-corn-png-image_14659073.png",
    },
    {
      name: "Sữa chua",
      emoji: "🥛",
      reason: "Sữa chua ngọt ngào, khuya ăn là yêu đời ngay á!",
      image: "/images/6c0e06677b715e3f692063a3b3158ac5.jpg",
    },
  ];

  // State để chọn một món ăn
  const [currentSnack, setCurrentSnack] = useState(() => {
    const randomIndex = Math.floor(Math.random() * snacks.length);
    return snacks[randomIndex];
  });

  // State để hiển thị hình ảnh
  const [showImage, setShowImage] = useState(false);

  // Hàm chọn món ăn ngẫu nhiên khác
  const getRandomSnack = () => {
    const randomIndex = Math.floor(Math.random() * snacks.length);
    setCurrentSnack(snacks[randomIndex]);
    setShowImage(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-purple-200 flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Tiêu đề căn giữa và responsive */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-500 mb-8 animate-bounce tracking-wide drop-shadow-lg text-center">
        🌟 Ăn Khuya Cute Lắm Nha! 🌟
      </h1>

      {/* Hộp món ăn và lý do */}
      <div className="relative max-w-md w-full bg-white p-6 rounded-3xl shadow-xl text-center animate-fadeIn border-4 border-dashed border-pink-300 flex flex-col items-center">
        {/* Tim nhỏ trang trí */}
        <span className="absolute -top-4 -left-4 text-3xl animate-wiggle">
          💕
        </span>
        <span className="absolute -top-4 -right-4 text-3xl animate-wiggle delay-200">
          ✨
        </span>
        <span className="absolute -bottom-4 -left-4 text-3xl animate-wiggle delay-400">
          🌸
        </span>

        <p className="text-lg sm:text-xl text-gray-600 italic mb-6 font-semibold max-w-xs mx-auto">
          &ldquo;{currentSnack.reason}&rdquo;
        </p>

        {/* Món ăn ngẫu nhiên */}
        <button
          onClick={() => setShowImage(!showImage)}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-pink-100 text-gray-700 rounded-full hover:bg-pink-200 hover:scale-105 transition-all mb-4 mx-auto"
        >
          <span className="text-3xl sm:text-4xl animate-wiggle">
            {currentSnack.emoji}
          </span>
          <span className="text-lg sm:text-xl font-semibold">
            {currentSnack.name}
          </span>
        </button>

        {/* Hình ảnh món ăn */}
        {showImage && (
          <div className="mt-4 animate-popIn flex flex-col items-center">
            <div className="relative w-full max-w-xs h-64">
              <NextImage
                src={currentSnack.image}
                alt={currentSnack.name}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                style={{
                  objectFit: 'contain',
                  borderRadius: '0.75rem'
                }}
                className="shadow-lg"
              />
            </div>
            <p className="mt-2 text-pink-500 font-semibold animate-pulse">
              Ngon quá nha! 😋
            </p>
          </div>
        )}

        {/* Nút tìm món khác */}
        <button
          onClick={getRandomSnack}
          className="px-6 py-3 bg-pink-400 text-white font-semibold rounded-full hover:bg-pink-500 hover:scale-110 transition-all focus:outline-none focus:ring-4 focus:ring-pink-300 shadow-md mt-4 mx-auto"
        >
          <span className="flex items-center justify-center gap-2">
            Tìm món khác nè! <span className="animate-pulse">✨</span>
          </span>
        </button>
      </div>

      {/* Footer kawaii */}
      <p className="mt-8 text-gray-500 text-sm sm:text-base animate-pulse font-semibold text-center">
        Made with 💞 for cute snack lovers ~
      </p>

      {/* Hiệu ứng nền động */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <span className="absolute top-10 left-20 text-2xl sm:text-3xl animate-float">
          🌟
        </span>
        <span className="absolute bottom-20 right-20 text-2xl sm:text-3xl animate-float delay-200">
          💖
        </span>
        <span className="absolute top-1/3 right-1/4 text-2xl sm:text-3xl animate-float delay-400">
          🌸
        </span>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-20px);
          }
          60% {
            transform: translateY(-10px);
          }
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes wiggle {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(15deg);
          }
          50% {
            transform: rotate(0deg);
          }
          75% {
            transform: rotate(-15deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        @keyframes float {
          0% {
            transform: translateY(0);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-30px);
            opacity: 1;
          }
          100% {
            transform: translateY(0);
            opacity: 0.7;
          }
        }
        @keyframes popIn {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          80% {
            transform: scale(1.1);
            opacity: 1;
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        .animate-wiggle {
          animation: wiggle 1.5s infinite;
        }
        .animate-float {
          animation: float 4s infinite ease-in-out;
        }
        .animate-popIn {
          animation: popIn 0.5s ease-out;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
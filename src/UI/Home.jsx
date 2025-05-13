"use client";
import { useSelector } from "react-redux";
import Button from "./Button";

function Home() {
  const username = useSelector((store) => store.user.username);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-6xl font-extrabold leading-tight text-pink-900 md:text-5xl">
        Welcome to AfriNectar🌸
        <br />
        <span className="mt-10 block text-lg font-normal text-pink-900">
          Discover handcrafted floral arrangements, seasonal bouquets, and
          timeless gifts delivered with care.
        </span>
      </h1>

      <Button to="/menu" type="primary">
        Shop Flowers
      </Button>
    </div>
  );
}

export default Home;

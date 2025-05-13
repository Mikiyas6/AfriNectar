function About() {
  return (
    <section className="bg-pink-50 px-4 py-16 sm:px-6 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-700 sm:text-5xl">
          About AfriNectar 🌸
        </h2>
        <p className="mt-4 text-lg text-pink-600">
          Spreading beauty, one flower at a time.
        </p>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6 text-pink-700">
          <p className="text-lg">
            AfriNectar is a proudly Ethiopian flower e-commerce platform rooted
            in love for nature and the art of gifting. Our mission is to deliver
            stunning, fresh, and ethically sourced flowers across the nation and
            eventually the continent while supporting local growers.
          </p>
          <p className="text-lg">
            Whether you&apos;re celebrating a special moment or just want to
            bring joy to someone&apos;s day, we make it effortless to send
            flowers that speak from the heart.
          </p>
          <p className="text-lg">
            We believe in the power of beauty, simplicity, and sustainability
            all wrapped in every bouquet you receive from us. From our carefully
            selected farms to your doorstep, we ensure quality, freshness, and
            love.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1579167728798-a1cf3d595960?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D"
            alt="About AfriNectar"
            className="h-96 w-full max-w-md rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>

      <div className="mt-20 text-center">
        <h3 className="text-2xl font-semibold text-pink-700">Our Vision 🌍</h3>
        <p className="mt-4 text-pink-700 max-w-2xl mx-auto text-lg">
          To become Africa’s leading floral brand by celebrating culture, love,
          and local craftsmanship — through every bloom.
        </p>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold text-pink-700">Our Values 💚</h3>
        <ul className="mt-6 space-y-3 text-pink-700 text-lg max-w-2xl mx-auto">
          <li>🌱 Sustainability & ethical sourcing</li>
          <li>🌼 Customer happiness & delight</li>
          <li>🤝 Empowering local flower farmers</li>
          <li>🎁 Quality in every petal, every time</li>
        </ul>
      </div>
    </section>
  );
}

export default About;

import Image from "next/image";

export default function BeyondCode() {
  return (
    <section
      id="beyond-code"
      className="max-w-6xl mx-auto px-6 py-20 bg-[#F9F7FC]"
    >
      <div className="flex flex-col gap-4 mb-12">
        <h2 className="text-4xl font-bold">
          Beyond Code
        </h2>

        <p className="text-gray-600 max-w-3xl">
          From the universe to the smallest details, curiosity has always
          been part of my journey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Image
            src="/images/profile/beyond-code.jpeg"
            alt="Books, laptop, flowers and everyday objects representing my interests beyond coding."
            width={700}
            height={500}
            className="rounded-2xl object-cover"
          />
        </div>

        <div className="space-y-6 text-gray-700 leading-8">
          <p>
            For me, curiosity doesn't end when I step away from my computer.
            It's something that naturally finds its way into many parts of my
            life. I enjoy exploring ideas across science, creativity and
            culture, whether it's understanding the universe through
            astrophysics, wondering about the mysteries of quantum mechanics,
            reading about evolution, or simply following topics that make me
            pause and think a little deeper.
          </p>

          <p>
            Outside of technology, I enjoy reading, listening to music,
            creating things through art and DIY crafts, and watching films and
            series that tell compelling stories across different genres. I have
            a special appreciation for science fiction, but I'm equally drawn
            to narratives that inspire thought, emotion and imagination. I also
            enjoy exploring literature, art and different cultures, which
            continually broaden my perspective and often become unexpected
            sources of inspiration.
          </p>

          <p>
            I believe that some of the best ideas come from connecting
            different disciplines. The same curiosity that draws me toward
            science and creativity also shapes the way I design, solve problems
            and build digital experiences. For me, learning is not confined to
            a profession—it's a way of understanding the world.
          </p>
        </div>
      </div>
    </section>
  );
}
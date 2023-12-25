const About = () => {
  return (
    <div className="h-screen sm:mr-0 mr-12" id="about">
      <h1 className="text-3xl font-semibold">About GeneralAPI</h1>
      <br />
      <p className="text-xl">
        GeneralAPI is an open source project&#40;any contributions are
        welcome&#41;,
        <br /> it was built to help create simple features for your next
        website/application. <br />
        <br />
        GeneralAPI was built using FastAPI, a simple and strong python framework
        for web development. GeneralAPI was built using many open source
        API&apos;s like yfinance, open weather and more, visit
        <a
          className="mx-1 text-blue-400 border-none hover:underline underline-offset-4"
          target="_blank"
          href="https://github.com/ShayCohenn/GeneralAPI"
        >
          GeneralAPI&apos;s github repo
        </a>
        for a more detailed explanation on how it works
      </p>
      <div className="w-11/12 my-4 border-b border-white/40 mx-auto" />
      <p className="text-xl">
        If you have any questions feel free to contact me, <br />
        my name is Shay Cohen and I created the API as a hobby project
      </p>
      <br />
      <div className="flex flex-col text-xl gap-y-2">
        <p>Email: shay91847@gmail.com</p>
        <p>Phone: +972 52-851-2751</p>
        <a
          className="text-blue-400 border-none hover:underline underline-offset-4"
          target="_blank"
          href="https://www.linkedin.com/in/shaycohenn1/"
        >
          LinkedIn
        </a>
        <a
          className="text-blue-400 border-none hover:underline underline-offset-4"
          target="_blank"
          href="https://github.com/ShayCohenn"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default About;

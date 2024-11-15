const Header = () => {
  return (
    <>
      <div className="min-h-[80vh] w-full"></div>
      <div className="min-h-[80vh] w-full bg-cover bg-center bg-[url('/aboutpage/construction-footage.gif')] absolute top-0">
        <div className="w-full h-[80vh] bg-[#00000094]">
          <div className="container mx-auto px-5 md:px-20 xl:px-0 mb-48 xl:mb-0 h-full flex items-end">
            <div className="xl:grid xl:grid-cols-3 text-center xl:text-start pb-12 lg:pb-20 text-white">
              <h1 className="font-bold text-4xl mb-5 col-span-2 xl:text-7xl drop-shadow-xl">
                Archi Teknik - Supporting your success with engineering
              </h1>
              <div className="flex items-end">
                <p>
                  As a trusted engineering consultancy, we specialize in
                  creating efficient, forward-thinking designs that drive
                  progress. Our mission is to enhance communities through
                  sustainable infrastructure, prioritizing safety, quality, and
                  environmental responsibility in every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
import Button2 from "../components/Buttons/Button2"
const Home = () => {
  return (
    <div>
      
      <section className='w-full min-h-screen md:h-auto'>
        <div className='flex justify-between items-start w-full h-[600px]'>
          <div className='w-2/5 h-full flex'>
            <div className='w-96 m-8 bg-[#D9D9D980] rounded-[50px] flex justify-center items-center'>VIDEO OR PHOTO</div>
            <div className='w-2/5'>
              <div className=' h-2/5 mb-4 bg-[#C1FF5B] rounded-b-[50px] flex justify-center items-center text-center'>ZERO to ONE <br></br> Journey and Beyond.</div>
              <div className=' h-3/5 bg-[#81B8D9] rounded-t-[50px]'></div>
            </div>
          </div>
          <div className='w-4/9 '>
            <div className="w-full h-80 border-2 border-[#ADC3D0] px-16 py-8 mb-4 rounded-[50px] flex flex-col justify-between">
              <h1 className="text-5xl font-marcellus font-normal">The Launchpad for Fashion Entrepreneurs</h1>
              <p className="text-3xl opacity-60 font-kodchasan"> Empowering India's next Generation of <b>Fashion Entrepreneur</b></p>
              <div className="flex gap-10">
                <Button2 name="Apply Now" />
                <Button2 name="Download Brouchure" />
              </div>
            </div>
            <div className="w-full h-56 border-2 border-[#ADC3D0] px-16 py-8  rounded-[50px] flex flex-col justify-between">
              <h1 className="text-5xl font-marcellus font-normal">Introducing India's First Fashion Entrepreneurship Program </h1>
              <div className="text-center">
                <Button2 name="Know More" />

              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center w-1/12 h-full">
            <p className="absolute font-marcellus w-[600px] px-8 py-4 text-3xl bg-gradient-to-r from-[#C1FF5B] to-[#73C4F4] rounded-full -rotate-90">
              DOWNLOAD BROCHURE
            </p>
          </div>
        </div>
        <div className="w-full h-64 p-10 ">
          <div></div>
          <div className="w-[53rem] h-[15rem] bg-[#D9D9D933] rounded-[40px]" style={{ boxShadow: "0 4px 4px 0px #00000040" }}>
            <div></div>
            <div></div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div></div>


          </div>
        </div>
      </section>

    </div>
  )
}

export default Home

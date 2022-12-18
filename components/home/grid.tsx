const Grid = () => {
  return (
    <div className="z-0 container h-screen absolute inset-0 overflow-hidden mx-auto">
      <div className="w-full h-full absolute z-[1] fade"></div>
      <div className="w-full h-[200%] lines"></div>

      <style jsx>{`
        .container {
          perspective: 700px;
        }

        .fade {
          background: radial-gradient(ellipse at 50% 50%,
          rgba(255, 255, 255, 0) 0%,
          rgb(10, 10, 10) 70%);
        }

        .lines {
          background-image: linear-gradient(to right, rgba(7, 203, 121, 0.2) 1px, transparent 0),
          linear-gradient(to bottom, rgba(7, 203, 121, 0.2) 1px, transparent 0);
          background-size: 45px 30px;
          background-repeat: repeat;
          transform-origin: 100% 0 0;
          animation: play 15s linear infinite;
        }

        @keyframes play {
          0% {
            transform: rotateX(45deg) translateY(-50%);
          }
          100% {
            transform: rotateX(45deg) translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default Grid
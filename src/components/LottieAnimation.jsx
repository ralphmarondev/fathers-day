import Lottie from "lottie-react";
import animationData from "./lottie.json";

const LottieAnimation = () => {
  return (
    <div className="lottie-container">
      <Lottie animationData={animationData} loop={true} />;
    </div>
  );
};

export default LottieAnimation;

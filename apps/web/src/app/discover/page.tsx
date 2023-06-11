// Components
import Navbar from "../../components/Navbar/Navbar";
import Showcase from "../../components/Showcase/Showcase";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <div>
      <Navbar />
      <Showcase />
    </div>
  );
};
export default page;

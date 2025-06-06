import CodePath from "../assets/CodePath.jpg";
import quantum from "../assets/quantum.jpg";

function Cert() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 flex flex-col items-center justify-center p-20">
      <div className="w-1/2 flex gap-5 flex-col items-center">
        <img src={CodePath} alt="CodePath Certificate"></img>
        <img src={quantum} alt="" />
      </div>
    </div>
  );
}

export default Cert;

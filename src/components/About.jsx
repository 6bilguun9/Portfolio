import ConnectionBttn from "./ui/ConnectionBttn";
import { MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Exp from "./ui/Exp";
import Edc from "./ui/Edc";

function About() {
  return (
    <div className="bg-neutral-950 flex flex-col items-center min-h-screen w-full gap-4 text-white">
      <div className="w-1/2 bg-neutral-920 border-neutral-800 border  rounded-xl flex flex-col">
        <div className="flex flex-row items-center justify-between mx-5 mt-5">
          <h1 className="text-white text-3xl font-bold">Bilguun Batsukh</h1>
          <ConnectionBttn />
        </div>
        <div className="flex items-center mt-2 mx-4 gap-2 ">
          <MapPin className="text-neutral-700 " />
          <h1 className="text-neutral-700 "> Arlington, Virginia</h1>
        </div>
        <div className="mx-4 mt-4 font-semibold mb-5">
          <h1 className="text-white text-left">
            I’m a proactive computer science student who leverages agile
            methodologies and a relentless hustle to architect scalable,
            solutions that actually move the needle.
          </h1>
        </div>
      </div>
      <Tabs defaultValue="account" className="w-1/2 flex justify-center">
        <div className="w-full flex justify-center">
          <TabsList className="w-full flex justify-center bg-neutral-900 border-neutral-800 border text-sky-950">
            <TabsTrigger value="account" className=" text-neutral-700">
              Works
            </TabsTrigger>
            <TabsTrigger value="password" className=" text-neutral-700">
              Education
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="w-full flex justify-center">
          <TabsContent value="account">
            <div className="border rounded-xl border-neutral-800 p-6">
              <Exp />
            </div>
          </TabsContent>
          <TabsContent value="password">
            <div className="border rounded-xl border-neutral-800 p-6">
              <Edc />
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
export default About;

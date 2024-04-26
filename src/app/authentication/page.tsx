import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { RegisterTab } from "./register";
import { LoginTab } from "./login";

const AuthenticationPage = () => {
  return (
    <>
      <div className="grid grid-cols-2 h-screen w-full">
        <div className="flex items-center justify-center">
          <Tabs
            defaultValue="login"
            className="w-[550px] min-h-[80%] bg-white rounded-md shadow-md"
          >
            <TabsList className="flex justify-center items-center">
              <TabsTrigger value="login" className="w-full">
                Login
              </TabsTrigger>
              <TabsTrigger value="register" className="w-full">
                Register
              </TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <LoginTab />
            </TabsContent>
            <TabsContent value="register">
              <RegisterTab />
            </TabsContent>
          </Tabs>
        </div>
        <div className="flex justify-center items-center ">
          <Image
            src="team-animated.svg"
            alt="team"
            width={900}
            height={9000}
            priority
          />
        </div>
      </div>
    </>
  );
};

export default AuthenticationPage;

import { ProtectedRouteWrapper } from "@/context/protectedroute";
import { NavigationBar } from "../../components/navigation";
import { Footer } from "@/components/footer";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <ProtectedRouteWrapper>
        <NavigationBar />
        <div>{children}</div>
        <Footer />
      </ProtectedRouteWrapper>
    </>
  );
}

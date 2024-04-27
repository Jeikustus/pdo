import { NavigationBar } from "./navigation";
import { Footer } from "@/components/footer";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <NavigationBar />
      <div>{children}</div>
      <Footer />
    </>
  );
}

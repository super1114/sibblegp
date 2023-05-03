import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
interface LayoutProps {
  children: any;
}
export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

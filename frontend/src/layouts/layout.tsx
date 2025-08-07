import React from "react";

/* interface LayoutProps {
  // Add your prop types here as needed
  // children?: React.ReactNode;
  // className?: string;
}

function Layout(props: LayoutProps) {
  return <div>layout</div>;
}

export default Layout; */

type Props = { children: React.ReactNode };
const layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto flex-1 py-10">{children}</div>
    </div>
  );
};
export default layout;

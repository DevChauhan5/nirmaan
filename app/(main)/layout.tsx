import { toast } from "@/components/ui/use-toast";
import { account } from "@/config/appwrite";
import { redirect } from "next/navigation";
import React, { use } from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default MainLayout;

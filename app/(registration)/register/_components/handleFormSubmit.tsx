
import { toast } from "@/components/ui/use-toast";
import { database } from "@/config/appwrite";
import { ID } from "appwrite";

export async function handleFormSubmit({ values }: { values: any }) {
  const promise = database.createDocument(
    process.env.NEXT_PUBLIC_DATABASE_ID || "",
    process.env.NEXT_PUBLIC_COLLECTION_ID || "",
    ID.unique(),
    {
      Name: values.name,
      Email: values.email,
      CollegeName: values.collegeName,
    }
  );

  promise.then(
    function (response) {
      toast({
        title: "Form Submitted !",
        description: "Make sure to check your email for further instructions.",
      })
    },
    function (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Try again later.",
      })
    }
  );
}

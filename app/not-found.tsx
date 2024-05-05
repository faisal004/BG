import Link from "next/link";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const NotFoundPage = () => {
  return ( 
    <div className="h-screen flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <Image src="/not-found.svg" alt="Not Found" height={300} width={300}/>
      <p>
        We couldn&apos;t find the page you were looking for.
      </p>
      <Button variant="secondary" asChild>
        <Link href="/">
          Go back home
        </Link>
      </Button>
    </div>
  );
};
 
export default NotFoundPage;
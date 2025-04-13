import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardTitle, CardDescription, CardContent, CardHeader } from "@/components/ui/card";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Sessions() {
  const authHeaders: any = await headers();
  const sessions = await auth.api.listSessions({
    headers: authHeaders
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Shield className="h-5 w-5 mr-2" />
            Sessions
        </CardTitle>
        <CardDescription>Manage your active sessions.</CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter>
        <Button
          variant="destructive"
          // onClick={handleRevokeAllOtherSessions}
          disabled={sessions.length <= 1}
        >
          Revoke All Other Sessions
        </Button>
      </CardFooter>
    </Card>
  );
}
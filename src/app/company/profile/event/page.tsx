import { twp, cn } from "@/server/utils";
import { Button } from "@/app/_components/ui/button";
import { Tabs } from "@/app/_components/ui/tabs";
import { Avatar } from "@/app/_components/ui/avatar";
import { CardContent, CardFooter, Card } from "@/app/_components/ui/card";

export default function Component() {
  return (
    <div className={cn("bg-white p-8")}>
      <div className={cn("text-sm font-semibold text-gray-500 mb-4")}>Previously live</div>
      <div className={cn("aspect-w-16 aspect-h-9 bg-gray-200 mb-4")}>
        <img
          alt="Video thumbnail"
          height="225"
          src="/placeholder.svg"
          style={{
            aspectRatio: "400/225",
            objectFit: "cover",
          }}
          width="400"
        />
      </div>
      <div className={cn("text-2xl font-bold mb-2")}>The Future of Work: Reinventing Productivity with AI</div>
      <div className={cn("text-sm text-gray-500 mb-4")}>Event by Microsoft</div>
      <div className={cn("text-sm text-gray-700 mb-6")}>
        Thu, Mar 16, 2023, 8:00 AM - 9:00 AM (your local time)
        <br />
        31,640 attendees
      </div>
      <div className={cn("flex items-center space-x-2 mb-8")}>
        <Button className={cn("bg-blue-600 text-white")} variant="default">
          Share
        </Button>
        <Button className={cn("bg-gray-200")} variant="default">
          {/* <CircleEllipsisIcon className={cn("text-gray-600")} /> */}
        </Button>
      </div>
      <div className={cn("border-t border-gray-200 pt-4")}>
        <Tabs>
          <div className={cn("flex space-x-4 mb-4")}>
            <Button className={cn("text-blue-600")} variant="ghost">
              Details
            </Button>
            <Button variant="ghost">Comments</Button>
          </div>
        </Tabs>
        <div className={cn("text-lg font-semibold mb-2")}>About</div>
        <div className={cn("text-sm text-gray-700 mb-8")}>
          Join us for a special event with Satya Nadella and Jared Spataro to learn how AI will power a whole new way of
          working for every person and organization. The live stream starts at 8 AM Pacific Time on March 16.
        </div>
        <div className={cn("text-lg font-semibold mb-4")}>Speakers</div>
        <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4")}>
          <Card className={cn("w-full")}>
            <CardContent>
              <div className={cn("flex items-center space-x-4")}>
                <Avatar alt="Jared Spataro" src="/placeholder.svg?height=48&width=48" />
                <div>
                  <div className={cn("font-semibold")}>Jared Spataro</div>
                  <div className={cn("text-sm text-gray-500")}>
                    3rd+ Corporate Vice President, Modern Work & Business...
                  </div>
                  <div className={cn("text-sm text-gray-700")}>50,634 Followers</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className={cn("flex justify-between")}>
              <Button variant="outline">+ Follow</Button>
            </CardFooter>
          </Card>
          <Card className={cn("w-full")}>
            <CardContent>
              <div className={cn("flex items-center space-x-4")}>
                <Avatar alt="Satya Nadella" src="/placeholder.svg?height=48&width=48" />
                <div>
                  <div className={cn("font-semibold")}>Satya Nadella</div>
                  <div className={cn("text-sm text-gray-500")}>3rd+ Chairman and CEO at Microsoft</div>
                  <div className={cn("text-sm text-gray-700")}>10,668,503 Followers</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className={cn("flex justify-between")}>
              <Button variant="outline">+ Follow</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
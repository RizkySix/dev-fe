import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Activity } from "../response/activity.response";

import { ExpandedButton } from "@/components/custom-ui/expanded.button";
import ActivityCard from "./utility-components/activity.card";
import { ActivityLandingPage } from "../paramater/activity.paramater";
import { LandingPageActivityMobileSection } from "./landing-page-mobile.activity";
import { LandingPageActivityDesktopSection } from "./landing-page-desktop.activity";

export function LandingPagePopularActivitySection(props: ActivityLandingPage) {
  return (
    <div>
       {/* Mobile */}
       <LandingPageActivityMobileSection popular_activity={props.popular_activity} best_deals_activity={props.best_deals_activity} />
      
      {/* Large */}
      <LandingPageActivityDesktopSection popular_activity={props.popular_activity} best_deals_activity={props.best_deals_activity} />
      <div className="pt-8 mx-auto w-3/4 md:w-1/3 ">
        <ExpandedButton title="See More" />
      </div>
    </div>
  );
}
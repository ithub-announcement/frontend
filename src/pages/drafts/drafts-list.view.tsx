import { DraftsList } from "@/entities/drafts/components/drafts-list/drafts-list.component";
import { SendedReviewsList } from "@/entities/review/components/sended-reviews/sended-reviews.component";
import { useGetCountOfSendedReviewsQuery } from "@/entities/review/review.api";
import { useTitle } from "@/shared/hooks/react/useTitle.hook";
import { Center } from "@/widgets/center/center.component";
import { Badge, Button, TabItem, Tabs, Tooltip } from "flowbite-react";
import { FC } from "react";
import { GoIssueDraft } from "react-icons/go";
import { PiEyesFill } from "react-icons/pi";
import { VscAdd } from "react-icons/vsc";

const DraftsListView: FC = () => {
  useTitle("Черновики");

  const { data } = useGetCountOfSendedReviewsQuery();

  return (
    <Center>
      <div className="w-full min-h-screen h-full">
        <div>
          <div>
            <div className="flex justify-between items-center mb-10">
              <h1 className="text-3xl sm:text-5xl font-bold">Ваши черновики</h1>
              <Tooltip content="Создать новый" placement="bottom">
                <Button
                  className="h-full text-center flex justify-center items-center leading-none z-10"
                  color="transparent"
                  href="/editor"
                >
                  <VscAdd className="text-xl" />
                </Button>
              </Tooltip>
            </div>
            <div>
              <Tabs style="underline">
                <TabItem title="Черновики" icon={GoIssueDraft}>
                  <DraftsList />
                </TabItem>
                <TabItem
                  title={
                    <div className="flex flex-row gap-3">
                      <span>На рассмотрении</span>
                      {data && <Badge color="gray" children={data} />}
                    </div>
                  }
                  icon={PiEyesFill}
                >
                  <SendedReviewsList />
                </TabItem>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </Center>
  );
};

export default DraftsListView;
